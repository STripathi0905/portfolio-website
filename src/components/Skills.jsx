import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript, SiPython, SiFlask, SiMysql, SiPostman, SiAmazonaws, SiVisualstudiocode } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

<FaJava />



const Skills = () => {
  const skills = [
    { name: 'Java', icon: FaJava, color: '#007396' },
    { name: 'JavaScript (ES6+)', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'React.js', icon: FaReact, color: '#61DAFB' },
    { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
    { name: 'Express.js', icon: SiExpress, color: '#000000' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'Flask', icon: SiFlask, color: '#000000' },
    { name: 'HTML5', icon: SiJavascript, color: '#E34F26' },
    { name: 'CSS3', icon: SiJavascript, color: '#1572B6' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Git', icon: FaGitAlt, color: '#F05032' },
    { name: 'AWS', icon: SiAmazonaws, color: '#FF9900' },
    { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
    { name: 'VS Code', icon: SiVisualstudiocode, color: '#007ACC' },
  ];

  return (
    <section id="skills" className="py-20 bg-tertiary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Skills & Technologies</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center p-6 bg-quaternary rounded-lg hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <skill.icon
                  className="text-5xl mb-4"
                  style={{ color: skill.color }}
                />
                <h3 className="text-center font-medium">{skill.name}</h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-gray-400">
              Experienced in Agile and Scrum methodologies, with a focus on creating efficient and scalable web applications.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;