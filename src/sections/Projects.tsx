import { useEffect, useRef, useState } from 'react';
import { FolderGit2, ExternalLink, Github, Cpu, Eye, Brain } from 'lucide-react';

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'Virtual Voice Assistant',
      description: 'An AI-powered assistant that performs automated tasks using speech commands. Implemented search automation, reminders, and file handling using natural language inputs.',
      image: `${import.meta.env.BASE_URL}project-voice-assistant.jpg`,
      icon: Cpu,
      tech: ['Python', 'SpeechRecognition', 'pyttsx3', 'NLP'],
      github: '#',
      demo: '#',
      color: '#1b45f4',
    },
    {
      title: 'Real-Time Object Detection',
      description: 'Built a real-time object detection system capable of tracking multiple objects in video streams using YOLOv5. Achieved high-accuracy detection and smooth object tracking in live video feeds.',
      image: `${import.meta.env.BASE_URL}project-object-detection.jpg`,
      icon: Eye,
      tech: ['YOLOv5', 'Python', 'OpenCV', 'Deep Learning'],
      github: '#',
      demo: '#',
      color: '#1485ff',
    },
    {
      title: 'Comments Mining with TF-IDF',
      description: 'Performed text mining to identify inherent bias in comments. Research paper accepted for ICCTRDA Conference 2025. Extracted bias patterns and contributed insights to the final research outcomes.',
      image: `${import.meta.env.BASE_URL}project-comments-mining.jpg`,
      icon: Brain,
      tech: ['Python', 'TF-IDF', 'NLP', 'Text Mining'],
      github: '#',
      demo: '#',
      color: '#00d4ff',
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="projects"
      className="section py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1b45f4]/5 via-transparent to-[#1b45f4]/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-[#1b45f4]/20 flex items-center justify-center">
              <FolderGit2 className="w-6 h-6 text-[#1b45f4]" />
            </div>
            <span className="text-[#1b45f4] text-sm font-medium tracking-widest uppercase">Projects</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 text-[#afafaf] max-w-2xl mx-auto">
            Showcasing my work in AI/ML, from intelligent voice assistants to real-time computer vision systems
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${0.2 + index * 0.15}s` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Card */}
              <div className="relative h-full glass rounded-2xl overflow-hidden card-hover">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent transition-opacity duration-500"
                    style={{ opacity: hoveredProject === index ? 0.9 : 0.7 }}
                  />

                  {/* Icon Badge */}
                  <div 
                    className="absolute top-4 left-4 w-10 h-10 rounded-lg flex items-center justify-center transition-transform duration-500"
                    style={{ 
                      background: `${project.color}20`,
                      transform: hoveredProject === index ? 'scale(1.1)' : 'scale(1)',
                    }}
                  >
                    <project.icon className="w-5 h-5" style={{ color: project.color }} />
                  </div>

                  {/* Quick Actions */}
                  <div 
                    className={`absolute top-4 right-4 flex gap-2 transition-all duration-500 ${hoveredProject === index ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
                  >
                    <a 
                      href={project.github}
                      className="w-9 h-9 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <Github className="w-4 h-4 text-white" />
                    </a>
                    <a 
                      href={project.demo}
                      className="w-9 h-9 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#1485ff] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#afafaf] text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="skill-tag text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Glow */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-500"
                  style={{ 
                    background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
                    opacity: hoveredProject === index ? 1 : 0,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div 
          className={`text-center mt-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '0.8s' }}
        >
          <a 
            href="https://github.com/ramakrishna1973"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border border-white/20 rounded-lg hover:border-[#1b45f4] hover:bg-[#1b45f4]/10 transition-all duration-300 group"
          >
            <Github className="w-5 h-5" />
            View All Projects
            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
