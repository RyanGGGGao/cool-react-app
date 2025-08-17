import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Rocket, 
  Zap, 
  Star, 
  Code, 
  Palette, 
  Globe, 
  ArrowRight,
  Github,
  ExternalLink
} from 'lucide-react'

function App() {
  const [currentSection, setCurrentSection] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentSection((prev) => (prev + 1) % 3)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const features = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Built with Vite for instant hot reload and blazing fast builds"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Modern Stack",
      description: "React 18, Tailwind CSS, and Framer Motion for smooth animations"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Beautiful Design",
      description: "Glass morphism effects and gradient backgrounds"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description: "Well-structured components with modern React patterns"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Responsive",
      description: "Perfect on desktop, tablet, and mobile devices"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Deploy Ready",
      description: "Optimized for Vercel deployment with zero configuration"
    }
  ]

  const heroTexts = [
    "Create Amazing",
    "Build Beautiful",
    "Deploy Instantly"
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-slow"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-slow" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold gradient-text"
          >
            CoolApp
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex space-x-4"
          >
            <a href="#features" className="glass-effect px-4 py-2 rounded-lg hover:bg-white/20 transition-colors">
              Features
            </a>
            <a href="#about" className="glass-effect px-4 py-2 rounded-lg hover:bg-white/20 transition-colors">
              About
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="glass-effect px-4 py-2 rounded-lg hover:bg-white/20 transition-colors flex items-center gap-2">
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="gradient-text">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentSection}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block"
                  >
                    {heroTexts[currentSection]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <br />
              <span className="text-white">Web Apps</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              A stunning React application with modern animations, beautiful design, and seamless deployment to Vercel.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="glass-effect px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-2 group">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="glass-effect px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-2">
              <ExternalLink className="w-5 h-5" />
              View Demo
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Why Choose This App?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with the latest technologies and best practices for an exceptional developer and user experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect p-8 rounded-2xl card-hover"
              >
                <div className="text-purple-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
              Ready to Deploy?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              This React application is fully optimized for deployment on Vercel. 
              Just connect your GitHub repository and deploy with one click!
            </p>
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Deployment Steps
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">1</div>
                  <h4 className="font-semibold mb-2">Push to GitHub</h4>
                  <p className="text-gray-300 text-sm">Commit and push your code to a GitHub repository</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">2</div>
                  <h4 className="font-semibold mb-2">Connect to Vercel</h4>
                  <p className="text-gray-300 text-sm">Import your repository in Vercel dashboard</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">3</div>
                  <h4 className="font-semibold mb-2">Deploy</h4>
                  <p className="text-gray-300 text-sm">Click deploy and your app goes live instantly!</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 CoolApp. Built with ❤️ using React, Vite, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
