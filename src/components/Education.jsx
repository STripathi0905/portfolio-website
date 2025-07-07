import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      field: 'Computer Science',
      institution: 'Dr. Hari Singh Gour Vishwavidyalaya (A Central University),Sagar ',
      achievements: [
        'Specialized in Advanced Web Development and Database Management',
        'Completed projects in Full Stack Development',
        'Participated in technical workshops and coding competitions'
      ]
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      field: 'Computer Science',
      institution: 'Awadhesh Pratap Singh University,Rewa',
      achievements: [
        'Foundation in Computer Science and Programming',
        'Developed strong problem-solving skills',
        'Participated in various technical events'
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-tertiary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Education</h2>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-quaternary p-6 rounded-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-tertiary rounded-full">
                    <FaGraduationCap className="text-secondary text-xl" />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between items-start gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                        <p className="text-secondary">{edu.field}</p>
                        <p className="text-gray-400">{edu.institution}</p>
                      </div>
                      <span className="text-gray-400">{edu.duration}</span>
                    </div>

                    <ul className="mt-4 space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-400">
                          <span className="text-secondary mt-1.5">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;