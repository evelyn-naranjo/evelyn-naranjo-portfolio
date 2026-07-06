import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes enviar el formulario a un servidor o servicio de email
    console.log('Formulario enviado:', formData);
    alert('Mensaje enviado correctamente');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <main className="min-h-screen bg-amber-50 text-amber-900 py-16 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <button
          onClick={() => navigate('/')}
          className="mb-8 px-4 py-2 rounded-lg bg-amber-700 text-white hover:bg-amber-800 transition font-semibold"
        >
          ← Volver
        </button>

        <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-4">
          Contactarme
        </h1>

        <p className="text-lg text-amber-800 mb-12">
          ¿Tienes un proyecto en mente? Me encantaría escucharte. Completa el formulario y me pondré en contacto pronto.
        </p>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
          
          {/* Nombre */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-amber-900 mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 text-amber-900 bg-amber-50"
              placeholder="Tu nombre"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-amber-900 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 text-amber-900 bg-amber-50"
              placeholder="tu.email@ejemplo.com"
            />
          </div>

          {/* Asunto */}
          <div>
            <label htmlFor="subject" className="block text-sm font-semibold text-amber-900 mb-2">
              Asunto
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 text-amber-900 bg-amber-50"
              placeholder="Asunto del mensaje"
            />
          </div>

          {/* Mensaje */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-amber-900 mb-2">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 text-amber-900 bg-amber-50 resize-none"
              placeholder="Cuéntame sobre tu proyecto..."
            />
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="w-full bg-amber-700 text-white font-semibold py-3 rounded-lg hover:bg-amber-800 transition"
          >
            Enviar mensaje
          </button>
        </form>

        {/* Contacto alternativo */}
        <div className="mt-12 text-center">
          <p className="text-amber-800 mb-4">O contáctame directamente:</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="mailto:tu.email@ejemplo.com" 
              className="text-amber-700 font-semibold hover:text-amber-900 transition"
            >
              📧 tu.email@ejemplo.com
            </a>
            <a 
              href="tel:+1234567890" 
              className="text-amber-700 font-semibold hover:text-amber-900 transition"
            >
              📱 +1 (234) 567-890
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
