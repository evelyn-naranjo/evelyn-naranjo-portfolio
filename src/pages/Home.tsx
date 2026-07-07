import Header from '../components/Header';

export default function Home() {
  const skills = [
    { name: 'Flutter', icon: '📱', color: 'from-blue-500 to-cyan-500' },
    { name: 'React', icon: '⚛️', color: 'from-cyan-500 to-blue-500' },
    { name: 'Node.js', icon: '🟩', color: 'from-green-500 to-emerald-500' },
    { name: 'Firebase', icon: '🔥', color: 'from-orange-500 to-red-500' },
    { name: 'PostgreSQL', icon: '🗄️', color: 'from-blue-600 to-indigo-600' },
    { name: 'TypeScript', icon: '📘', color: 'from-indigo-500 to-purple-500' }
  ];

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-pink-600/15 rounded-full blur-3xl pointer-events-none"></div>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="flex items-center justify-center px-10">
            {/* Left Content */}
            <div>
          

              {/* Main Heading */}
              <h1 className="font-shadows  text-4xl md:text-7xl font-medium mb-5 leading-tight tracking-[0.3rem]">
                <span className="block text-white">Mobile Developer | Full Stack Developer</span>
            
              </h1>

              {/* Subheading */}
              <p className="text-sm md:text-base text-slate-300 mb-2 leading-relaxed font-source-code-pro flex flex-wrap items-center justify-center gap-x-3 gap-y-2" >
              {'{ Flutter - Vue.js - React - Laravel - Express.js - FastAPI - Firebase - PostgreSQL }'}
              </p>

             {/* Subheading */}
              {/* <p className="text-base md:text-base text-slate-300 mb-8 leading-relaxed font-source-code-pro flex flex-wrap items-center justify-center gap-x-3 gap-y-2" >
              Evelyn Naranjo Correa
              </p> */}

              {/* Quick Stats */}
              {/* <div className="flex items-center justify-center gap-8">
                <div>
                  <div className="text-2xl  text-indigo-400">7+</div>
                  <p className="text-sm text-slate-400 uppercase tracking-widest font-bold mt-1">Proyectos</p>
                </div>
                <div>
                  <div className="text-2xl  text-violet-400">50K+</div>
                  <p className="text-sm text-slate-400 uppercase tracking-widest font-bold mt-1">Usuarios</p>
                </div>
                <div>
                  <div className="text-2xl  text-pink-400">4+</div>
                  <p className="text-sm text-slate-400 uppercase tracking-widest font-bold mt-1">Años</p>
                </div>
              </div> */}
            </div>

         
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-24 px-6 relative z-10 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">
                  Tech Stack
                </span>
              </h2>
              <p className="text-slate-400 text-lg">Tecnologías y herramientas que domino</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {skills.map((skill, idx) => (
                <div
                  key={skill.name}
                  className="group relative"
                  style={{
                    animation: `fadeInUp 0.5s ease-out ${idx * 0.1}s forwards`,
                    opacity: 0
                  }}
                >
                  <div className={`bg-gradient-to-br ${skill.color} p-0.5 rounded-2xl transform hover:scale-110 transition-all duration-300`}>
                    <div className="bg-slate-900 rounded-2xl p-6 flex flex-col items-center justify-center h-32 relative overflow-hidden group-hover:bg-slate-800/50 transition-colors">
                      {/* Animated background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                      
                      <span className="text-4xl mb-2 relative z-10">{skill.icon}</span>
                      <p className="font-bold text-center text-sm relative z-10">{skill.name}</p>
                      
                      {/* Glow effect */}
                      <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 group-hover:translate-x-full" style={{ animation: 'shimmer 3s infinite' }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-slate-400 text-xs uppercase tracking-widest font-bold">Scroll</div>
          <div className="text-slate-500 text-2xl">↓</div>
        </div>
      </main>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </>
  );
}
