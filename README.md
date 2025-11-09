# Shashank Tripathi - Full Stack Developer Portfolio

A modern, responsive portfolio website built with React and Tailwind CSS, featuring interactive animations, particle effects, and comprehensive project showcases.

## 🌟 Features

- **Interactive Particle Background**: Dynamic animated particles with mouse interaction
- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Advanced Animations**: Smooth transitions using Framer Motion
- **Contact Form**: Form validation with loading states and success/error messages
- **SEO Optimized**: Comprehensive meta tags and structured data
- **Dark Theme**: Professional dark theme with consistent branding
- **Interactive Skills Section**: Progress indicators and category filtering
- **Performance Optimized**: Fast loading with optimized assets

## 🛠️ Technologies Used

- **Frontend**: React 18, JavaScript (ES6+)
- **Styling**: Tailwind CSS, CSS3
- **Animations**: Framer Motion
- **Icons**: React Icons
- **SEO**: React Helmet
- **Build Tool**: Create React App

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and visit `http://localhost:3000`

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## 📁 Project Structure

```
portfolio-website/
├── public/                 # Static assets and HTML template
│   ├── index.html         # Main HTML file with SEO meta tags
│   ├── manifest.json      # Web app manifest
│   └── favicon.ico        # Website icon
├── src/                   # Source code
│   ├── components/        # React components
│   │   ├── Navbar.jsx     # Navigation component
│   │   ├── Hero.jsx       # Hero section
│   │   ├── About.jsx      # About section
│   │   ├── Projects.jsx   # Projects showcase
│   │   ├── Skills.jsx     # Skills with progress indicators
│   │   ├── Experience.jsx # Work experience
│   │   ├── Education.jsx  # Education details
│   │   ├── Contact.jsx    # Contact form with validation
│   │   └── ParticleBackground.jsx # Animated particle system
│   ├── assets/           # Images and other assets
│   ├── App.js            # Main application component
│   ├── index.css         # Global styles and Tailwind imports
│   └── index.js          # Application entry point
├── package.json          # Project dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
└── README.md            # Project documentation
```

## 🎨 Customization

### Personal Information
Update the personal information in the relevant components:
- `src/components/Hero.jsx` - Name and title
- `src/components/About.jsx` - About section content
- `src/components/Contact.jsx` - Contact information
- `src/App.js` - SEO meta tags

### Projects
Add your projects in `src/components/Projects.jsx`:
```javascript
{
  title: "Your Project Title",
  description: "Project description",
  image: "project-image.jpg",
  technologies: ["React", "Node.js", "MongoDB"],
  github: "https://github.com/yourusername/project",
  demo: "https://yourproject.com"
}
```

### Skills
Update your skills in `src/components/Skills.jsx` with proficiency levels.

### Experience & Education
Modify the timeline data in `src/components/Experience.jsx` and `src/components/Education.jsx`.

## 📱 Deployment

### Build for Production
```bash
npm run build
```

This creates an optimized production build in the `build` folder.

### Deployment Options

1. **Netlify**: Connect your GitHub repository for automatic deployments
2. **Vercel**: Zero-config deployment for React apps
3. **GitHub Pages**: Free hosting for static sites
4. **AWS S3**: Scalable cloud hosting

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory for any environment-specific settings:
```
REACT_APP_API_URL=your-api-url
REACT_APP_EMAIL_SERVICE=your-email-service
```

### Tailwind Configuration
Customize the design system in `tailwind.config.js`:
- Colors
- Typography
- Spacing
- Breakpoints

## 📧 Contact Form Integration

The contact form supports various email services:
- **EmailJS**: Easy integration, no backend required
- **Formspree**: Simple form handling
- **Netlify Forms**: Built-in form handling with Netlify
- **Custom Backend**: Implement your own API endpoint

## 🚀 Performance Optimization

- Images are optimized for web
- Lazy loading for components
- Code splitting with React.lazy()
- Minified production build
- CDN integration ready

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: shashank.tripathi2021@vitstudent.ac.in
- **LinkedIn**: [Shashank Tripathi](https://linkedin.com/in/shashank-tripathi)
- **GitHub**: [Shashank Tripathi](https://github.com/shashank-tripathi)

---

⭐ If you like this project, please give it a star on GitHub!
