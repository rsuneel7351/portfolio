import { motion } from 'framer-motion';
import { Building2, Calendar, Award, MapPin } from 'lucide-react';
import profile from '../data/profile.json';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
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
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating scalable solutions that solve real-world problems
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Side - Bio and Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Bio */}
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold font-poppins mb-6 text-foreground">
                Who I Am
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {profile.short_bio}
              </p>

              {/* Key Info */}
              <div className="flex flex-wrap gap-4">
                {/* Experience */}
                <div className="flex items-center gap-3 w-[48%]">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-electric-indigo to-teal-accent flex items-center justify-center">
                    <Calendar size={20} className="text-slate-800" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Experience</p>
                    <p className="font-semibold text-foreground">{profile.experience_years} Years</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 w-[48%]">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-electric-indigo to-teal-accent flex items-center justify-center">
                    <MapPin size={20} className="text-slate-800" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-semibold text-foreground">{profile.contact.location}</p>
                  </div>
                </div>

                {/* Award (Single row) */}
                <div className="flex items-center gap-3 w-full">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-accent to-electric-indigo flex items-center justify-center">
                    <Award size={20} className="text-slate-800" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Education</p>
                    <p className="font-semibold text-foreground">{profile.education}</p>
                  </div>
                </div>

                {/* Current Role */}
                <div className="flex items-center gap-3 w-[48%]">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-accent to-electric-indigo flex items-center justify-center">
                    <Building2 size={20} className="text-slate-800" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Current Role</p>
                    <p className="font-semibold text-foreground">{profile.positions[profile.positions.length - 1].title}</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Achievements */}
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold font-poppins mb-6 text-foreground">
                Key Achievements
              </h3>
              <div className="space-y-4">
                {profile.achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">{achievement}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold font-poppins mb-8 text-foreground">
                Professional Journey
              </h3>

              <div className="space-y-8">
                {profile.positions.reverse().map((position, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="timeline-item relative"
                  >
                    <div className="space-y-3">
                      {/* Position Header */}
                      <div>
                        <h4 className="text-xl font-semibold text-foreground">
                          {position.title}
                        </h4>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Building2 size={16} />
                          <span className="font-medium">{position.company}</span>
                          <span className="text-sm">•</span>
                          <span className="text-sm">{position.period}</span>
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <ul className="space-y-2 ml-4">
                        {position.bullets.map((bullet, bulletIndex) => (
                          <li key={bulletIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full opacity-5 blur-3xl bg-gradient-to-r from-electric-indigo to-teal-accent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl bg-gradient-to-l from-teal-accent to-electric-indigo" />
    </section>
  );
};

export default About;