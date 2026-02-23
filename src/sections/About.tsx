import { useEffect, useRef, useState } from 'react';
import { User, Code2, Brain, Database } from 'lucide-react';

const About = () => {
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

  const stats = [
    { icon: Code2, label: 'Years Experience', value: '1' },
    { icon: Brain, label: 'ML Projects', value: '10+' },
    { icon: Database, label: 'Certifications', value: '5+' },
  ];

  return (
    <section 
      ref={sectionRef}
      id="about"
      className="section py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1b45f4]/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div 
          className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-[#1b45f4]/20 flex items-center justify-center">
              <User className="w-6 h-6 text-[#1b45f4]" />
            </div>
            <span className="text-[#1b45f4] text-sm font-medium tracking-widest uppercase">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Who <span className="gradient-text">I Am</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Profile Image */}
          <div 
            className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
            style={{ transitionDelay: '0.2s' }}
          >
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1b45f4] to-[#1485ff] rounded-full blur-3xl opacity-20 scale-75" />
              
              {/* Image */}
              <div className="relative aspect-square rounded-full overflow-hidden border-2 border-white/10 group">
                <img 
                  src="/profile.jpg" 
                  alt="Maram Reddy Profile"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b45f4]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Decorative ring */}
              <div className="absolute -inset-4 border border-[#1b45f4]/30 rounded-full animate-pulse-glow" />
              <div className="absolute -inset-8 border border-[#1b45f4]/10 rounded-full" />

              {/* Floating elements */}
              <div 
                className="absolute -top-4 -right-4 glass rounded-lg px-4 py-2 animate-float"
                style={{ animationDelay: '0.5s' }}
              >
                <span className="text-[#1485ff] font-semibold">AI/ML</span>
              </div>
              <div 
                className="absolute -bottom-4 -left-4 glass rounded-lg px-4 py-2 animate-float"
                style={{ animationDelay: '1s' }}
              >
                <span className="text-[#1485ff] font-semibold">Data Science</span>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div 
            className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
            style={{ transitionDelay: '0.4s' }}
          >
            <p className="text-lg text-[#afafaf] leading-relaxed">
              I am a passionate <span className="text-white font-medium">AI/ML Engineer</span> and 
              <span className="text-white font-medium"> Data Scientist</span> currently pursuing my 
              B.E. in Computer Science with AI & ML specialization at Chandigarh University.
            </p>
            
            <p className="text-lg text-[#afafaf] leading-relaxed">
              My journey in the world of artificial intelligence began with a curiosity about how 
              machines can learn and make decisions. Today, I specialize in building intelligent 
              systems that solve real-world problems using cutting-edge machine learning techniques.
            </p>

            <p className="text-lg text-[#afafaf] leading-relaxed">
              With hands-on experience from internships at <span className="text-white font-medium">Infosys Springboard</span> and 
              <span className="text-white font-medium"> EDU-NET</span>, I've developed expertise in deep learning, 
              natural language processing, and computer vision. I'm particularly interested in 
              sentiment analysis, predictive modeling, and building AI-powered applications.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${0.6 + index * 0.1}s` }}
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[#1b45f4]/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-[#1b45f4]" />
                  </div>
                  <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-sm text-[#afafaf]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
