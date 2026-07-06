import { useNavigate, useLocation } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800/50 backdrop-blur-xl px-6 py-4 shadow-2xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo - Creativo */}
        <button
          onClick={() => navigate('/')}
          className="group flex flex-col"
        >
          <div className="text-2xl font-black bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400 text-transparent bg-clip-text hover:scale-110 transition-transform duration-300">
            ◇ EN
          </div>
          <div className="text-xs text-slate-400 uppercase tracking-widest font-bold group-hover:text-slate-300 transition">
            Developer
          </div>
        </button>

        {/* Navigation Links */}
        <div className="flex gap-2 md:gap-8">
          {[
            { path: '/', label: 'Inicio' },
            { path: '/proyectos', label: 'Proyectos' },
            { path: '/contacto', label: 'Contacto' }
          ].map(({ path, label }) => (
            <button
              key={path}
              onClick={() => navigate(path)}
              className={`relative px-4 py-2 font-bold uppercase tracking-wider text-sm transition-all duration-300 group ${
                isActive(path)
                  ? 'text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span className="relative z-10">{label}</span>
              {isActive(path) && (
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-violet-500/20 to-pink-500/20 rounded-lg blur-sm"></div>
              )}
              <div className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                isActive(path)
                  ? 'w-full bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400'
                  : 'w-0 group-hover:w-full bg-gradient-to-r from-slate-400 to-slate-300'
              }`}></div>
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={() => navigate('/contacto')}
          className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-violet-500/50 transition-all duration-300 transform hover:scale-105 text-sm uppercase tracking-wider"
        >
          Contactar ↗
        </button>
      </div>
    </nav>
  );
}
