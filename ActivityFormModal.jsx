import React, { useState, useEffect } from 'react';
import {
  X,
  Plus,
  Clock,
  MapPin,
  IndianRupee,
  Calendar,
  CheckCircle2,
  Landmark,
  Utensils,
  Hotel,
  Eye,
  Flame,
  Compass,
  Bus,
  Sun
} from 'lucide-react';
import { formatINR } from '../../utils/currency';

const CATEGORIES = [
  { id: 'Heritage', label: 'Heritage & Monument', icon: Landmark, color: 'bg-amber-500' },
  { id: 'Sightseeing', label: 'Sightseeing & Nature', icon: Eye, color: 'bg-emerald-500' },
  { id: 'Food', label: 'Food & Dining', icon: Utensils, color: 'bg-orange-500' },
  { id: 'Stay', label: 'Hotel / Living Stay', icon: Hotel, color: 'bg-indigo-500' },
  { id: 'Spiritual', label: 'Spiritual & Temple', icon: Flame, color: 'bg-purple-500' },
  { id: 'Adventure', label: 'Adventure & Safari', icon: Compass, color: 'bg-rose-500' },
  { id: 'Transit', label: 'Transit / Travel', icon: Bus, color: 'bg-blue-500' },
  { id: 'Leisure', label: 'Leisure & Shopping', icon: Sun, color: 'bg-teal-500' }
];

export default function ActivityFormModal({
  isOpen,
  onClose,
  onSave,
  initialActivity = null,
  stopCity = 'City Stop',
  stopDates = {}
}) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Sightseeing');
  const [timeSlot, setTimeSlot] = useState('10:00 AM');
  const [dayNumber, setDayNumber] = useState(1);
  const [location, setLocation] = useState('');
  const [cost, setCost] = useState(500);
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (initialActivity) {
      setTitle(initialActivity.title || '');
      setCategory(initialActivity.category || 'Sightseeing');
      setTimeSlot(initialActivity.timeSlot || '10:00 AM');
      setDayNumber(initialActivity.dayNumber || 1);
      setLocation(initialActivity.location || '');
      setCost(initialActivity.cost !== undefined ? initialActivity.cost : 500);
      setNotes(initialActivity.notes || '');
    } else {
      setTitle('');
      setCategory('Sightseeing');
      setTimeSlot('10:00 AM');
      setDayNumber(1);
      setLocation(stopCity);
      setCost(500);
      setNotes('');
    }
    setError('');
  }, [initialActivity, isOpen, stopCity]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Activity Title is required');
      return;
    }

    const activityData = {
      title: title.trim(),
      category,
      timeSlot,
      dayNumber: Number(dayNumber) || 1,
      location: location.trim() || stopCity,
      cost: Number(cost) || 0,
      notes: notes.trim()
    };

    onSave(activityData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm overflow-y-auto animate-fade-in">
      <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl border border-amber-100/80 overflow-hidden my-auto animate-scale-up">
        
        {/* Header */}
        <div className="bg-gradient-royal p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-amber-500/20 text-amber-300 rounded-xl border border-amber-400/30">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-300">
                {stopCity} Itinerary
              </span>
              <h3 className="text-lg font-bold">
                {initialActivity ? 'Edit Scheduled Activity' : 'Add Activity to Itinerary'}
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
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
          
          {/* Title */}
          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
              Activity Title / गतिविधि का नाम <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                setError('');
              }}
              placeholder="e.g., Qutub Minar Complex Tour & History Walk"
              className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm font-semibold text-stone-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-700/20 focus:border-indigo-700"
            />
            {error && (
              <p className="mt-1 text-xs text-rose-600 font-medium">{error}</p>
            )}
          </div>

          {/* Category Selector */}
          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
              Category
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {CATEGORIES.map((cat) => {
                const Icon = cat.icon;
                const isSelected = category === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setCategory(cat.id)}
                    className={`p-2.5 rounded-xl border text-left flex items-center gap-2 transition-all ${
                      isSelected
                        ? 'bg-indigo-900 text-white border-indigo-900 shadow-sm'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:border-amber-300'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-amber-400' : 'text-stone-500'}`} />
                    <span className="text-xs font-bold truncate">{cat.id}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Time Slot & Day Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                Time Slot
              </label>
              <div className="relative">
                <Clock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
                <input
                  type="text"
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  placeholder="e.g., 09:30 AM or 04:00 PM"
                  className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm font-semibold text-stone-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-700/20"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                Estimated Cost (₹ INR)
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-stone-500 font-bold text-sm">
                  ₹
                </span>
                <input
                  type="number"
                  min="0"
                  step="50"
                  value={cost}
                  onChange={(e) => setCost(e.target.value)}
                  placeholder="Cost in ₹"
                  className="w-full pl-8 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm font-bold text-stone-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600"
                />
              </div>
            </div>
          </div>

          {/* Landmark / Location */}
          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
              Landmark / Location
            </label>
            <div className="relative">
              <MapPin className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g., Mehrauli Archaeological Park, New Delhi"
                className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm font-medium text-stone-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-700/20"
              />
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
              Notes & Highlights
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g., Entry tickets, dress code for temple, or photography tips..."
              className="w-full px-4 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-900 placeholder:text-stone-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-700/20 resize-none"
            />
          </div>

          {/* Modal Actions */}
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
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 text-white font-bold text-xs shadow-md flex items-center gap-1.5"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Save Activity</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
