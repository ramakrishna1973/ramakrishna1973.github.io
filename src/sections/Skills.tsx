import { useEffect, useRef, useState } from 'react';
import { Code2, Wrench, Library, BarChart3, BookOpen, Sparkles } from 'lucide-react';

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

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

  const skillCategories = [
    {
      title: 'Languages',
      icon: Code2,
      skills: ['C++', 'Python', 'SQL'],
      color: '#1b45f4',
    },
    {
      title: 'Frameworks & Libraries',
      icon: Library,
      skills: ['TensorFlow', 'NumPy', 'Pandas', 'OpenCV'],
      color: '#1485ff',
    },
    {
      title: 'Developer Tools',
      icon: Wrench,
      skills: ['Git', 'VS Code', 'Jupyter Notebook', 'Google Colab'],
      color: '#00d4ff',
    },
    {
      title: 'Data Analytics & BI',
      icon: BarChart3,
      skills: ['Excel', 'Power BI'],
      color: '#1b45f4',
    },
    {
      title: 'Coursework',
      icon: BookOpen,
      skills: ['Data Structures & Algorithms', 'DBMS', 'OOP', 'Machine Learning', 'Deep Learning'],
      color: '#1485ff',
    },
    {
      title: 'Areas of Interest',
      icon: Sparkles,
      skills: ['Data Analytics', 'Machine Learning', 'Deep Learning', 'NLP'],
      color: '#00d4ff',
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="skills"
      className="section py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#1b45f4]/10 via-transparent to-transparent rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-[#1b45f4]/20 flex items-center justify-center">
              <Code2 className="w-6 h-6 text-[#1b45f4]" />
            </div>
            <span className="text-[#1b45f4] text-sm font-medium tracking-widest uppercase">Skills</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="mt-4 text-[#afafaf] max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent systems and deriving insights from data
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${0.1 + catIndex * 0.1}s` }}
            >
              <div className="glass rounded-2xl p-6 h-full card-hover">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
                    style={{ background: `${category.color}20` }}
                  >
                    <category.icon className="w-6 h-6" style={{ color: category.color }} />
                  </div>
                  <h3 className="text-lg font-bold text-white">{category.title}</h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-default"
                      style={{
                        background: hoveredSkill === skill ? `${category.color}30` : `${category.color}15`,
                        border: `1px solid ${hoveredSkill === skill ? category.color : `${category.color}30`}`,
                        color: hoveredSkill === skill ? '#fff' : '#afafaf',
                        transform: hoveredSkill === skill ? 'scale(1.05) translateZ(20px)' : 'scale(1)',
                      }}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div 
          className={`mt-12 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '0.8s' }}
        >
          <h3 className="text-xl font-semibold text-white mb-6">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Time Management', 'Problem Solving', 'Team Collaboration', 'Communication', 'Adaptability'].map((skill, index) => (
              <span
                key={skill}
                className="px-6 py-3 rounded-full glass text-white font-medium transition-all duration-300 hover:bg-[#1b45f4]/20 hover:border-[#1b45f4]/50 border border-transparent"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
