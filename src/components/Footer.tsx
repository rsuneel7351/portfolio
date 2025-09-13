import { motion } from 'framer-motion';
import { Heart, ArrowUp, Mail, Linkedin, Github } from 'lucide-react';
import profile from '../data/profile.json';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Mail,
      href: `mailto:${profile.contact.email}`,
      label: 'Email',
    },
    {
      icon: Linkedin,
      href: profile.contact.linkedin,
      label: 'LinkedIn',
    },
    {
      icon: Github,
      href: profile.contact.github,
      label: 'GitHub',
    },
  ];

  return (
    <footer className="relative py-12 border-t border-slate-600">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-8">
          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="glass p-4 rounded-full hover:glass-hover transition-all duration-300 group"
          >
            <ArrowUp size={24} className="text-primary group-hover:text-secondary transition-colors" />
          </motion.button>

          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold font-poppins gradient-text mb-2">
              {profile.name}
            </h3>
            <p className="text-muted-foreground">
              {profile.role}
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center space-x-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label !== 'Email' ? '_blank' : undefined}
                rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="glass p-3 rounded-full hover:glass-hover transition-all duration-300 group"
                aria-label={link.label}
              >
                <link.icon size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent" />

          {/* Copyright and Credits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center space-y-2"
          >
            <p className="text-muted-foreground text-sm">
              © {currentYear} {profile.name}. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
              Built with 
              <Heart size={14} className="text-red-500 fill-current animate-pulse" /> 
              using React, TypeScript & Framer Motion
            </p>
          </motion.div>

          {/* Quick Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <p className="text-muted-foreground text-sm mb-4">
              Ready to work together?
            </p>
            <motion.a
              href={`mailto:${profile.contact.email}?subject=Let's work together`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center gap-2"
            >
              <Mail size={16} />
              Get In Touch
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent pointer-events-none" />
    </footer>
  );
};

export default Footer;