import { useEffect, useRef, useState } from 'react';
import { GraduationCap, School, BookOpen } from 'lucide-react';

const Education = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setLineHeight(100), 300);
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

  const educationData = [
    {
      icon: GraduationCap,
      institution: 'Chandigarh University',
      location: 'Gharuan, Punjab',
      degree: 'B.E. Computer Science and Engineering',
      specialization: 'AI & ML Specialization',
      grade: 'CGPA: 7.48',
      period: '2022 – 2026',
      side: 'left',
    },
    {
      icon: School,
      institution: 'Oxford Junior College',
      location: 'Andhra Pradesh',
      degree: 'Intermediate (State Board)',
      specialization: 'MPC Stream',
      grade: 'Percentage: 91%',
      period: '2020 – 2022',
      side: 'right',
    },
    {
      icon: BookOpen,
      institution: 'Sri Chaitanya School',
      location: 'Andhra Pradesh',
      degree: 'Matriculation (State Board)',
      specialization: 'Secondary Education',
      grade: 'Percentage: 100%',
      period: '2019 – 2020',
      side: 'left',
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="education"
      className="section py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1b45f4]/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div 
          className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-[#1b45f4]/20 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-[#1b45f4]" />
            </div>
            <span className="text-[#1b45f4] text-sm font-medium tracking-widest uppercase">Education</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Academic <span className="gradient-text">Journey</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full hidden lg:block">
            <div 
              className="w-full bg-gradient-to-b from-[#1b45f4] via-[#1485ff] to-[#1b45f4] transition-all duration-2000 ease-out"
              style={{ height: `${lineHeight}%` }}
            />
          </div>

          {/* Education Cards */}
          <div className="space-y-12 lg:space-y-0">
            {educationData.map((edu, index) => (
              <div 
                key={edu.institution}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-16 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{ 
                  transitionDelay: `${0.3 + index * 0.2}s`,
                }}
              >
                {/* Timeline Node */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div 
                    className={`w-4 h-4 rounded-full bg-[#1b45f4] border-4 border-[#0a0a0a] transition-all duration-500 ${isVisible ? 'scale-100' : 'scale-0'}`}
                    style={{ transitionDelay: `${0.5 + index * 0.2}s` }}
                  />
                </div>

                {/* Card */}
                <div 
                  className={`${edu.side === 'right' ? 'lg:col-start-2' : ''}`}
                >
                  <div 
                    className={`glass rounded-2xl p-6 lg:p-8 card-hover transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : edu.side === 'left' ? 'opacity-0 -translate-x-12' : 'opacity-0 translate-x-12'}`}
                    style={{ 
                      transitionDelay: `${0.4 + index * 0.2}s`,
                      transform: isVisible ? undefined : edu.side === 'left' ? 'translateX(-50px) rotateY(90deg)' : 'translateX(50px) rotateY(-90deg)',
                    }}
                  >
                    {/* Period Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b45f4]/20 text-[#1485ff] text-sm font-medium mb-4">
                      {edu.period}
                    </div>

                    {/* Institution */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#1b45f4]/10 flex items-center justify-center flex-shrink-0">
                        <edu.icon className="w-6 h-6 text-[#1b45f4]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                        <p className="text-[#afafaf] text-sm">{edu.location}</p>
                      </div>
                    </div>

                    {/* Degree */}
                    <div className="ml-16">
                      <p className="text-white font-medium">{edu.degree}</p>
                      <p className="text-[#afafaf] text-sm">{edu.specialization}</p>
                      
                      {/* Grade */}
                      <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5">
                        <span className="text-[#1485ff] font-semibold">{edu.grade}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                {edu.side === 'left' && <div className="hidden lg:block" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
