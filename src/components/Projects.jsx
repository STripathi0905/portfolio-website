import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
  title: 'Movie Finder',
  description: 'A React-based application that allows users to search for movies using the OMDb API and view detailed information including posters, ratings, and plot summaries.',
  tech: ['React.js', 'JavaScript', 'CSS', 'OMDb API'],
  github: 'https://github.com/STripathi0905/movie-finder',
  features: [
    'Search movies using keywords with real-time OMDb API integration',
    'Displays detailed movie information including title, genre, year, rating, and poster',
    'Responsive design optimized for both mobile and desktop devices',
    'Error handling for empty searches and unavailable results'
  ]
},
    {
      title: 'Food-Diet Recommendation System',
      description: 'An intelligent web-based recommendation system to provide personalized diet plans based on user preferences and dietary goals.',
      tech: ['Python', 'Flask', 'pandas', 'scikit-learn', 'HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/STripathi0905/Food-Diet-Recommendation-System',
      features: [
        'Developed an intelligent web-based recommendation system for personalized diet plans',
        'Implemented machine learning algorithms for diet recommendations',
        'Created user-friendly interface for inputting preferences and viewing recommendations',
        'Integrated data analysis tools for processing nutritional information'
      ]
    },
    {
      title: 'E-Commerce (ShopSaara)',
      description: 'A full-stack e-commerce platform built with MERN stack featuring cart management, secure checkout, product management, and admin dashboard.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux Toolkit', 'Razorpay', 'Cloudinary'],
      // github: 'https://github.com/STripathi0905/ShopSaara',
      features: [
        'Developed a full-stack e-commerce app with cart, checkout, product management, and admin dashboard',
        'Integrated Razorpay Payment Gateway to support secure UPI, card, and net banking transactions',
        'Implemented Redux Toolkit for state management and smooth UI performance',
        'Built role-based access (admin/user) with protected routes and backend auth checks'
      ]
    },

  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Featured Projects</h2>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="project-card"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1 space-y-4">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <p className="text-gray-400">{project.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-secondary">Key Features:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-400">
                        {project.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="skill-badge">{tech}</span>
                      ))}
                    </div>

                    <div className="flex space-x-4 pt-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-secondary hover:text-white transition-colors duration-300"
                      >
                        <FaGithub className="text-xl" />
                        <span>View Code</span>
                      </a>
                    </div>
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

export default Projects;