import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Calendar, User, Target } from 'lucide-react';
import projectsData from '../data/projects.json';

interface Project {
  id: string;
  title: string;
  summary: string;
  role: string;
  stack: string[];
  impact: string;
  period: string;
  images: string[];
  repo: string;
  live: string;
  problem: string;
  solution: string;
  tech_details: string[];
  metrics: string[];
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setSelectedImageIndex(0);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setSelectedImageIndex(0);
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcase of applications that solve real-world problems and deliver measurable impact
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-20">
          {projectsData.featured.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-12`}
            >
              {/* Project Image */}
              <div className="lg:w-1/2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative group cursor-pointer"
                  onClick={() => openProjectModal(project)}
                >
                  <div className="glass rounded-2xl overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-br from-electric-indigo to-teal-accent flex items-center justify-center">
                          <span className="text-2xl font-bold text-slate-800">
                            {project.title.charAt(0)}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">Click to view details</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end p-6">
                    <div className="text-white">
                      <p className="font-medium mb-2">View Case Study</p>
                      <div className="flex space-x-4">
                        <ExternalLink size={20} />
                        <Github size={20} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="lg:w-1/2 space-y-6">
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <motion.h3
                      whileHover={{ x: 5 }}
                      className="text-2xl md:text-3xl font-bold font-poppins text-foreground cursor-pointer"
                      onClick={() => openProjectModal(project)}
                    >
                      {project.title}
                    </motion.h3>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      {project.role}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {project.period}
                    </div>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.summary}
                </p>

                <div className="flex items-center gap-2 text-primary">
                  <Target size={20} />
                  <p className="font-semibold">{project.impact}</p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm font-medium rounded-full glass text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => openProjectModal(project)}
                    className="btn-primary"
                  >
                    View Case Study
                  </motion.button>
                  
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-ghost inline-flex items-center gap-2"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                  )}
                  
                  {project.repo && (
                    <motion.a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-ghost inline-flex items-center gap-2"
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-sm"
            onClick={closeProjectModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="glass rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 glass-hover p-6 flex items-center justify-between border-b border-slate-600">
                <h3 className="text-2xl font-bold font-poppins gradient-text">
                  {selectedProject.title}
                </h3>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeProjectModal}
                  className="p-2 rounded-lg glass-hover"
                >
                  <X size={24} />
                </motion.button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-8">
                {/* Problem & Solution */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-primary">Problem</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-secondary">Solution</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                {/* Technical Details */}
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-foreground">Technical Implementation</h4>
                  <ul className="space-y-2">
                    {selectedProject.tech_details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metrics */}
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-foreground">Key Metrics & Impact</h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {selectedProject.metrics.map((metric, index) => (
                      <div key={index} className="glass-hover p-4 rounded-lg">
                        <p className="text-foreground font-semibold">{metric}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-foreground">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 text-sm font-medium rounded-full glass text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-600">
                  {selectedProject.live && (
                    <motion.a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary inline-flex items-center gap-2"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                  )}
                  
                  {selectedProject.repo && (
                    <motion.a
                      href={selectedProject.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-ghost inline-flex items-center gap-2"
                    >
                      <Github size={16} />
                      View Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;