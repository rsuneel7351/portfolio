import { motion } from 'framer-motion';
import skillsData from '../data/skills.json';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const getColorForCategory = (category: string): string => {
    switch (category) {
      case 'Frontend':
        return 'electric-indigo';
      case 'Backend':
        return 'teal-accent';
      case 'AI & Tools':
        return 'electric-indigo-glow';
      default:
        return 'electric-indigo';
    }
  };

  // Flatten all skills from all categories into one array
  const allSkills = Object.entries(skillsData.categories).flatMap(([categoryName, categoryData]) =>
    categoryData.skills.map(skill => ({ ...skill, category: categoryName }))
  );

  return (
    <section id="skills" className="py-20 relative">
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
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        {/* All Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {allSkills.map((skill, skillIndex) => (
            <motion.div
              key={skill.name}
              variants={skillVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="skill-node group relative"
            >
              {/* Category Badge */}
              <div className="absolute -top-2 -right-2 z-10">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{
                    background: `linear-gradient(135deg, hsl(var(--${getColorForCategory(skill.category)})), hsl(var(--${getColorForCategory(skill.category)}-glow)))`,
                    boxShadow: `0 0 15px hsl(var(--${getColorForCategory(skill.category)}) / 0.4)`,
                  }}
                >
                  <span className="text-slate-800">
                    {skill.category.charAt(0)}
                  </span>
                </div>
              </div>

              {/* Skill Header */}
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {skill.name}
                </h4>
                <span className="text-sm font-medium text-muted-foreground">
                  {skill.proficiency}%
                </span>
              </div>

              {/* Progress Ring */}
              <div className="relative flex items-center justify-center mb-4">
                <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 80 80">
                  {/* Background Circle */}
                  <circle
                    cx="40"
                    cy="40"
                    r="32"
                    stroke="hsl(var(--slate-700))"
                    strokeWidth="6"
                    fill="none"
                    className="opacity-30"
                  />
                  {/* Progress Circle */}
                  <motion.circle
                    cx="40"
                    cy="40"
                    r="32"
                    stroke={`hsl(var(--${getColorForCategory(skill.category)}))`}
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: skill.proficiency / 100 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: skillIndex * 0.1 }}
                    style={{
                      strokeDasharray: '201.06', // 2 * π * 32
                      strokeDashoffset: 201.06 - (201.06 * skill.proficiency) / 100,
                      filter: `drop-shadow(0 0 8px hsl(var(--${getColorForCategory(skill.category)}) / 0.4))`,
                    }}
                  />
                </svg>
                
                {/* Center Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: skillIndex * 0.1 + 0.5 }}
                    className="text-xl font-bold gradient-text"
                  >
                    {skill.proficiency}%
                  </motion.span>
                </div>
              </div>

              {/* Category Label */}
              <div className="mb-3">
                <span className="text-xs font-medium px-2 py-1 rounded-full glass text-muted-foreground">
                  {skill.category}
                </span>
              </div>

              {/* Tools */}
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Related Tools:</p>
                <div className="flex flex-wrap gap-2">
                  {skill.tools.map((tool, toolIndex) => (
                    <motion.span
                      key={tool}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.1 + toolIndex * 0.05 }}
                      className="px-3 py-1 text-xs font-medium rounded-full glass text-foreground hover:text-primary transition-colors"
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-0 w-32 h-32 rounded-full opacity-10 blur-3xl bg-gradient-to-r from-electric-indigo to-teal-accent" />
        <div className="absolute bottom-1/4 right-0 w-40 h-40 rounded-full opacity-10 blur-3xl bg-gradient-to-l from-teal-accent to-electric-indigo" />
      </div>
    </section>
  );
};

export default Skills;