import { motion } from 'framer-motion';
import { BsBriefcase } from 'react-icons/bs';

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Developer',
      type: 'JSPR Software Solution',
      duration: 'Sep 2024 – Present',
      description: [
        'Developed and maintained SaaS-based web application features using the MERN stack (MongoDB, Express.js, React.js, Node.js)',
        'Built responsive and modular UI components in React.js with Tailwind CSS, managing state with Hooks and Context API',
        'Designed and integrated secure RESTful APIs for authentication, user dashboard, and product modules',
        'Collaborated in Agile environment by participating in sprint planning, daily stand-ups, and peer code reviews',
        'Utilized Git/GitHub for version control and Postman for API testing to ensure smooth frontend-backend integration'
      ],
      technologies: [
        'React.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Tailwind CSS',
        'REST APIs',
        'Git/GitHub',
        'Postman'
      ]
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

          {/* Certifications */}
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
              </div>
              <div className="bg-quaternary p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-secondary">ISRO Geodata Processing</h4>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
