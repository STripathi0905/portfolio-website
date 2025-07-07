import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import profileImage from '../assets/profile.jpg'; // ⬅️ Add your image in src/assets

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 py-16 pt-24">
 <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}
  className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-secondary shadow-lg overflow-hidden flex items-center justify-center bg-white"
>
  <img
    src={profileImage}
    alt="Shashank Tripathi"
    className="object-contain w-full h-full"
    loading="lazy"
  />
</motion.div>

      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl text-center md:text-left"
        >
          <h2 className="text-secondary text-lg mb-4">Hi, my name is</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Shashank Tripathi.
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-400 mb-8">
            Full Stack Web Developer
          </h2>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl">
            I'm a Full-Stack Developer with a strong passion for creating modern, efficient, and user-focused web applications. I specialize in building responsive interfaces and robust backend systems that drive seamless digital experiences.
          </p>

          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            <motion.a
              href="mailto:stripathi0905@gmail.com"
              className="btn-primary flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <HiMail className="text-xl" />
              <span>Contact Me</span>
            </motion.a>

            <div className="flex items-center space-x-4">
              <motion.a
                href="https://github.com/STripathi0905"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-secondary transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/shashank-tripathi09/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-secondary transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
