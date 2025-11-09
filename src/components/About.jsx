import { motion } from "framer-motion";

const tech = [
  "Next.js",
  "TypeScript",
  "React",
  "Node.js",
  "MongoDB",
  "Mongoose",
  "Tailwind CSS",
  "NextAuth / JWT",
  "REST APIs",
  "Vercel",
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-tertiary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: About + Tech */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Hi, I’m <strong>Shashank</strong> — a Full-Stack Web Developer focused on building production-grade SaaS applications with{" "}
                <strong>Next.js</strong> and <strong>TypeScript</strong>. I design and ship end-to-end features: server-side & client pages, secure auth flows,
                REST/edge API routes, and polished, accessible UI components.
              </p>

              <p className="text-lg leading-relaxed">
                My background (MCA) and experience in freelance & production projects help me balance solid engineering with a strong sense of user experience.
                I prioritize performance, accessibility, and maintainable code — from reusable Tailwind components to robust backend services and CI/CD deployments.
              </p>

              <p className="text-lg leading-relaxed">
                I enjoy solving real product problems: dashboards, role-based auth (NextAuth/JWT), data modeling with MongoDB/Mongoose, and deploying fast, reliable apps to Vercel.
              </p>

              <div>
                <h4 className="text-md font-semibold text-white mb-3">Tech stack</h4>
                <div className="flex flex-wrap gap-2">
                  {tech.map((t, i) => (
                    <span
                      key={i}
                      className="inline-block px-3 py-1 text-sm rounded-full border border-gray-700 bg-quaternary/60 text-gray-100"
                      aria-label={`tech-${t}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Education + CTA */}
            <div className="bg-quaternary p-6 rounded-lg space-y-4">
              <h3 className="text-2xl font-bold text-white">Education</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-secondary">Master of Computer Applications (MCA)</h4>
                  <p className="text-gray-400">Dr. Harisingh Gour Vishwavidyalaya (Central University)</p>
                  <p className="text-gray-400">Major: Computer Science · Minor: Psychology</p>
                  <p className="text-gray-400">CGPA: 8.74 / 10</p>
                  <p className="text-sm text-gray-500">2022 — 2024</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-secondary">Bachelor of Computer Applications (BCA)</h4>
                  <p className="text-gray-400">Awadhesh Pratap Singh University</p>
                  <p className="text-gray-400">Major: Computer Science · Minor: Mathematics</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
