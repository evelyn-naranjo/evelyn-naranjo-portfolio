import { useState } from 'react';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';

interface ProjectLink {
  label: string;
  url: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  links: ProjectLink[];
  color: string;
  type?: 'web' | 'mobile';
}

export default function Projects() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Ecosistema Bees Delivery',
      description: '+50 mil usuarios. Sistema integral de delivery con aplicaciones para cliente, vendedor, repartidor y administrador. Desarrollo y mantenimiento de dashboards interactivos, pagos en línea, geolocalización, notificaciones push y tracking en tiempo real.',
      technologies: ['Flutter', 'React.js', 'Laravel', 'Node.js', 'Firebase'],
      links: [
        { label: 'Web Admin', url: 'https://adm.beez-delivery.com' },
        { label: 'Play Store - Cliente', url: '#' }
      ],
      color: 'from-cyan-800 to-cyan-700',
      type: 'mobile'
    },
    {
      id: 2,
      title: 'Sistema SUUSEN - Desnutrición Infantil',
      description: '+15 mil usuarios. Plataforma web de seguimiento de desnutrición crónica infantil en Ecuador. Integración de información multifuente con dashboards interactivos y reportes desagregados por provincia, cantón y parroquia.',
      technologies: ['Vue.js', 'Laravel', 'Highcharts', 'PostgreSQL'],
      links: [
        { label: 'Ver Plataforma', url: 'https://suusen.desarrollohumano.gob.ec/' }
      ],
      color: 'from-teal-600 to-teal-700',
      type: 'web'
    },
    {
      id: 3,
      title: 'Sistema de Transparencia Fiscal (AME)',
      description: 'Plataforma interactiva de visualización de indicadores fiscales para Gobiernos Autónomos Descentralizados Municipales. Dashboards interactivos, filtros territoriales y exploración de indicadores por GAD y periodo.',
      technologies: ['Vue.js', 'Python', 'Highcharts', 'Chart.js', 'APIs Analíticas'],
      links: [
        { label: 'Ver Plataforma', url: 'https://transparenciafiscal.ame.gob.ec/' }
      ],
      color: 'from-violet-600 to-violet-700',
      type: 'web'
    },
    {
      id: 4,
      title: 'App Infancia EC',
      description: '+5 mil usuarios. Aplicación móvil para registrar y monitorear el crecimiento de niños menores de 2 años y gestantes. Rediseño de interfaz, mejoras en UX y generación automatizada de indicadores.',
      technologies: ['Flutter', 'Firebase', 'Android', 'iOS'],
      links: [
        { label: 'Google Play', url: '#' },
        { label: 'App Store', url: '#' }
      ],
      color: 'from-rose-600 to-rose-700',
      type: 'mobile'
    },
    {
      id: 5,
      title: 'App Mikuy - Fundación REDNI',
      description: 'Aplicación móvil educativa para contextos rurales con conectividad limitada. Contenidos educativos y arquitectura offline-first para acceso sin conexión permanente.',
      technologies: ['Flutter', 'Offline-First', 'SQLite', 'APIs REST'],
      links: [],
      color: 'from-cyan-600 to-cyan-700',
      type: 'mobile'
    },
    {
      id: 6,
      title: 'App Monitora MDH',
      description: '+500 usuarios. Herramienta para captación de mujeres gestantes y niños menores de dos años con módulos especializados para recolección de datos en territorio.',
      technologies: ['Flutter', 'Firebase', 'Android', 'JWT'],
      links: [
        { label: 'Google Play', url: '#' }
      ],
      color: 'from-blue-600 to-blue-700',
      type: 'mobile'
    },
    {
      id: 7,
      title: 'Easy Quiz',
      description: 'Aplicación móvil para profesores que permite crear y gestionar cuestionarios en tiempo real. Almacenamiento local, sincronización en la nube y diseño centrado en usabilidad.',
      technologies: ['Android Nativo', 'SQLite', 'Firebase'],
      links: [],
      color: 'from-amber-600 to-amber-700',
      type: 'mobile'
    }
  ];

  const activeProject = projects[activeProjectIndex];
  const goToPreviousProject = () => {
    setActiveProjectIndex((currentIndex) =>
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1
    );
  };

  const goToNextProject = () => {
    setActiveProjectIndex((currentIndex) =>
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1
    );
  };
  

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl pointer-events-none"></div>

      <Header />

      <div className="max-w-7xl mx-auto py-8 px-6 relative z-10">
        {/* Hero Section */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-7xl font-shadows text-white mb-2 leading-tight">
            Mis Proyectos
          </h1>

          <p className=" text-sm md:text-base text-slate-300 mb-5 leading-relaxed font-source-code-pro">
            Una colección de trabajos que representan mi dedicación a la <span className="text-white">innovación</span>, la <span className="text-white">calidad</span> y el <span className="text-white">impacto</span>.
          </p>

          {/* Stats */}
          {/* <div className="flex flex-wrap gap-8 mb-16">
            <div>
              <div className="text-4xl font-black text-indigo-400">7+</div>
              <div className="text-sm text-slate-400 uppercase tracking-widest font-bold">Proyectos Completados</div>
            </div>
            <div>
              <div className="text-4xl font-black text-violet-400">50K+</div>
              <div className="text-sm text-slate-400 uppercase tracking-widest font-bold">Usuarios Impactados</div>
            </div>
            <div>
              <div className="text-4xl font-black text-pink-400">100%</div>
              <div className="text-sm text-slate-400 uppercase tracking-widest font-bold">Dedicación</div>
            </div>
          </div> */}
        </div>

        {/* Carrusel de Proyectos */}
        <div className="relative">
          <div className="mb-4 flex items-center justify-between gap-4">
            <p className="font-source-code-pro text-sm text-slate-400">
              Proyecto {activeProjectIndex + 1} / {projects.length}
            </p>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={goToPreviousProject}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl font-bold text-white transition hover:bg-white hover:text-slate-950"
                aria-label="Proyecto anterior"
              >
                &lt;
              </button>

              <button
                type="button"
                onClick={goToNextProject}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl font-bold text-white transition hover:bg-white hover:text-slate-950"
                aria-label="Proyecto siguiente"
              >
                &gt;
              </button>
            </div>
          </div>

          <div className="min-h-[560px] md:min-h-[430px]">
            <ProjectCard
              key={activeProject.id}
              title={activeProject.title}
              description={activeProject.description}
              technologies={activeProject.technologies}
              links={activeProject.links}
              color={activeProject.color}
              type={activeProject.type}
            />
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {projects.map((project, index) => (
              <button
                key={project.id}
                type="button"
                onClick={() => setActiveProjectIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeProjectIndex
                    ? 'w-10 bg-white'
                    : 'w-2.5 bg-white/35 hover:bg-white/70'
                }`}
                aria-label={`Ir al proyecto ${index + 1}`}
                aria-current={index === activeProjectIndex ? 'true' : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
