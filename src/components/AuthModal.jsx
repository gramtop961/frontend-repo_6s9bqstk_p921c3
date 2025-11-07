import React from 'react';
import { X, Mail, Lock, User as UserIcon } from 'lucide-react';

export default function AuthModal({ mode = 'signin', onClose, onSwitchMode, onSubmit }) {
  const [currentMode, setCurrentMode] = React.useState(mode);
  const [form, setForm] = React.useState({ name: '', email: '', password: '' });

  React.useEffect(() => setCurrentMode(mode), [mode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(currentMode, form);
  };

  const switchMode = (m) => {
    setCurrentMode(m);
    onSwitchMode?.(m);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/60" onClick={onClose} />
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-900/10">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="p-6 sm:p-8">
          <div className="mb-6 flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
              <UserIcon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                {currentMode === 'signin' ? 'Welcome back' : 'Create your account'}
              </h3>
              <p className="text-sm text-slate-600">
                {currentMode === 'signin' ? 'Sign in to continue your journey.' : 'Join YMY Consultancy in minutes.'}
              </p>
            </div>
          </div>

          <div className="mb-4 grid grid-cols-2 gap-2 rounded-lg bg-slate-100 p-1 text-sm font-medium">
            <button
              onClick={() => switchMode('signin')}
              className={`${currentMode === 'signin' ? 'bg-white shadow' : ''} rounded-md px-3 py-2 text-slate-700`}
            >
              Sign in
            </button>
            <button
              onClick={() => switchMode('signup')}
              className={`${currentMode === 'signup' ? 'bg-white shadow' : ''} rounded-md px-3 py-2 text-slate-700`}
            >
              Sign up
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {currentMode === 'signup' && (
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Full name</label>
                <div className="flex items-center rounded-lg border border-slate-300 bg-white px-3">
                  <UserIcon className="h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className="w-full border-0 bg-transparent px-2 py-2.5 text-slate-900 placeholder:text-slate-400 focus:outline-none"
                    required
                  />
                </div>
              </div>
            )}

            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
              <div className="flex items-center rounded-lg border border-slate-300 bg-white px-3">
                <Mail className="h-4 w-4 text-slate-400" />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full border-0 bg-transparent px-2 py-2.5 text-slate-900 placeholder:text-slate-400 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Password</label>
              <div className="flex items-center rounded-lg border border-slate-300 bg-white px-3">
                <Lock className="h-4 w-4 text-slate-400" />
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full border-0 bg-transparent px-2 py-2.5 text-slate-900 placeholder:text-slate-400 focus:outline-none"
                  required
                  minLength={6}
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2.5 font-semibold text-white shadow hover:shadow-md"
            >
              {currentMode === 'signin' ? 'Sign in' : 'Create account'}
            </button>
          </form>

          {currentMode === 'signin' ? (
            <p className="mt-4 text-center text-sm text-slate-600">
              No account yet?{' '}
              <button onClick={() => switchMode('signup')} className="font-medium text-blue-600 hover:underline">
                Sign up
              </button>
            </p>
          ) : (
            <p className="mt-4 text-center text-sm text-slate-600">
              Already have an account?{' '}
              <button onClick={() => switchMode('signin')} className="font-medium text-blue-600 hover:underline">
                Sign in
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
