import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, Loader2 } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rk0010430@gmail.com',
      href: 'mailto:rk0010430@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-9390018661',
      href: 'tel:+919390018661',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Chandigarh, India',
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
  ];

  return (
    <section 
      ref={sectionRef}
      id="contact"
      className="section py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#1b45f4]/10 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-[#1b45f4]/20 flex items-center justify-center">
              <Mail className="w-6 h-6 text-[#1b45f4]" />
            </div>
            <span className="text-[#1b45f4] text-sm font-medium tracking-widest uppercase">Contact</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="mt-4 text-[#afafaf] max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div 
            className={`lg:col-span-2 space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
            style={{ transitionDelay: '0.2s' }}
          >
            {/* Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-4 p-4 rounded-xl glass card-hover group"
                  style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-[#1b45f4]/20 flex items-center justify-center group-hover:bg-[#1b45f4]/30 transition-colors">
                    <info.icon className="w-5 h-5 text-[#1b45f4]" />
                  </div>
                  <div>
                    <p className="text-[#afafaf] text-sm">{info.label}</p>
                    <p className="text-white font-medium group-hover:text-[#1485ff] transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-[#afafaf] text-sm mb-4">Follow me on</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:bg-[#1b45f4]/20 hover:border-[#1b45f4]/50 transition-all duration-300 group"
                  >
                    <social.icon className="w-5 h-5 text-[#afafaf] group-hover:text-[#1b45f4] transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            className={`lg:col-span-3 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
            style={{ transitionDelay: '0.4s' }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8">
              <div className="space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <label 
                    className={`absolute left-0 transition-all duration-300 ${focusedField === 'name' || formState.name ? 'text-xs text-[#1b45f4] -top-5' : 'text-[#afafaf] top-3'}`}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="input-field"
                    required
                  />
                  <div 
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#1b45f4] transition-all duration-300 ${focusedField === 'name' ? 'w-full' : 'w-0'}`}
                  />
                </div>

                {/* Email Field */}
                <div className="relative">
                  <label 
                    className={`absolute left-0 transition-all duration-300 ${focusedField === 'email' || formState.email ? 'text-xs text-[#1b45f4] -top-5' : 'text-[#afafaf] top-3'}`}
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="input-field"
                    required
                  />
                  <div 
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#1b45f4] transition-all duration-300 ${focusedField === 'email' ? 'w-full' : 'w-0'}`}
                  />
                </div>

                {/* Message Field */}
                <div className="relative">
                  <label 
                    className={`absolute left-0 transition-all duration-300 ${focusedField === 'message' || formState.message ? 'text-xs text-[#1b45f4] -top-5' : 'text-[#afafaf] top-3'}`}
                  >
                    Your Message
                  </label>
                  <textarea
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className="input-field resize-none"
                    rows={4}
                    required
                  />
                  <div 
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#1b45f4] transition-all duration-300 ${focusedField === 'message' ? 'w-full' : 'w-0'}`}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-500 ${
                    isSubmitted 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gradient-to-r from-[#1b45f4] to-[#1485ff] text-white hover:shadow-lg hover:shadow-[#1b45f4]/30'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
