import React from 'react';
import { Search } from 'lucide-react';

export default function Hero({ onSearch }) {
  const [query, setQuery] = React.useState('');
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Find trusted tour guides, anywhere
            </h1>
            <p className="text-lg text-slate-600">
              YMY Consultancy connects tourists with vetted local guides. Browse profiles by city, language, price, and availability — book in minutes.
            </p>
            <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
              <div className="flex items-center gap-2">
                <Search className="h-5 w-5 text-slate-400 ml-2" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && onSearch?.(query)}
                  placeholder="Search by city, language, or name"
                  className="w-full rounded-md border-0 bg-transparent px-2 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none"
                />
                <button
                  onClick={() => onSearch?.(query)}
                  className="rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2 text-white font-medium shadow hover:shadow-md"
                >
                  Search
                </button>
              </div>
            </div>
            <div className="flex items-center gap-6 text-slate-600">
              <div className="flex -space-x-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/64?img=${i + 10}`}
                    alt="Happy traveler"
                    className="h-8 w-8 rounded-full ring-2 ring-white"
                  />
                ))}
              </div>
              <p className="text-sm">Trusted by thousands of travelers worldwide</p>
            </div>
          </div>
          <div className="lg:justify-self-end">
            <div className="relative h-80 w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2069&auto=format&fit=crop"
                alt="Scenic destination"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/0" />
              <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-white/90 p-3 backdrop-blur">
                <p className="text-sm text-slate-600">Featured city</p>
                <p className="font-semibold text-slate-900">Kyoto, Japan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
