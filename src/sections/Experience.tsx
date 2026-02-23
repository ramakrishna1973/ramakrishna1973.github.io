import { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      company: 'Infosys Springboard',
      role: 'Deep Learning Intern',
      period: 'March 2024 – June 2024',
      location: 'Remote',
      description: [
        'Developed a sentiment analysis system using Convolutional Neural Networks (CNN) and TensorFlow',
        'Implemented multi-modal emotion extraction from both images and text using NLP techniques',
        'Performed sentiment trend analysis across diverse datasets to improve prediction accuracy',
      ],
      tech: ['TensorFlow', 'CNN', 'NLP', 'Python'],
      color: '#1b45f4',
    },
    {
      company: 'EDU-NET',
      role: 'Machine Learning Intern',
      period: 'June 2024 – July 2024',
      location: 'Remote',
      description: [
        'Developed a cardiovascular risk prediction model using machine learning algorithms',
        'Analyzed patient datasets to identify health-risk patterns and improve early detection accuracy',
        'Implemented data preprocessing and feature engineering pipelines',
      ],
      tech: ['Python', 'Scikit-learn', 'Pandas', 'ML Algorithms'],
      color: '#1485ff',
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="experience"
      className="section py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-1/3 h-1/2 bg-gradient-to-r from-[#1b45f4]/10 to-transparent pointer-events-none transform -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-[#1b45f4]/20 flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-[#1b45f4]" />
            </div>
            <span className="text-[#1b45f4] text-sm font-medium tracking-widest uppercase">Experience</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-2 gap-8" style={{ perspective: '1000px' }}>
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className={`relative group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ 
                transitionDelay: `${0.2 + index * 0.2}s`,
                transform: isVisible ? `rotateZ(${index === 0 ? '-2' : '2'}deg)` : undefined,
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Holographic Card */}
              <div 
                className="relative glass rounded-2xl p-8 overflow-hidden transition-all duration-500"
                style={{
                  transform: hoveredCard === index ? 'translateY(-8px) rotateZ(0deg) scale(1.02)' : undefined,
                  boxShadow: hoveredCard === index ? `0 20px 60px ${exp.color}30` : undefined,
                }}
              >
                {/* Shine effect on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `linear-gradient(105deg, transparent 40%, ${exp.color}20 50%, transparent 60%)`,
                    transform: 'translateX(-100%)',
                    animation: hoveredCard === index ? 'shine 0.8s ease forwards' : 'none',
                  }}
                />

                {/* Company Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.company}</h3>
                    <p className="text-[#1485ff] font-medium">{exp.role}</p>
                  </div>
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `${exp.color}20` }}
                  >
                    <ExternalLink className="w-5 h-5" style={{ color: exp.color }} />
                  </div>
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 mb-6 text-sm text-[#afafaf]">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#afafaf]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1b45f4] mt-2 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{ 
                        background: `${exp.color}15`,
                        color: exp.color,
                        border: `1px solid ${exp.color}30`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes shine {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default Experience;
