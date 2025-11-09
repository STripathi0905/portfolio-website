import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-24 right-8 z-40 p-3 rounded-full glass-effect hover:bg-tertiary/50 transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? (
          <FiMoon className="w-5 h-5 text-secondary" />
        ) : (
          <FiSun className="w-5 h-5 text-yellow-400" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;