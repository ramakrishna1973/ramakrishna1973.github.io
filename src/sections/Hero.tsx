import { useEffect, useRef, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      setMousePos({ x: x * 2, y: y * 2 });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!titleRef.current || !imageRef.current) return;
      const scrollY = window.scrollY;
      const parallaxTitle = scrollY * 0.3;
      const parallaxImage = scrollY * 0.15;
      
      titleRef.current.style.transform = `translateY(${-parallaxTitle}px)`;
      imageRef.current.style.transform = `translateY(${parallaxImage}px) scale(${1 + scrollY * 0.0002})`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-24 lg:pt-32"
      style={{ perspective: '1000px' }}
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 animate-gradient"
          style={{
            background: 'linear-gradient(135deg, #0a0a0a 0%, #0523a4 30%, #1b45f4 50%, #0a0a0a 100%)',
            backgroundSize: '400% 400%',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#1485ff] rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
              opacity: 0.3 + Math.random() * 0.5,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div 
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12"
        style={{
          transform: `rotateX(${mousePos.y * 0.5}deg) rotateY(${mousePos.x * 0.5}deg)`,
          transition: 'transform 0.3s ease-out',
        }}
      >
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
          {/* First Name */}
          <div 
            ref={titleRef}
            className={`overflow-hidden transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '0.2s' }}
          >
            <h1 
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter"
              style={{
                transform: isLoaded ? 'translateY(0) rotateX(0)' : 'translateY(100%) rotateX(90deg)',
                transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
                transitionDelay: '0.2s',
              }}
            >
              <span className="text-white">MARAM</span>
            </h1>
          </div>

          {/* Last Name */}
          <div 
            className={`overflow-hidden transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '0.6s' }}
          >
            <h1 
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter gradient-text"
              style={{
                transform: isLoaded ? 'translateY(0) rotateX(0)' : 'translateY(100%) rotateX(90deg)',
                transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
                transitionDelay: '0.6s',
              }}
            >
              REDDY
            </h1>
          </div>

          {/* Subtitle */}
          <div 
            className={`mt-6 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '1s' }}
          >
            <p className="text-lg sm:text-xl md:text-2xl text-[#afafaf] font-light tracking-widest uppercase">
              AI/ML Engineer & Data Scientist
            </p>
          </div>

          {/* CTA Buttons */}
          <div 
            className={`mt-10 flex flex-wrap gap-4 justify-center lg:justify-start transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '1.2s' }}
          >
            <a 
              href="#projects" 
              className="btn-primary flex items-center gap-2 group"
            >
              View My Work
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border border-white/20 rounded-lg hover:border-[#1b45f4] hover:bg-[#1b45f4]/10 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div 
            className={`mt-10 flex gap-6 justify-center lg:justify-start transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '1.4s' }}
          >
            <a 
              href="https://github.com/ramakrishna1973" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-[#1b45f4] hover:bg-[#1b45f4]/20 transition-all duration-300 group"
            >
              <Github className="w-5 h-5 text-[#afafaf] group-hover:text-white transition-colors" />
            </a>
            <a 
              href="https://www.linkedin.com/in/maram-ramakrishna-reddy-6752a8269/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-[#1b45f4] hover:bg-[#1b45f4]/20 transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5 text-[#afafaf] group-hover:text-white transition-colors" />
            </a>
            <a 
              href="mailto:rk0010430@gmail.com"
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-[#1b45f4] hover:bg-[#1b45f4]/20 transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 text-[#afafaf] group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div 
          ref={imageRef}
          className={`flex-1 flex justify-center lg:justify-end order-1 lg:order-2 transition-all duration-1400 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
          style={{ 
            transitionDelay: '0.4s',
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <div className="relative">
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1b45f4] to-[#1485ff] rounded-3xl blur-3xl opacity-30 scale-90" />
            
            {/* Image container */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-3xl overflow-hidden border border-white/10">
              <img 
                src={`${import.meta.env.BASE_URL}hero-portrait.jpg`}
                alt="Maram Reddy"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/50 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <div 
              className="absolute -bottom-4 -left-4 glass rounded-xl px-4 py-3 animate-float"
              style={{ animationDelay: '1s' }}
            >
              <p className="text-sm text-[#afafaf]">Experience</p>
              <p className="text-2xl font-bold text-white">1+ year</p>
            </div>

            <div 
              className="absolute -top-4 -right-4 glass rounded-xl px-4 py-3 animate-float"
              style={{ animationDelay: '2s' }}
            >
              <p className="text-sm text-[#afafaf]">Projects</p>
              <p className="text-2xl font-bold text-white">10+</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: '1.6s' }}
      >
        <span className="text-xs text-[#afafaf] uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-[#1b45f4] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
