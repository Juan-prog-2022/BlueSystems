import { Users, Award, Clock, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: '50+', label: 'Proyectos Completados' },
    { icon: Award, number: '5+', label: 'Años de Experiencia' },
    { icon: Clock, number: '24/7', label: 'Soporte Técnico' },
    { icon: Target, number: '100%', label: 'Satisfacción Cliente' }
  ];

  const team = [
    {
      name: 'Carlos Rodríguez',
      role: 'CEO & Full Stack Developer',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Especialista en arquitectura de software y desarrollo full-stack con más de 8 años de experiencia.'
    },
    {
      name: 'Ana García',
      role: 'UI/UX Designer',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Diseñadora creativa enfocada en crear experiencias de usuario excepcionales y interfaces intuitivas.'
    },
    {
      name: 'Miguel Torres',
      role: 'Mobile Developer',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Experto en desarrollo móvil nativo e híbrido para iOS y Android con enfoque en performance.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sobre <span className="text-blue-600">BlueSystems</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos un equipo apasionado de desarrolladores y diseñadores comprometidos con crear 
            soluciones tecnológicas que transforman negocios y mejoran vidas.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Nuestra Misión</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Democratizar el acceso a la tecnología de vanguardia, ayudando a empresas de todos los tamaños 
              a digitalizar sus procesos y alcanzar su máximo potencial a través de soluciones de software 
              personalizadas, eficientes y escalables.
            </p>
            <div className="flex items-center text-blue-600 font-semibold">
              <Target className="w-5 h-5 mr-2" />
              Transformación digital accesible
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Nuestra Visión</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Ser la empresa líder en desarrollo de software personalizado, 
              siendo el socio tecnológico de confianza que impulsa la innovación y el crecimiento sostenible 
              de nuestros clientes.
            </p>
            <div className="flex items-center text-blue-600 font-semibold">
              <Award className="w-5 h-5 mr-2" />
              Liderazgo en innovación
            </div>
          </div>
        </div>

        {/* Team */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Nuestro <span className="text-blue-600">Equipo</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center group hover:shadow-2xl transition-all duration-300">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 w-24 h-24 rounded-full mx-auto bg-gradient-to-br from-blue-600/20 to-transparent"></div>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;