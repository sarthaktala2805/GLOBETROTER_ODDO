-- GLOBETROTTER — BHARAT YATRA EDITION
-- SUPABASE POSTGRESQL SCHEMA & RLS SECURITY POLICIES

-- Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. USERS PROFILE TABLE
CREATE TABLE IF NOT EXISTS public.users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  avatar_url TEXT,
  home_city TEXT DEFAULT 'New Delhi',
  preferred_language TEXT DEFAULT 'English',
  preferred_currency TEXT DEFAULT 'INR',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. CITIES TABLE
CREATE TABLE IF NOT EXISTS public.cities (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  state TEXT NOT NULL,
  country TEXT DEFAULT 'India',
  region TEXT NOT NULL,
  latitude DOUBLE PRECISION NOT NULL,
  longitude DOUBLE PRECISION NOT NULL,
  cost_index INT DEFAULT 3,
  popularity_score INT DEFAULT 80,
  description TEXT,
  image_url TEXT,
  image_landmark TEXT,
  popular_categories JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. LANDMARKS TABLE
CREATE TABLE IF NOT EXISTS public.landmarks (
  id TEXT PRIMARY KEY,
  city_id TEXT NOT NULL REFERENCES public.cities(id) ON DELETE CASCADE,
  city_name TEXT NOT NULL,
  state TEXT NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL,
  image_url TEXT,
  estimated_cost NUMERIC(10, 2) DEFAULT 0.00,
  rating NUMERIC(3, 1) DEFAULT 4.5
);

-- 4. HOTELS TABLE
CREATE TABLE IF NOT EXISTS public.hotels (
  id TEXT PRIMARY KEY,
  city_id TEXT NOT NULL REFERENCES public.cities(id) ON DELETE CASCADE,
  city_name TEXT NOT NULL,
  state TEXT NOT NULL,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  rating NUMERIC(3, 1) DEFAULT 4.5,
  price_per_night NUMERIC(10, 2) NOT NULL,
  location_address TEXT,
  amenities JSONB DEFAULT '[]'::jsonb,
  image_url TEXT
);

-- 5. ACTIVITIES TABLE
CREATE TABLE IF NOT EXISTS public.activities (
  id TEXT PRIMARY KEY,
  city_id TEXT NOT NULL REFERENCES public.cities(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  estimated_cost NUMERIC(10, 2) DEFAULT 0.00,
  duration_minutes INT DEFAULT 60,
  image_url TEXT,
  rating NUMERIC(3, 1) DEFAULT 4.5
);

-- 6. TRIPS TABLE
CREATE TABLE IF NOT EXISTS public.trips (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  total_budget NUMERIC(12, 2) NOT NULL,
  currency TEXT DEFAULT 'INR',
  status TEXT CHECK (status IN ('Draft', 'Upcoming', 'Active', 'Completed')) DEFAULT 'Draft',
  is_public BOOLEAN DEFAULT FALSE,
  share_id TEXT UNIQUE DEFAULT encode(gen_random_bytes(8), 'hex'),
  cover_image TEXT,
  selected_hotel_id TEXT,
  selected_hotel_name TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. TRIP STOPS TABLE
CREATE TABLE IF NOT EXISTS public.trip_stops (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  trip_id UUID NOT NULL REFERENCES public.trips(id) ON DELETE CASCADE,
  city_id TEXT NOT NULL REFERENCES public.cities(id),
  city_name TEXT NOT NULL,
  state TEXT NOT NULL,
  stop_order INT NOT NULL,
  arrival_date DATE NOT NULL,
  departure_date DATE NOT NULL,
  notes TEXT
);

-- 8. ITINERARY ITEMS TABLE
CREATE TABLE IF NOT EXISTS public.itinerary_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  trip_id UUID NOT NULL REFERENCES public.trips(id) ON DELETE CASCADE,
  trip_stop_id UUID REFERENCES public.trip_stops(id) ON DELETE SET NULL,
  city_id TEXT NOT NULL REFERENCES public.cities(id),
  city_name TEXT NOT NULL,
  activity_id TEXT,
  title TEXT NOT NULL,
  category TEXT DEFAULT 'Sightseeing',
  date DATE NOT NULL,
  time_slot TEXT CHECK (time_slot IN ('Morning', 'Afternoon', 'Evening', 'Night')),
  estimated_cost NUMERIC(10, 2) DEFAULT 0.00,
  item_order INT DEFAULT 0,
  notes TEXT,
  image_url TEXT,
  completed BOOLEAN DEFAULT FALSE
);

-- 9. EXPENSES TABLE
CREATE TABLE IF NOT EXISTS public.expenses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  trip_id UUID NOT NULL REFERENCES public.trips(id) ON DELETE CASCADE,
  category TEXT CHECK (category IN ('Stay', 'Food', 'Travel', 'Activities', 'Shopping', 'Misc')),
  amount NUMERIC(10, 2) NOT NULL,
  description TEXT NOT NULL,
  expense_date DATE NOT NULL,
  city_name TEXT
);

-- INDEXES FOR ZERO CONTAMINATION & HIGH PERFORMANCE
CREATE INDEX IF NOT EXISTS idx_cities_state ON public.cities(state);
CREATE INDEX IF NOT EXISTS idx_activities_city ON public.activities(city_id);
CREATE INDEX IF NOT EXISTS idx_landmarks_city ON public.landmarks(city_id);
CREATE INDEX IF NOT EXISTS idx_hotels_city ON public.hotels(city_id);
CREATE INDEX IF NOT EXISTS idx_trips_user ON public.trips(user_id);
CREATE INDEX IF NOT EXISTS idx_trips_share ON public.trips(share_id);
CREATE INDEX IF NOT EXISTS idx_trip_stops_trip ON public.trip_stops(trip_id);
CREATE INDEX IF NOT EXISTS idx_itinerary_trip ON public.itinerary_items(trip_id);
CREATE INDEX IF NOT EXISTS idx_expenses_trip ON public.expenses(trip_id);

-- ROW LEVEL SECURITY (RLS) POLICIES
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.landmarks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.hotels ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.trips ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.trip_stops ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.itinerary_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.expenses ENABLE ROW LEVEL SECURITY;

-- Public Data Read Access (Cities, Landmarks, Hotels, Activities)
CREATE POLICY "Public cities are viewable by all" ON public.cities FOR SELECT USING (true);
CREATE POLICY "Public landmarks are viewable by all" ON public.landmarks FOR SELECT USING (true);
CREATE POLICY "Public hotels are viewable by all" ON public.hotels FOR SELECT USING (true);
CREATE POLICY "Public activities are viewable by all" ON public.activities FOR SELECT USING (true);

-- User Profiles
CREATE POLICY "Users can view own profile" ON public.users FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON public.users FOR UPDATE USING (auth.uid() = id);

-- Trips Authorization
CREATE POLICY "Users can read own trips or public trips" ON public.trips
  FOR SELECT USING (auth.uid() = user_id OR is_public = true);

CREATE POLICY "Users can create own trips" ON public.trips
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own trips" ON public.trips
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own trips" ON public.trips
  FOR DELETE USING (auth.uid() = user_id);

-- Trip Stops Authorization
CREATE POLICY "View trip stops if owner or trip is public" ON public.trip_stops
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM public.trips WHERE trips.id = trip_stops.trip_id AND (trips.user_id = auth.uid() OR trips.is_public = true))
  );

CREATE POLICY "Manage trip stops if trip owner" ON public.trip_stops
  FOR ALL USING (
    EXISTS (SELECT 1 FROM public.trips WHERE trips.id = trip_stops.trip_id AND trips.user_id = auth.uid())
  );

-- Itinerary Items Authorization
CREATE POLICY "View itinerary if owner or trip is public" ON public.itinerary_items
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM public.trips WHERE trips.id = itinerary_items.trip_id AND (trips.user_id = auth.uid() OR trips.is_public = true))
  );

CREATE POLICY "Manage itinerary if trip owner" ON public.itinerary_items
  FOR ALL USING (
    EXISTS (SELECT 1 FROM public.trips WHERE trips.id = itinerary_items.trip_id AND trips.user_id = auth.uid())
  );

-- Expenses Authorization (Private to Owner Only)
CREATE POLICY "View expenses if trip owner" ON public.expenses
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM public.trips WHERE trips.id = expenses.trip_id AND trips.user_id = auth.uid())
  );

CREATE POLICY "Manage expenses if trip owner" ON public.expenses
  FOR ALL USING (
    EXISTS (SELECT 1 FROM public.trips WHERE trips.id = expenses.trip_id AND trips.user_id = auth.uid())
  );
