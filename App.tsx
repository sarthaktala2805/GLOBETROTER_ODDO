import React, { useState, useEffect } from 'react';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Pages
import { LandingPage } from './pages/LandingPage';
import { AuthPage } from './pages/AuthPage';
import { DashboardPage } from './pages/DashboardPage';
import { MyTripsPage } from './pages/MyTripsPage';
import { CreateTripPage } from './pages/CreateTripPage';
import { TripDetailsPage } from './pages/TripDetailsPage';
import { CityDiscoveryPage } from './pages/CityDiscoveryPage';
import { PublicTripPage } from './pages/PublicTripPage';
import { ProfilePage } from './pages/ProfilePage';
import { GeminiPlannerModal } from './components/ai/GeminiPlannerModal';
import { useStates } from './hooks/useCityData';

export function AppContent() {
  const [currentPage, setCurrentPage] = useState<string>('landing');
  const [pageParams, setPageParams] = useState<any>({});
  const [aiModalGlobalOpen, setAiModalGlobalOpen] = useState(false);

  const { states } = useStates();

  // Hash route sync
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '');
      if (hash.startsWith('public/')) {
        const shareId = hash.replace('public/', '');
        setCurrentPage('public-trip');
        setPageParams({ shareId });
      } else if (hash.startsWith('trip/')) {
        const tripId = hash.replace('trip/', '');
        setCurrentPage('trip-details');
        setPageParams({ tripId });
      } else if (hash) {
        setCurrentPage(hash);
      }
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (page: string, params?: any) => {
    if (page === 'ai-planner') {
      setAiModalGlobalOpen(true);
      return;
    }
    setCurrentPage(page);
    setPageParams(params || {});

    if (page === 'trip-details' && params?.tripId) {
      window.location.hash = `#/trip/${params.tripId}`;
    } else if (page === 'public-trip' && params?.shareId) {
      window.location.hash = `#/public/${params.shareId}`;
    } else {
      window.location.hash = `#/${page}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onNavigate={navigate} />;
      case 'auth':
        return <AuthPage onNavigate={navigate} />;
      case 'dashboard':
        return <DashboardPage onNavigate={navigate} />;
      case 'my-trips':
        return <MyTripsPage onNavigate={navigate} />;
      case 'create-trip':
        return <CreateTripPage onNavigate={navigate} />;
      case 'trip-details':
        return <TripDetailsPage tripId={pageParams.tripId || 'demo-trip-1'} onNavigate={navigate} />;
      case 'city-discovery':
        return (
          <CityDiscoveryPage
            initialState={pageParams.state}
            initialCityId={pageParams.cityId}
            onNavigate={navigate}
          />
        );
      case 'public-trip':
        return <PublicTripPage shareId={pageParams.shareId || 'rajasthan-royal-yatra-77'} onNavigate={navigate} />;
      case 'profile':
        return <ProfilePage />;
      default:
        return <LandingPage onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#0b0f19]">
      <div>
        <Navbar currentTab={currentPage} onNavigate={navigate} />
        <main>{renderPage()}</main>
      </div>

      <Footer />

      {/* Global AI Planner Modal — guides user to pick an active trip */}
      <GeminiPlannerModal
        isOpen={aiModalGlobalOpen}
        onClose={() => setAiModalGlobalOpen(false)}
        states={[]}
        onImportItinerary={(_plan, _days, _acts) => {
          // Global context has no active trip — guide the user
          setAiModalGlobalOpen(false);
          navigate('my-trips');
          setTimeout(() => {
            alert('Open any Yatra workspace, then use the AI Yatra Assistant inside that trip to import suggestions directly into your itinerary.');
          }, 300);
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
