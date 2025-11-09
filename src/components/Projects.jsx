import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaFilter } from "react-icons/fa";
import { useState } from "react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: "Movie Finder",
      description:
        "A React-based application that allows users to search for movies using the OMDb API and view detailed information including posters, ratings, and plot summaries.",
      tech: ["React.js", "JavaScript", "CSS", "OMDb API"],
      github: "https://github.com/STripathi0905/movie-finder",
      category: "frontend",
      features: [
        "Search movies using keywords with real-time OMDb API integration",
        "Displays detailed movie information including title, genre, year, rating, and poster",
        "Responsive design optimized for both mobile and desktop devices",
        "Error handling for empty searches and unavailable results",
      ],
      image:
        "https://images.unsplash.com/photo-1489599735734-79b4e4936852?w=800&h=600&fit=crop",
    },
    {
      title: "Food-Diet Recommendation System",
      description:
        "An intelligent web-based recommendation system to provide personalized diet plans based on user preferences and dietary goals.",
      tech: [
        "Python",
        "Flask",
        "pandas",
        "scikit-learn",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      github:
        "https://github.com/STripathi0905/Food-Diet-Recommendation-System",
      category: "fullstack",
      features: [
        "Developed an intelligent web-based recommendation system for personalized diet plans",
        "Implemented machine learning algorithms for diet recommendations",
        "Created user-friendly interface for inputting preferences and viewing recommendations",
        "Integrated data analysis tools for processing nutritional information",
      ],
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop",
    },
    {
      title: "E-Commerce (ShopSaara)",
      description:
        "A full-stack e-commerce platform built with MERN stack featuring cart management, secure checkout, product management, and admin dashboard.",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Redux Toolkit",
        "Razorpay",
        "Cloudinary",
      ],
      github: "https://github.com/STripathi0905/ShopSaara",
      category: "fullstack",
      features: [
        "Developed a full-stack e-commerce app with cart, checkout, product management, and admin dashboard",
        "Integrated Razorpay Payment Gateway to support secure UPI, card, and net banking transactions",
        "Implemented Redux Toolkit for state management and smooth UI performance",
        "Built role-based access (admin/user) with protected routes and backend auth checks",
      ],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, team collaboration features, and productivity analytics.",
      tech: ["React.js", "Socket.io", "Node.js", "MongoDB", "JWT"],
      github: "https://github.com/STripathi0905/To-Do-App",
      category: "fullstack",
      features: [
        "Real-time collaboration using Socket.io",
        "User authentication with JWT tokens",
        "Drag-and-drop task organization",
        "Team management and role-based permissions",
      ],
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    },
    {
      title: "Weather Dashboard",
      description:
        "A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed meteorological data visualization.",
      tech: ["React.js", "Chart.js", "OpenWeather API", "Geolocation API"],
      github: "https://github.com/STripathi0905/weather-dashboard",
      live: "https://weather-dashboard-demo.vercel.app",
      category: "frontend",
      features: [
        "Real-time weather data from OpenWeather API",
        "Interactive charts and data visualization",
        "Location-based weather forecasts",
        "Responsive design with beautiful animations",
      ],
      image:
        "https://images.unsplash.com/photo-1504608524841-42dd6f7dee52?w=800&h=600&fit=crop",
    },
    {
      title: "Personal Portfolio",
      description:
        "A responsive and modern developer portfolio showcasing my projects, skills, and professional journey with smooth animations and interactive UI.",
      tech: ["React.js", "Next.js", "Framer Motion", "Tailwind CSS"],
      github: "https://github.com/STripathi0905/portfolio-website",
      category: "frontend",
      features: [
        "Fully responsive design optimized for all devices",
        "Dynamic project showcase with filtering and animations",
        "Smooth scroll and page transitions using Framer Motion",
        "Dark/light theme toggle",
        "Contact form integration with email service (EmailJS or Nodemailer)",
        "SEO-friendly metadata and Open Graph optimization",
      ],
      image:
        "https://images.unsplash.com/photo-1551288049?w=800&h=600&fit=crop",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects", count: projects.length },
    {
      id: "fullstack",
      label: "Full Stack",
      count: projects.filter((p) => p.category === "fullstack").length,
    },
    {
      id: "frontend",
      label: "Frontend",
      count: projects.filter((p) => p.category === "frontend").length,
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Featured Projects</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4">
              Explore my latest projects showcasing full-stack development,
              modern web technologies, and creative solutions
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeFilter === category.id
                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{category.label}</span>
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="project-card group relative overflow-hidden rounded-xl bg-gray-900 border border-gray-800 hover:border-primary/50 transition-all duration-300"
                  onMouseEnter={() => setHoveredProject(project.title)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60" />

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.category === "fullstack"
                            ? "bg-primary/20 text-primary border border-primary/30"
                            : "bg-secondary/20 text-secondary border border-secondary/30"
                        }`}
                      >
                        {project.category === "fullstack"
                          ? "Full Stack"
                          : "Frontend"}
                      </span>
                    </div>

                    {/* Hover Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: hoveredProject === project.title ? 1 : 0,
                      }}
                      className="absolute inset-0 bg-primary/10 backdrop-blur-sm flex items-center justify-center gap-4"
                    >
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-900/80 rounded-full text-white hover:bg-primary transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaGithub className="text-xl" />
                      </motion.a>
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-gray-900/80 rounded-full text-white hover:bg-secondary transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaExternalLinkAlt className="text-xl" />
                        </motion.a>
                      )}
                    </motion.div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Key Features */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-secondary flex items-center gap-2">
                        <FaFilter className="text-xs" />
                        Key Features
                      </h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feature, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + i * 0.1 }}
                            className="text-xs text-gray-400 flex items-start gap-2"
                          >
                            <span className="text-primary mt-1">•</span>
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                        {project.features.length > 3 && (
                          <li className="text-xs text-gray-500 italic">
                            +{project.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 4).map((tech, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + i * 0.05 }}
                          className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md border border-gray-700"
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="px-2 py-1 bg-gray-800 text-gray-500 text-xs rounded-md border border-gray-700">
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-2">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors text-sm font-medium"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FaGithub />
                        Code
                      </motion.a>
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-primary hover:bg-primary/80 text-white rounded-lg transition-colors text-sm font-medium"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <FaExternalLinkAlt />
                          Live Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-gray-500 text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                No projects found
              </h3>
              <p className="text-gray-400">
                Try selecting a different category
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
