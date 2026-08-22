import React from 'react';
import {
  Clock,
  MapPin,
  IndianRupee,
  CheckCircle,
  Circle,
  Edit2,
  Trash2,
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

const CATEGORY_ICONS = {
  heritage: Landmark,
  food: Utensils,
  stay: Hotel,
  sightseeing: Eye,
  spiritual: Flame,
  adventure: Compass,
  transit: Bus,
  leisure: Sun
};

const CATEGORY_CLASSES = {
  heritage: 'bg-amber-50 text-amber-800 border-amber-200',
  food: 'bg-orange-50 text-orange-800 border-orange-200',
  stay: 'bg-indigo-50 text-indigo-800 border-indigo-200',
  sightseeing: 'bg-emerald-50 text-emerald-800 border-emerald-200',
  spiritual: 'bg-purple-50 text-purple-800 border-purple-200',
  adventure: 'bg-rose-50 text-rose-800 border-rose-200',
  transit: 'bg-blue-50 text-blue-800 border-blue-200',
  leisure: 'bg-teal-50 text-teal-800 border-teal-200'
};

export default function ActivityItem({
  activity,
  onToggleComplete,
  onEdit,
  onDelete
}) {
  const catKey = (activity.category || 'sightseeing').toLowerCase();
  const IconComponent = CATEGORY_ICONS[catKey] || Eye;
  const badgeStyle = CATEGORY_CLASSES[catKey] || 'bg-stone-50 text-stone-800 border-stone-200';

  return (
    <div className={`p-3.5 rounded-2xl border transition-all ${
      activity.completed
        ? 'bg-stone-50/70 border-stone-200 opacity-75'
        : 'bg-white border-amber-100/90 shadow-xs hover:border-amber-300'
    }`}>
      <div className="flex items-start justify-between gap-3">
        
        {/* Checkbox & Title */}
        <div className="flex items-start gap-2.5 flex-1 min-w-0">
          <button
            type="button"
            onClick={() => onToggleComplete(activity.id)}
            className="mt-0.5 text-stone-400 hover:text-indigo-800 transition-colors flex-shrink-0"
          >
            {activity.completed ? (
              <CheckCircle className="w-5 h-5 text-emerald-600 fill-emerald-100" />
            ) : (
              <Circle className="w-5 h-5" />
            )}
          </button>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold border uppercase tracking-wider flex items-center gap-1 ${badgeStyle}`}>
                <IconComponent className="w-3 h-3" />
                <span>{activity.category}</span>
              </span>

              <span className="text-[11px] font-semibold text-stone-500 flex items-center gap-1">
                <Clock className="w-3 h-3 text-amber-600" />
                <span>{activity.timeSlot}</span>
              </span>
            </div>

            <h4 className={`text-sm font-bold text-stone-900 leading-snug ${
              activity.completed ? 'line-through text-stone-500' : ''
            }`}>
              {activity.title}
            </h4>

            {activity.location && (
              <div className="flex items-center gap-1 text-xs text-stone-500 mt-1">
                <MapPin className="w-3 h-3 text-stone-400 flex-shrink-0" />
                <span className="truncate">{activity.location}</span>
              </div>
            )}

            {activity.notes && (
              <p className="text-xs text-stone-600 mt-1.5 italic bg-stone-50 p-1.5 rounded-lg border border-stone-100">
                {activity.notes}
              </p>
            )}
          </div>
        </div>

        {/* Cost Badge & Actions */}
        <div className="flex flex-col items-end gap-2 flex-shrink-0">
          <span className="px-2.5 py-1 rounded-xl bg-amber-50 text-amber-900 border border-amber-200 text-xs font-extrabold flex items-center gap-0.5 shadow-2xs">
            <IndianRupee className="w-3 h-3 text-amber-700" />
            <span>{formatINR(activity.cost).replace('₹ ', '')}</span>
          </span>

          <div className="flex items-center gap-1 opacity-80 hover:opacity-100">
            <button
              onClick={() => onEdit(activity)}
              title="Edit Activity"
              className="p-1 rounded-lg text-stone-400 hover:text-indigo-800 hover:bg-indigo-50 transition-colors"
            >
              <Edit2 className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onDelete(activity.id)}
              title="Delete Activity"
              className="p-1 rounded-lg text-stone-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
