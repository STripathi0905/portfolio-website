import { motion } from "framer-motion";

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
            <div className="space-y-4">
              <p className="text-lg">
                Hello! I'm Shashank, a passionate Full Stack Web Developer with
                a strong foundation in computer science. I hold a Master's
                degree in Computer Applications (MCA), combining technical
                expertise with insights from psychology to build better user
                experiences.
              </p>

              <p className="text-lg">
                My journey in web development is driven by a commitment to
                creating meaningful, real-world digital solutions. I specialize
                in building full-stack applications using the MERN stack and
                adhere to modern development practices to deliver scalable and
                maintainable code.
              </p>

              <p className="text-lg">
                With practical experience in freelance development and a solid
                academic background, I enjoy working on projects that challenge
                me to grow. I'm especially passionate about designing responsive
                user interfaces, ensuring accessibility, and integrating secure
                payment solutions.
              </p>
            </div>

            <div className="bg-quaternary p-6 rounded-lg space-y-4">
              <h3 className="text-2xl font-bold text-white">Education</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-secondary">
                    Master of Computer Applications (MCA)
                  </h4>
                  <p className="text-gray-400">
                    Dr. Harisingh Gour Vishwavidyalaya (A Central University)
                  </p>
                  <p className="text-gray-400">
                    Major in Computer Science; Minors in Psychology
                  </p>
                  <p className="text-gray-400">CGPA: 8.74/10</p>
                  <p className="text-sm text-gray-500">2022 - 2024</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-secondary">
                    Bachelor of Computer Applications (BCA)
                  </h4>
                  <p className="text-gray-400">
                    Awadhesh Pratap Singh University
                  </p>
                  <p className="text-gray-400">
                    Major in Computer Science; Minors in Mathematics
                  </p>
                  {/* <p className="text-sm text-gray-500">2018 - 2021</p> */}
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
