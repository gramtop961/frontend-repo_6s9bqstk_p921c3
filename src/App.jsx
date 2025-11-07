import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import GuideCard from './components/GuideCard';
import Footer from './components/Footer';

const MOCK_GUIDES = [
  {
    id: 1,
    name: 'Aiko Tanaka',
    city: 'Kyoto',
    languages: ['Japanese', 'English'],
    price: 45,
    rating: 4.8,
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1887&auto=format&fit=crop',
    bio: 'Local historian specializing in temples and tea culture. I love tailoring calm, scenic walks through hidden alleys and gardens.'
  },
  {
    id: 2,
    name: 'Marco Rossi',
    city: 'Rome',
    languages: ['Italian', 'English', 'Spanish'],
    price: 50,
    rating: 4.9,
    photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop',
    bio: 'Licensed guide passionate about ancient history and food tours. Colosseum expert, gelato enthusiast.'
  },
  {
    id: 3,
    name: 'Layla Haddad',
    city: 'Marrakesh',
    languages: ['Arabic', 'French', 'English'],
    price: 40,
    rating: 4.7,
    photo: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=2080&auto=format&fit=crop',
    bio: 'Craft market insider with a love for Moroccan architecture. Expect colorful routes and authentic stops.'
  }
];

export default function App() {
  const [guides, setGuides] = React.useState(MOCK_GUIDES);
  const [search, setSearch] = React.useState('');

  const handleSearch = (q) => {
    setSearch(q);
    const s = q.trim().toLowerCase();
    if (!s) return setGuides(MOCK_GUIDES);
    setGuides(
      MOCK_GUIDES.filter(
        (g) =>
          g.city.toLowerCase().includes(s) ||
          g.name.toLowerCase().includes(s) ||
          g.languages.some((l) => l.toLowerCase().includes(s))
      )
    );
  };

  const handleBook = (guide) => {
    alert(`Booking request started for ${guide.name}. In a full app, this opens a calendar to pick dates.`);
  };

  const handleChat = (guide) => {
    alert(`Opening chat with ${guide.name}. In a full app, this would open an in-app messenger.`);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <Hero onSearch={handleSearch} />

      <main>
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold">{search ? `Results for "${search}"` : 'Featured guides'}</h2>
            <p className="text-sm text-slate-600">{guides.length} {guides.length === 1 ? 'guide' : 'guides'} found</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((g) => (
              <GuideCard key={g.id} guide={g} onBook={handleBook} onChat={handleChat} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
