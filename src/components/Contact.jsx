import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    // For now, we'll just show a success message
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Get In Touch</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-400 mb-8">
                I'm currently open to new opportunities and collaborations.
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <HiMail className="text-secondary text-2xl" />
                  <a
                    href="mailto:stripathi0905@gmail.com"
                    className="text-gray-400 hover:text-secondary transition-colors duration-300"
                  >
                    stripathi0905@gmail.com
                  </a>
                </div>

                <div className="flex items-center space-x-4">
                  <FaPhoneAlt className="text-secondary text-2xl" />
                  <a
                    href="tel:+918269669862"
                    className="text-gray-400 hover:text-secondary transition-colors duration-300"
                  >
                    +91-8269669862
                  </a>
                </div>

                <div className="flex space-x-4 mt-6">
                  <a
                    href="https://github.com/STripathi0905"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-secondary transition-colors duration-300 flex items-center space-x-2"
                  >
                    <FaGithub className="text-2xl" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shashank-tripathi09/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-secondary transition-colors duration-300 flex items-center space-x-2"
                  >
                    <FaLinkedin className="text-2xl" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-quaternary border-2 border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-secondary transition-colors duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-quaternary border-2 border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-secondary transition-colors duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full bg-quaternary border-2 border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-secondary transition-colors duration-300"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Send Message
                </button>

                {isSubmitted && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-green-400 text-center mt-4"
                  >
                    Thank you for your message! I'll get back to you soon.
                  </motion.p>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;