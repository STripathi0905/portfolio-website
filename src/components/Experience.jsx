import { motion } from 'framer-motion';
import { BsBriefcase } from 'react-icons/bs';

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Web Developer',
      type: 'Freelance Projects',
      // duration: 'Sep 2024 - Present',
      description: [
        'Collaborated with a team of 3 friends to develop freelance full-stack web applications for clients using the MERN stack',
        'Took the lead on frontend development, creating responsive and modular UI components in React.js using Hooks and Context API',
        'Worked closely with the backend team to integrate RESTful APIs, ensuring seamless frontend-backend communication',
        'Participated in project planning and Git-based version control, ensuring code quality and team collaboration',
        'Tested frontend functionality using Postman (for API testing) and basic unit tests with Jest'
      ],
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'REST APIs', 'Git', 'Jest', 'Postman']
    }

  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Professional Experience</h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-tertiary p-6 rounded-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-quaternary rounded-full">
                    <BsBriefcase className="text-secondary text-xl" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between items-start gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <p className="text-secondary">{exp.type}</p>
                      </div>
                      <span className="text-gray-400">{exp.duration}</span>
                    </div>

                    <ul className="mt-4 space-y-2 text-gray-400">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-secondary mt-1.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="skill-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Certifications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-quaternary p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-secondary">TATA Cybersecurity Security Analyst</h4>
                {/* <p className="text-gray-400 mt-2">Job Simulation on Forage - January 2024</p> */}
              </div>
              <div className="bg-quaternary p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-secondary">ISRO Geodata Processing</h4>
                {/* <p className="text-gray-400 mt-2">Using Python - 2024</p> */}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;