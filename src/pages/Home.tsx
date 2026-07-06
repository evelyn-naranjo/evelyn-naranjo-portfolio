import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-amber-50 text-amber-900 flex items-center justify-center px-6">
      <section className="max-w-4xl text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-amber-700 md:text-base">
          Portafolio profesional
        </p>

        <h1 className="text-5xl text-amber-900 md:text-7xl font-bold tracking-[0.02em]">
          Evelyn Naranjo Correa
        </h1>

        <p className="font-semibold mt-6 text-lg md:text-xl text-amber-800">
          Mobile Developer | Full Stack Developer
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => navigate('/proyectos')}
            className="rounded-full bg-amber-700 px-6 py-3 font-semibold !text-white hover:bg-amber-800 transition cursor-pointer"
          >
            Ver proyectos
          </button>

          <button
            onClick={() => navigate('/contacto')}
            className="rounded-full border-2 border-amber-700 px-6 py-3 font-semibold text-amber-900 hover:bg-amber-100 hover:border-amber-800 transition cursor-pointer"
          >
            Contactarme
          </button>
        </div>
      </section>
    </main>
  );
}
