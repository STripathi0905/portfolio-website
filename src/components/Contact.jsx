import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaPhoneAlt, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmissionStatus(null);

    try {
      // Simulate API call - replace with actual email service
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would integrate with email service like EmailJS, Formspree, etc.
      // Example: const response = await emailjs.send('service_id', 'template_id', formData);
      
      setSubmissionStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Hide success message after 5 seconds
      setTimeout(() => setSubmissionStatus(null), 5000);
    } catch (error) {
      setSubmissionStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
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
                    className={`w-full bg-quaternary border-2 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-secondary transition-colors duration-300 ${
                      errors.name ? 'border-red-500' : 'border-gray-700'
                    }`}
                  />
                  <AnimatePresence>
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-red-400 text-sm mt-1"
                      >
                        {errors.name}
                      </motion.p>
                    )}
                  </AnimatePresence>
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
                    className={`w-full bg-quaternary border-2 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-secondary transition-colors duration-300 ${
                      errors.email ? 'border-red-500' : 'border-gray-700'
                    }`}
                  />
                  <AnimatePresence>
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-red-400 text-sm mt-1"
                      >
                        {errors.email}
                      </motion.p>
                    )}
                  </AnimatePresence>
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
                    className={`w-full bg-quaternary border-2 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-secondary transition-colors duration-300 resize-none ${
                      errors.message ? 'border-red-500' : 'border-gray-700'
                    }`}
                  ></textarea>
                  <AnimatePresence>
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-red-400 text-sm mt-1"
                      >
                        {errors.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <span>Send Message</span>
                  )}
                </button>

                <AnimatePresence>
                  {submissionStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="bg-green-500 bg-opacity-10 border border-green-500 rounded-lg p-4 flex items-center space-x-3"
                    >
                      <FaCheckCircle className="text-green-400 text-xl" />
                      <p className="text-green-400 text-sm">
                        Thank you for your message! I'll get back to you soon.
                      </p>
                    </motion.div>
                  )}
                  
                  {submissionStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="bg-red-500 bg-opacity-10 border border-red-500 rounded-lg p-4 flex items-center space-x-3"
                    >
                      <FaExclamationCircle className="text-red-400 text-xl" />
                      <p className="text-red-400 text-sm">
                        Something went wrong. Please try again or contact me directly.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;