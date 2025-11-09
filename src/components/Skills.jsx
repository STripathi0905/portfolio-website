import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaDocker,
  FaAws,
  FaKey as FaKeyIcon,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJavascript,
  SiPostgresql,
  SiPostman,
  SiVisualstudiocode,
  SiRedux,
  SiSocketdotio,
  SiJest,
  SiFigma,
  SiGithub,
  SiTypescript,
  SiNestjs,
  SiRedis,
  SiGraphql
} from 'react-icons/si';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: FaReact,
      skills: [
        { name: 'JavaScript (ES6+)', icon: SiJavascript, color: '#F7DF1E', level: 95 },
        { name: 'TypeScript', icon: SiTypescript, color: '#007ACC', level: 88 },
        { name: 'React.js', icon: FaReact, color: '#61DAFB', level: 92 },
        { name: 'Redux / RTK', icon: SiRedux, color: '#764ABC', level: 86 },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', level: 88 },
        { name: 'HTML5', icon: FaHtml5, color: '#E34F26', level: 98 },
        { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', level: 95 },
      ]
    },
    backend: {
      title: 'Backend Development',
      icon: FaNodeJs,
      skills: [
        { name: 'Node.js', icon: FaNodeJs, color: '#339933', level: 90 },
        { name: 'Express.js', icon: SiExpress, color: '#000000', level: 88 },
        { name: 'REST APIs & GraphQL', icon: SiGraphql, color: '#E10098', level: 87 },
        { name: 'WebSockets (Socket.io)', icon: SiSocketdotio, color: '#010101', level: 85 },
        { name: 'Authentication (JWT/OAuth)', icon: FaKeyIcon, color: '#FFB86B', level: 84 },
        { name: 'TypeScript (Backend)', icon: SiTypescript, color: '#007ACC', level: 88 },
      ]
    },
    database: {
      title: 'Database & Storage',
      icon: SiMongodb,
      skills: [
        { name: 'MongoDB (Mongoose)', icon: SiMongodb, color: '#47A248', level: 92 },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791', level: 80 },
        { name: 'Redis (Caching)', icon: SiRedis, color: '#DC382D', level: 75 },
      ]
    },
    tools: {
      title: 'Dev Tools & Deployment',
      icon: SiVisualstudiocode,
      skills: [
        { name: 'Git', icon: FaGitAlt, color: '#F05032', level: 95 },
        { name: 'GitHub', icon: SiGithub, color: '#181717', level: 90 },
        { name: 'Docker', icon: FaDocker, color: '#2496ED', level: 78 },
        { name: 'AWS (basic infra)', icon: FaAws, color: '#FF9900', level: 72 },
        { name: 'Postman', icon: SiPostman, color: '#FF6C37', level: 85 },
        { name: 'Jest (testing)', icon: SiJest, color: '#C21325', level: 76 },
        { name: 'VS Code', icon: SiVisualstudiocode, color: '#007ACC', level: 98 },
        { name: 'PM2 / Process mgmt', icon: SiVisualstudiocode, color: '#9CDCFE', level: 70 }, // placeholder icon
      ]
    }
  };

  const categories = [
    { id: 'all', label: 'All Skills', icon: null },
    { id: 'frontend', label: 'Frontend', icon: FaReact },
    { id: 'backend', label: 'Backend', icon: FaNodeJs },
    { id: 'database', label: 'Database', icon: SiMongodb },
    { id: 'tools', label: 'Tools', icon: SiVisualstudiocode }
  ];

  const getAllSkills = () => Object.values(skillCategories).flatMap(c => c.skills);
  const getFilteredSkills = () => selectedCategory === 'all' ? getAllSkills() : skillCategories[selectedCategory]?.skills || [];

  return (
    <section id="skills" className="py-20 bg-tertiary/30">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="section-title">Skills & Technologies</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4">
              Focused MERN + NestJS full-stack skills — production-ready APIs, modern React frontends, and cloud-ready deployments.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.icon && <category.icon className="text-lg" />}
                <span>{category.label}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {getFilteredSkills().map((skill, index) => (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -50 }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="group relative overflow-hidden rounded-xl bg-gray-900 border border-gray-800 hover:border-primary/50 transition-all duration-300"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-4">
                      <motion.div className="p-3 rounded-lg bg-gray-800 group-hover:bg-gray-700 transition-colors" whileHover={{ scale: 1.05 }} transition={{ duration: 0.25 }}>
                        <skill.icon className="text-3xl" style={{ color: skill.color }} />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{skill.name}</h3>
                        <p className="text-sm text-gray-400">{skill.level}% Proficiency</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-gray-400">
                        <span>Beginner</span>
                        <span>Expert</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                        <motion.div className="h-full bg-gradient-to-r from-primary to-secondary rounded-full" initial={{ width: 0 }} animate={{ width: `${skill.level}%` }} transition={{ duration: 1, delay: index * 0.06 + 0.2 }} />
                      </div>
                    </div>

                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: hoveredSkill === skill.name ? 1 : 0, y: hoveredSkill === skill.name ? 0 : 10 }} transition={{ duration: 0.25 }} className="text-center">
                      <div className="text-xs text-gray-400">
                        {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : skill.level >= 70 ? 'Intermediate' : 'Beginner'}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Summary Stats */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Frontend', value: skillCategories.frontend.skills.length, icon: FaReact },
              { label: 'Backend', value: skillCategories.backend.skills.length, icon: FaNodeJs },
              { label: 'Databases', value: skillCategories.database.skills.length, icon: SiMongodb },
              { label: 'Tools', value: skillCategories.tools.skills.length, icon: SiVisualstudiocode }
            ].map((stat, index) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }} viewport={{ once: true }} className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                <stat.icon className="text-2xl mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }} viewport={{ once: true }} className="mt-12 text-center">
            <p className="text-lg text-gray-400">
              Production-focused MERN + NestJS skillset — APIs, server-side TypeScript, client optimization, testing, and containerized deployment.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
