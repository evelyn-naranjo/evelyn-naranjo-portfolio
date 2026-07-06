import { useState } from 'react';
import Header from '../components/Header';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactMethods = [
    {
      icon: '✉️',
      title: 'Email',
      value: 'evelyn.patricia.naranjo.correa@gmail.com',
      link: 'mailto:evelyn.patricia.naranjo.correa@gmail.com',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/evelynnaranjo',
      link: 'https://linkedin.com/in/evelynnaranjo',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      value: '+593 9 XXXXXXXX',
      link: 'https://wa.me/593',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden pt-8">
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="max-w-6xl mx-auto py-24 px-6 relative z-10">
          {/* Header */}
          <div className="mb-20 text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400">
                Hablemos
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y ayudarte a hacerlas realidad.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {contactMethods.map((method, idx) => (
              <a
                key={method.title}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                style={{
                  animation: `fadeInUp 0.5s ease-out ${idx * 0.1}s forwards`,
                  opacity: 0
                }}
              >
                <div className={`bg-gradient-to-br ${method.color} p-0.5 rounded-2xl transform hover:scale-105 transition-all duration-300`}>
                  <div className="bg-slate-900 rounded-2xl p-8 flex flex-col items-center text-center h-full group-hover:bg-slate-800/50 transition-colors relative overflow-hidden">
                    {/* Glow background */}
                    <div className={`absolute -inset-full bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-2xl`}></div>
                    
                    <div className="text-5xl mb-4 relative z-10">{method.icon}</div>
                    <h3 className="text-xl font-bold mb-2 relative z-10">{method.title}</h3>
                    <p className="text-slate-300 text-sm relative z-10 break-all">{method.value}</p>
                    <div className="mt-4 text-indigo-400 font-bold text-sm relative z-10 group-hover:translate-x-2 transition-transform">
                      Contactar →
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Form Section */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-indigo-500/10 via-violet-500/10 to-pink-500/10 border border-slate-700/50 rounded-3xl backdrop-blur-xl p-8 md:p-12 shadow-2xl">
              <h2 className="text-3xl font-black mb-8 text-center">
                Envía tu mensaje
              </h2>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="text-6xl mb-4 animate-bounce">✨</div>
                  <h3 className="text-2xl font-bold mb-2">¡Mensaje enviado!</h3>
                  <p className="text-slate-300 text-center">Gracias por tu mensaje. Me pondré en contacto pronto.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nombre */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold uppercase tracking-wider text-slate-300 mb-3">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Tu nombre completo"
                      className="w-full px-6 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all backdrop-blur-sm"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold uppercase tracking-wider text-slate-300 mb-3">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="tu.email@ejemplo.com"
                      className="w-full px-6 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all backdrop-blur-sm"
                    />
                  </div>

                  {/* Asunto */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-bold uppercase tracking-wider text-slate-300 mb-3">
                      Asunto
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="¿Sobre qué es tu mensaje?"
                      className="w-full px-6 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all backdrop-blur-sm"
                    />
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold uppercase tracking-wider text-slate-300 mb-3">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Cuéntame sobre tu proyecto, idea o lo que tengas en mente..."
                      className="w-full px-6 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all backdrop-blur-sm resize-none"
                    />
                  </div>

                  {/* Botón */}
                  <button
                    type="submit"
                    className="w-full group relative bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500 text-white font-black py-4 rounded-xl hover:shadow-2xl hover:shadow-violet-500/50 transition-all transform hover:scale-105 uppercase tracking-wider text-sm overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Enviar mensaje
                      <span className="group-hover:translate-x-2 transition-transform">↗</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-violet-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm group-hover:blur-md"></div>
                  </button>
                </form>
              )}
            </div>

            {/* Footer Note */}
            <p className="text-center text-slate-400 text-sm mt-8">
              También puedes contactarme a través de LinkedIn o WhatsApp para una conversación más rápida.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
