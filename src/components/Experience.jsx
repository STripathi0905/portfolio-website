import { motion } from "framer-motion";
import { BsBriefcase } from "react-icons/bs";

const Experience = () => {
  const experiences = [
  {
    title: "Full Stack Developer",
    type: "Lazulite Technology Services",
    duration: "Apr 2026 – Present",
    description: [
      "Developing enterprise SaaS CRM and IAM platform features using Next.js, React, TypeScript, and modern frontend architecture.",
      "Building authentication, authorization, role-based access control (RBAC), user management, and dashboard modules for enterprise applications.",
      "Collaborating closely with backend teams to integrate secure REST APIs, optimize data flow, and implement business workflows.",
      "Developing reusable UI components, shared modules, and scalable application architecture to improve maintainability across the platform.",
      "Working with Git, Jira, code reviews, Agile sprint planning, and production deployments while resolving bugs and delivering new features.",
      "Contributing across the full development lifecycle, from feature implementation and API integration to testing, optimization, and production support."
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "REST APIs",
      "RBAC",
      "Authentication",
      "Tailwind CSS",
      "Git",
      "Jira"
    ]
  },

  {
    title: "Full Stack Developer",
    type: "AJX Technologies",
    duration: "Oct 2025 – Apr 2026",
    description: [
      "Built SaaS web application features using Next.js, React, and TypeScript.",
      "Developed responsive user interfaces and reusable components using Tailwind CSS.",
      "Implemented backend APIs and integrated MongoDB for data management.",
      "Built authentication, authorization, and dashboard modules for business applications.",
      "Integrated REST APIs, handled validation, debugging, and application performance improvements.",
      "Worked in Agile teams using Git, GitHub, Postman, and code review workflows."
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
      "REST APIs",
      "Git",
      "Postman"
    ]
  },

  {
    title: "Full Stack Developer",
    type: "JSPR Software Solution",
    duration: "Sep 2024 – Sep 2025",
    description: [
      "Developed and maintained web applications using the MERN stack.",
      "Built responsive React interfaces with reusable components and state management.",
      "Designed and integrated REST APIs for authentication and business modules.",
      "Worked with MongoDB, Express.js, and Node.js to build backend functionality.",
      "Collaborated in Agile development, participated in code reviews, and managed version control using Git."
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "REST APIs",
      "Git",
      "Postman"
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
            {experiences.map((exp, index) => {
              // Robustly pick the list: prefer description, then project, else empty array
              const details = Array.isArray(exp.description)
                ? exp.description
                : Array.isArray(exp.project)
                ? exp.project
                : [];

              const techs = Array.isArray(exp.technologies) ? exp.technologies : [];

              return (
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
                        {details.length === 0 ? (
                          <li className="text-sm text-gray-500">No details provided.</li>
                        ) : (
                          details.map((item, i) => (
                            <li key={`${index}-detail-${i}`} className="flex items-start gap-2">
                              <span className="text-secondary mt-1.5">•</span>
                              <span>{item}</span>
                            </li>
                          ))
                        )}
                      </ul>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {techs.map((tech, i) => (
                          <span key={`${index}-tech-${i}`} className="skill-badge">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
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
                <h4 className="text-xl font-semibold text-secondary">
                  Oracle Cloud Infrastructure 2025 Certified DevOps Professional
                </h4>
              </div>
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
