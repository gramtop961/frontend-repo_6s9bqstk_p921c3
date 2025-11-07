import React from 'react';
import { Compass, User, LogIn } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
              <Compass className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-slate-800">YMY Consultancy</span>
          </div>
          <nav className="flex items-center gap-2">
            <button className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
              <LogIn className="h-4 w-4" />
              Log in
            </button>
            <button className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-2 text-sm font-medium text-white shadow hover:shadow-md">
              <User className="h-4 w-4" />
              Sign up
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
