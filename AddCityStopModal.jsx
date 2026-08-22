import React, { useState } from 'react';
import { X, MapPin, Calendar, CheckCircle2, Bus, Train, Plane, Car, Sparkles } from 'lucide-react';
import CitySearchSelect from '../common/CitySearchSelect';
import { calculateDaysAndNights } from '../../utils/dateUtils';

const TRANSIT_OPTIONS = [
  { id: 'Train', label: 'Train / Vande Bharat', icon: Train },
  { id: 'Flight', label: 'Flight', icon: Plane },
  { id: 'Cab', label: 'Private Cab / Taxi', icon: Car },
  { id: 'Bus', label: 'Luxury Volvo Bus', icon: Bus }
];

export default function AddCityStopModal({
  isOpen,
  onClose,
  trip,
  onAddStop
}) {
  const [selectedCity, setSelectedCity] = useState(null);
  const [arrivalDate, setArrivalDate] = useState(trip?.startDate || '');
  const [departureDate, setDepartureDate] = useState(trip?.endDate || '');
  const [transitMode, setTransitMode] = useState('Train');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const duration = calculateDaysAndNights(arrivalDate, departureDate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedCity) {
      setError('Please select an Indian city destination');
      return;
    }
    if (!arrivalDate || !departureDate) {
      setError('Please provide arrival and departure dates');
      return;
    }
    if (arrivalDate > departureDate) {
      setError('Departure date cannot be before arrival date');
      return;
    }

    onAddStop({
      city: selectedCity.name,
      cityId: selectedCity.id,
      state: selectedCity.state,
      lat: selectedCity.lat,
      lng: selectedCity.lng,
      arrivalDate,
      departureDate,
      transitMode,
      notes
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl border border-amber-100/80 overflow-hidden my-auto animate-scale-up">
        
        {/* Header */}
        <div className="bg-gradient-royal p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500/20 text-amber-300 rounded-xl border border-amber-400/30">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-300">
                Multi-City Route Builder
              </span>
              <h3 className="text-lg font-bold">
                Add City Destination Stop
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-stone-300 hover:text-white p-1.5 rounded-full hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          
          {/* Destination Autocomplete */}
          <div>
            <CitySearchSelect
              selectedCity={selectedCity}
              onSelectCity={(c) => {
                setSelectedCity(c);
                setError('');
              }}
              label="Destination City (India)"
            />
            {error && (
              <p className="mt-1.5 text-xs text-rose-600 font-medium">{error}</p>
            )}
          </div>

          {/* Sub-Dates for this stop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase mb-1.5">
                Arrival Date in City
              </label>
              <input
                type="date"
                value={arrivalDate}
                min={trip?.startDate}
                max={trip?.endDate}
                onChange={(e) => setArrivalDate(e.target.value)}
                className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm font-semibold text-stone-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-700/20"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase mb-1.5">
                Departure Date
              </label>
              <input
                type="date"
                value={departureDate}
                min={arrivalDate || trip?.startDate}
                max={trip?.endDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm font-semibold text-stone-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-700/20"
              />
            </div>
          </div>

          {arrivalDate && departureDate && (
            <div className="p-2.5 bg-indigo-50 rounded-xl text-xs font-semibold text-indigo-900 flex items-center justify-between border border-indigo-100">
              <span>City Stay Duration:</span>
              <strong className="text-indigo-950">{duration.label}</strong>
            </div>
          )}

          {/* Transit Mode Selection */}
          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase mb-2">
              Transit Mode into City
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {TRANSIT_OPTIONS.map((t) => {
                const Icon = t.icon;
                const isSelected = transitMode === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTransitMode(t.id)}
                    className={`p-2.5 rounded-xl border text-left flex items-center gap-2 transition-all ${
                      isSelected
                        ? 'bg-amber-600 text-white border-amber-600 shadow-sm'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:border-amber-300'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-stone-500'}`} />
                    <span className="text-xs font-bold truncate">{t.id}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase mb-1.5">
              Stop Notes / Objectives
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g., Target sunrise at monuments, try local sweet delicacies..."
              className="w-full px-4 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-700/20 resize-none"
            />
          </div>

          {/* Footer */}
          <div className="pt-4 border-t border-stone-200 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-bold text-stone-600 hover:bg-stone-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-800 to-indigo-950 text-white font-bold text-xs shadow-md flex items-center gap-1.5"
            >
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>Add Stop to Route</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
