import { Monitor, Globe, Database } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Aplicaciones de Escritorio',
      description: 'Desarrollamos software robusto y eficiente para Windows, macOS y Linux con interfaces intuitivas y alto rendimiento.',
      features: ['Multiplataforma', 'Alto rendimiento', 'Interfaz nativa', 'Integración sistema']
    },
    {
      icon: Globe,
      title: 'Desarrollo Web',
      description: 'Creamos sitios web modernos, responsivos y optimizados que destacan tu marca y convierten visitantes en clientes.',
      features: ['Diseño responsivo', 'SEO optimizado', 'Carga rápida', 'CMS personalizado']
    },
    {
      icon: Database,
      title: 'Sistemas de Gestión',
      description: 'Soluciones empresariales personalizadas para automatizar procesos y optimizar la gestión de tu negocio.',
      features: ['ERP/CRM custom', 'Automatización', 'Reportes avanzados', 'Integración APIs']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestros <span className="text-blue-600">Servicios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones tecnológicas integrales para impulsar tu negocio hacia el futuro digital
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Effect */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href="#contact"
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
                >
                  Más información
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;