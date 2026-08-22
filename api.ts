import { Trip, Stop, Activity } from '../types';

const API_BASE = '/api';

export const api = {
  // Fetch all trips (Screen 4)
  async getTrips(): Promise<Trip[]> {
    const res = await fetch(`${API_BASE}/trips`);
    if (!res.ok) throw new Error('Failed to fetch trips');
    const json = await res.json();
    return json.data;
  },

  // Fetch single trip with nested stops & activities (Screens 5, 6, 10)
  async getTrip(id: string): Promise<Trip> {
    const res = await fetch(`${API_BASE}/trips/${id}`);
    if (!res.ok) throw new Error('Failed to fetch trip details');
    const json = await res.json();
    return json.data;
  },

  // Create new trip (Screen 3)
  async createTrip(tripData: Partial<Trip>): Promise<Trip> {
    const res = await fetch(`${API_BASE}/trips`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tripData),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ message: 'Failed to create trip' }));
      throw new Error(err.message || 'Failed to create trip');
    }
    const json = await res.json();
    return json.data;
  },

  // Update trip
  async updateTrip(id: string, tripData: Partial<Trip>): Promise<Trip> {
    const res = await fetch(`${API_BASE}/trips/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tripData),
    });
    if (!res.ok) throw new Error('Failed to update trip');
    const json = await res.json();
    return json.data;
  },

  // Delete trip (Screen 4)
  async deleteTrip(id: string): Promise<void> {
    const res = await fetch(`${API_BASE}/trips/${id}`, {
      method: 'DELETE',
    });
    if (!res.ok) throw new Error('Failed to delete trip');
  },

  // Add stop to trip (Screen 5)
  async addStop(tripId: string, stopData: Partial<Stop>): Promise<{ stop: Stop; trip: Trip }> {
    const res = await fetch(`${API_BASE}/trips/${tripId}/stops`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(stopData),
    });
    if (!res.ok) throw new Error('Failed to add city stop');
    const json = await res.json();
    return { stop: json.data, trip: json.trip };
  },

  // Update stop (Screen 5)
  async updateStop(tripId: string, stopId: string, stopData: Partial<Stop>): Promise<{ stop: Stop; trip: Trip }> {
    const res = await fetch(`${API_BASE}/trips/${tripId}/stops/${stopId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(stopData),
    });
    if (!res.ok) throw new Error('Failed to update stop');
    const json = await res.json();
    return { stop: json.data, trip: json.trip };
  },

  // Remove stop (Screen 5)
  async deleteStop(tripId: string, stopId: string): Promise<Trip> {
    const res = await fetch(`${API_BASE}/trips/${tripId}/stops/${stopId}`, {
      method: 'DELETE',
    });
    if (!res.ok) throw new Error('Failed to remove stop');
    const json = await res.json();
    return json.trip;
  },

  // Reorder stops (Screen 5)
  async reorderStops(tripId: string, stopIds: string[]): Promise<Trip> {
    const res = await fetch(`${API_BASE}/trips/${tripId}/stops/reorder`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ stopIds }),
    });
    if (!res.ok) throw new Error('Failed to reorder stops');
    const json = await res.json();
    return json.trip;
  },

  // Add activity (Screen 5)
  async addActivity(tripId: string, stopId: string, activityData: Partial<Activity>): Promise<{ activity: Activity; trip: Trip }> {
    const res = await fetch(`${API_BASE}/trips/${tripId}/stops/${stopId}/activities`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(activityData),
    });
    if (!res.ok) throw new Error('Failed to schedule activity');
    const json = await res.json();
    return { activity: json.data, trip: json.trip };
  },

  // Update activity (Screen 5)
  async updateActivity(
    tripId: string,
    stopId: string,
    activityId: string,
    activityData: Partial<Activity>
  ): Promise<{ activity: Activity; trip: Trip }> {
    const res = await fetch(`${API_BASE}/trips/${tripId}/stops/${stopId}/activities/${activityId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(activityData),
    });
    if (!res.ok) throw new Error('Failed to update activity');
    const json = await res.json();
    return { activity: json.data, trip: json.trip };
  },

  // Delete activity (Screen 5)
  async deleteActivity(tripId: string, stopId: string, activityId: string): Promise<Trip> {
    const res = await fetch(`${API_BASE}/trips/${tripId}/stops/${stopId}/activities/${activityId}`, {
      method: 'DELETE',
    });
    if (!res.ok) throw new Error('Failed to delete activity');
    const json = await res.json();
    return json.trip;
  },

  // Reset data to seed samples
  async resetData(): Promise<Trip[]> {
    const res = await fetch(`${API_BASE}/reset`, { method: 'POST' });
    if (!res.ok) throw new Error('Failed to reset data');
    const json = await res.json();
    return json.data;
  },
};
