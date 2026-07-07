import WebMockup from './WebMockup';
import MobileMockup from './MobileMockup';

interface ProjectLink {
    label: string;
    url: string;
}

interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    links: ProjectLink[];
    color?: string;
    type?: 'web' | 'mobile';
}

export default function ProjectCard({
    title,
    description,
    technologies,
    links,
    color = 'from-slate-700 to-slate-800',
    type
}: ProjectCardProps) {
    // Si es mobile o web, mostrar layout horizontal con mockup
    if (type === 'mobile' || type === 'web') {
        return (
            <div className="group relative w-full h-[500px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">        {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-95 group-hover:opacity-100 transition-opacity`}></div>

                <div className=" relative px-8 mt-8 items-center z-10">
                    {/* Title */}
                    <h2 className="text-2xl lg:text-2xl font-source-code-pro tracking-tight group-hover:translate-y-[-4px] transition-transform text-white">
                        {title}
                    </h2>
                </div>
                {/* Content */}
                <div className="relative px-8 py-3 h-full flex flex-col lg:flex-row gap-8 items-center z-10">
                    {/* Left Side - Description */}
                    <div className="flex-1 text-white">




                        {/* Description */}
                        <p className="text-white/95 mb-6 text-base leading-relaxed font-medium">
                            {description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {technologies.map(tech => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 bg-white/25 text-white rounded-full text-xs font-semibold backdrop-blur-sm border border-white/30 hover:bg-white/35 transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Links */}
                        {links.length > 0 && (
                            <div className="flex flex-wrap gap-3 pt-6 border-t border-white/25">
                                {links.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-5 py-2.5 bg-white text-slate-950 font-bold rounded-lg hover:bg-amber-50 hover:shadow-lg hover:shadow-white/50 transition-all transform hover:scale-105 hover:translate-y-[-2px] text-sm"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Right Side - Mockup */}
                    <div className="flex-1 flex justify-center">
                        {type === 'web' && <WebMockup color={color} />}
                        {type === 'mobile' && <MobileMockup color={color} />}
                    </div>
                </div>

                {/* Decorative corner elements */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:blur-2xl transition-all"></div>
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:blur-2xl transition-all"></div>
            </div>
        );
    }

    // Layout default para proyectos sin tipo especificado
    return (
        <div className={`group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300`}>
            {/* Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-95 group-hover:opacity-100 transition-opacity`}></div>

            {/* Content */}
            <div className="relative p-8 h-full flex flex-col text-white z-10">


                {/* Title */}
                <h2 className="text-3xl font-bold mb-4 group-hover:translate-y-[-4px] transition-transform text-white">
                    {title}
                </h2>

                {/* Description */}
                <p className="text-white/95 mb-6 text-base leading-relaxed flex-grow font-medium">
                    {description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {technologies.map(tech => (
                        <span
                            key={tech}
                            className="px-3 py-1 bg-white/25 text-white rounded-full text-xs font-semibold backdrop-blur-sm border border-white/30 hover:bg-white/35 transition-all"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Links */}
                {links.length > 0 && (
                    <div className="flex flex-wrap gap-3 pt-6 border-t border-white/25">
                        {links.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-5 py-2.5 bg-white text-slate-950 font-bold rounded-lg hover:bg-amber-50 transition-all hover:translate-y-[-2px] text-sm"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                )}
            </div>

            {/* Decorative corner elements */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:blur-2xl transition-all"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:blur-2xl transition-all"></div>
        </div>
    );
}
