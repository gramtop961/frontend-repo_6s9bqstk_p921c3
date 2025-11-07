import React from 'react';
import { Star, MapPin, MessageSquare } from 'lucide-react';

export default function GuideCard({ guide, onChat, onBook }) {
  return (
    <div className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md">
      <div className="flex gap-4">
        <img
          src={guide.photo}
          alt={guide.name}
          className="h-20 w-20 rounded-lg object-cover"
        />
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">{guide.name}</h3>
              <div className="mt-1 flex items-center gap-2 text-sm text-slate-600">
                <MapPin className="h-4 w-4" />
                <span>{guide.city}</span>
                <span className="h-1 w-1 rounded-full bg-slate-300" />
                <span>{guide.languages.join(', ')}</span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-amber-500">
              <Star className="h-4 w-4 fill-amber-400" />
              <span className="text-sm font-medium text-slate-700">{guide.rating.toFixed(1)}</span>
            </div>
          </div>
          <p className="mt-2 line-clamp-2 text-sm text-slate-600">{guide.bio}</p>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-slate-700"><span className="font-semibold text-slate-900">${guide.price}/hr</span></p>
            <div className="flex gap-2">
              <button onClick={() => onChat?.(guide)} className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                <MessageSquare className="h-4 w-4" /> Chat
              </button>
              <button onClick={() => onBook?.(guide)} className="rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow hover:shadow-md">
                Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
