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
  featured: boolean;
  color: string;
  type?: 'web' | 'mobile';
}

export default function Projects() {
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
      featured: true,
      color: 'from-indigo-600 to-indigo-700',
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
      featured: true,
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
      featured: true,
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
      featured: false,
      color: 'from-rose-600 to-rose-700',
      type: 'mobile'
    },
    {
      id: 5,
      title: 'App Mikuy - Fundación REDNI',
      description: 'Aplicación móvil educativa para contextos rurales con conectividad limitada. Contenidos educativos y arquitectura offline-first para acceso sin conexión permanente.',
      technologies: ['Flutter', 'Offline-First', 'SQLite', 'APIs REST'],
      links: [],
      featured: false,
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
      featured: false,
      color: 'from-blue-600 to-blue-700',
      type: 'mobile'
    },
    {
      id: 7,
      title: 'Easy Quiz',
      description: 'Aplicación móvil para profesores que permite crear y gestionar cuestionarios en tiempo real. Almacenamiento local, sincronización en la nube y diseño centrado en usabilidad.',
      technologies: ['Android Nativo', 'SQLite', 'Firebase'],
      links: [],
      featured: false,
      color: 'from-amber-600 to-amber-700',
      type: 'mobile'
    }
  ];
  

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl pointer-events-none"></div>

      <Header />

      <div className="max-w-7xl mx-auto py-24 px-6 relative z-10">
        {/* Hero Section */}
        <div className="mb-20">
          <h1 className="text-6xl md:text-7xl font-black text-white mb-6 leading-tight">
            Mis <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400">Proyectos</span>
          </h1>

          <p className="text-xl text-slate-300 mb-12 max-w-3xl leading-relaxed font-semibold">
            Una colección de trabajos que representan mi dedicación a la <span className="text-white">innovación</span>, la <span className="text-white">calidad</span> y el <span className="text-white">impacto</span>.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mb-16">
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
          </div>
        </div>

        {/* Grid de Proyectos */}
        <div className="flex flex-col gap-8">
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              links={project.links}
              featured={project.featured}
              color={project.color}
              type={project.type}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
