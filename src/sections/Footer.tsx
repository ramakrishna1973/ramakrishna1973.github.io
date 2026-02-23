import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative py-12 border-t border-white/10">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo / Name */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white">
              Maram <span className="gradient-text">Reddy</span>
            </h3>
            <p className="text-[#afafaf] text-sm mt-1">
              AI/ML Engineer & Data Scientist
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#afafaf] text-sm hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:bg-[#1b45f4]/20 hover:border-[#1b45f4]/50 transition-all duration-300 group"
          >
            <ArrowUp className="w-5 h-5 text-[#afafaf] group-hover:text-[#1b45f4] transition-colors" />
          </button>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 my-8" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-[#afafaf] text-sm flex items-center justify-center gap-1">
            © {currentYear} Maram Reddy. Made with 
            <Heart className="w-4 h-4 text-red-500 fill-red-500" /> 
            and lots of 
            <span className="text-[#1b45f4]">code</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
