import { useEffect, useRef, useState } from 'react';
import { Trophy, Award, FileText, Medal, ExternalLink } from 'lucide-react';

const Achievements = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  const achievements = [
    {
      icon: Medal,
      title: 'Reliance Foundation Scholar',
      description: 'Merit-based National Scholarship Awardee',
      year: '2023 – Present',
      color: '#FFD700',
      link: '#',
    },
    {
      icon: FileText,
      title: 'Research Paper Accepted',
      description: 'TF-IDF Bias Mining – ICCTRDA Conference 2025',
      year: '2025',
      color: '#1485ff',
      link: '#',
    },
    {
      icon: Trophy,
      title: 'Amazon ML Hackathon',
      description: 'Participated with ML-based solution',
      year: '2024',
      color: '#FF9900',
      link: '#',
    },
    {
      icon: Award,
      title: 'Azure AI Fundamentals (AI-900)',
      description: 'Microsoft Certified',
      year: '2024',
      color: '#00BCF2',
      link: '#',
    },
  ];

  const positions = [
    {
      title: 'Core Member',
      organization: 'FPS Club',
      year: '2022',
    },
    {
      title: 'Community Volunteer',
      organization: 'COVID Day Food Drive',
      year: '2020',
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="achievements"
      className="section py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#FFD700]/5 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-[#FFD700]/20 flex items-center justify-center">
              <Trophy className="w-6 h-6 text-[#FFD700]" />
            </div>
            <span className="text-[#FFD700] text-sm font-medium tracking-widest uppercase">Achievements</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Awards & <span className="gradient-text">Recognition</span>
          </h2>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
            >
              <div 
                className="glass rounded-2xl p-6 card-hover relative overflow-hidden"
                style={{
                  borderColor: `${achievement.color}20`,
                }}
              >
                {/* Gold shimmer effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: `linear-gradient(105deg, transparent 30%, ${achievement.color}10 50%, transparent 70%)`,
                    transform: 'translateX(-100%)',
                    animation: 'none',
                  }}
                />

                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:scale-110"
                    style={{ background: `${achievement.color}15` }}
                  >
                    <achievement.icon className="w-7 h-7" style={{ color: achievement.color }} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-[#1485ff] transition-colors">
                          {achievement.title}
                        </h3>
                        <p className="text-[#afafaf] text-sm mt-1">{achievement.description}</p>
                      </div>
                      <a 
                        href={achievement.link}
                        className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors opacity-0 group-hover:opacity-100"
                      >
                        <ExternalLink className="w-4 h-4 text-[#afafaf]" />
                      </a>
                    </div>

                    {/* Year Badge */}
                    <div 
                      className="inline-flex items-center gap-2 mt-4 px-3 py-1 rounded-full text-xs font-medium"
                      style={{ 
                        background: `${achievement.color}15`,
                        color: achievement.color,
                      }}
                    >
                      {achievement.year}
                    </div>
                  </div>
                </div>

                {/* Bottom border glow */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-500 opacity-0 group-hover:opacity-100"
                  style={{ 
                    background: `linear-gradient(90deg, transparent, ${achievement.color}, transparent)`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Positions of Responsibility */}
        <div 
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '0.6s' }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Positions of <span className="gradient-text">Responsibility</span>
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {positions.map((position) => (
              <div
                key={position.title}
                className="glass rounded-xl px-6 py-4 flex items-center gap-4 card-hover"
              >
                <div className="w-10 h-10 rounded-lg bg-[#1b45f4]/20 flex items-center justify-center">
                  <Award className="w-5 h-5 text-[#1b45f4]" />
                </div>
                <div>
                  <p className="text-white font-medium">{position.title}</p>
                  <p className="text-[#afafaf] text-sm">{position.organization} • {position.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
