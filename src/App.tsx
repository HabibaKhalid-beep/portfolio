import { useEffect, useRef, useState } from 'react'
import './App.css'
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  ExternalLink, 
  Code2, 
  Palette, 
  Terminal, 
  Cpu,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Send
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'skills', 'contact']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass py-3' : 'py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl"> Habiba Khalid Portfolio</span>
          </div>
          
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'text-primary bg-primary/10' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="https://github.com/HabibaKhalid-beep" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-white/5 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/habiba-khalid-017456280/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-white/5 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="home" 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-radial opacity-50" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-muted-foreground">Available for new projects</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up">
            <span className="block">Creative</span>
            <span className="text-gradient">Developer</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            I craft beautiful digital experiences with modern technologies. 
            Specializing in frontend development, UI/UX design, and creative coding.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-xl glow-sm transition-all hover:scale-105"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/20 hover:bg-white/5 px-8 py-6 text-lg rounded-xl"
              onClick={() => scrollToSection('contact')}
            >
              Get in Touch
            </Button>
          </div>

          <div className="mt-20 flex items-center justify-center gap-8 text-muted-foreground animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-2">
              <Code2 className="w-5 h-5" />
              <span className="text-sm">React</span>
            </div>
            <div className="flex items-center gap-2">
              <Terminal className="w-5 h-5" />
              <span className="text-sm">TypeScript</span>
            </div>
            <div className="flex items-center gap-2">
              <Palette className="w-5 h-5" />
              <span className="text-sm">Tailwind</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu className="w-5 h-5" />
              <span className="text-sm">Node.js</span>
            </div>
            <div className="flex items-center gap-2">
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.642 5.43a.364.364 0 0 1 .014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 0 1-.188.326L9.93 23.949a.316.316 0 0 1-.066.027.29.29 0 0 1-.076.024.368.368 0 0 1-.186-.025L.534 18.755a.376.376 0 0 1-.188-.326V3.481a.367.367 0 0 1 .014-.1..." />
  </svg>
  <span className="text-sm">Laravel</span>
</div>
          </div>
        </div>

        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-0">
                About Me
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Passionate about creating <span className="text-gradient">meaningful</span> digital experiences
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                With over 2 years of experience in web development, I specialize in building 
                modern, responsive, and user-friendly applications. My journey started with 
                a curiosity for how things work on the web, which evolved into a deep passion 
                for creating beautiful and functional digital products.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                I believe in the power of clean code, thoughtful design, and continuous learning. 
                Every project is an opportunity to push boundaries and create something unique 
                that makes a real impact.
              </p>
              
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 rounded-xl glass">
                  <div className="text-3xl font-bold text-gradient mb-1">30+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center p-4 rounded-xl glass">
                  <div className="text-3xl font-bold text-gradient mb-1">2+</div>
                  <div className="text-sm text-muted-foreground">Years</div>
                </div>
                <div className="text-center p-4 rounded-xl glass">
                  <div className="text-3xl font-bold text-gradient mb-1">20+</div>
                  <div className="text-sm text-muted-foreground">Clients</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-2xl" />
              <div className="relative glass rounded-3xl p-8">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-secondary to-background flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-float">
                      <Code2 className="w-16 h-16 text-white" />
                    </div>
                    <p className="text-muted-foreground">Building the future, one line at a time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-0">
              Featured Work
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Selected <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A collection of projects that showcase my skills and passion for creating exceptional digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group relative glass rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:glow-sm"
              >
                <div className="aspect-video bg-gradient-to-br from-secondary to-background flex items-center justify-center p-8">
                  <div className="text-center">
                    <project.icon className="w-16 h-16 mx-auto mb-4 text-primary/60 group-hover:text-primary transition-colors" />
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.category}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-white/5 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="ghost" size="sm" className="flex-1 hover:bg-primary/10 hover:text-primary">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button variant="ghost" size="sm" className="flex-1 hover:bg-primary/10 hover:text-primary">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-0">
              Expertise
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Skills & <span className="text-gradient">Technologies</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive toolkit that enables me to bring ideas to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <div key={index} className="glass rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{skill.name}</span>
                      <div className="w-20 h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-0">
                Get in Touch
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Let&apos;s work <span className="text-gradient">together</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Have a project in mind? I&apos;d love to hear about it. Let&apos;s discuss how 
                we can bring your ideas to life.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="font-medium">habibahalid1123@gmail.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Twitter className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Twitter</div>
                    <div className="font-medium">@portfolio</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Linkedin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">LinkedIn</div>
                    <div className="font-medium">/https://www.linkedin.com/in/habiba-khalid-017456280/</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass rounded-2xl p-8">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:outline-none transition-colors"
                    placeholder="Project inquiry"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white py-6 rounded-xl glow-sm transition-all hover:scale-[1.02]"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold">Portfolio</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <button onClick={() => scrollToSection('home')} className="hover:text-foreground transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-foreground transition-colors">About</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-foreground transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-foreground transition-colors">Contact</button>
            </div>
            
            <div className="text-sm text-muted-foreground">
              © 2024 Portfolio. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Application',
    description: 'A modern e-commerce platform with real-time inventory, secure payments, and seamless user experience.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    icon: Code2,
  },
  {
    title: 'Task Management App',
    category: 'Productivity Tool',
    description: 'Collaborative task management application with real-time updates and team collaboration features.',
    tags: ['TypeScript', 'Firebase', 'Tailwind', 'PWA'],
    icon: Terminal,
  },
  {
    title: 'Design System',
    category: 'UI Library',
    description: 'Comprehensive design system with reusable components, documentation, and accessibility features.',
    tags: ['React', 'Storybook', 'Figma', 'CSS'],
    icon: Palette,
  },
  {
    title: 'AI Dashboard',
    category: 'Data Visualization',
    description: 'Interactive dashboard for AI model monitoring with real-time metrics and visualization.',
    tags: ['Python', 'D3.js', 'FastAPI', 'WebSocket'],
    icon: Cpu,
  },
  {
    title: 'Social Media App',
    category: 'Mobile First',
    description: 'Social networking platform with feed, stories, messaging, and notification features.',
    tags: ['React Native', 'GraphQL', 'AWS', 'Redis'],
    icon: Code2,
  },
  {
    title: 'Portfolio Generator',
    category: 'Developer Tool',
    description: 'CLI tool for generating beautiful portfolio websites from markdown files.',
    tags: ['Node.js', 'CLI', 'Markdown', 'GitHub API'],
    icon: Terminal,
  },
]

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'Tailwind CSS', level: 95 },
    ],
  },
  {
    title: 'Backend',
    icon: Terminal,
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 75 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MongoDB', level: 85 },
      { name: 'Laravel', level: 85 },
    ],
  },
  {
    title: 'Design',
    icon: Palette,
    skills: [
      { name: 'Figma', level: 90 },
      { name: 'UI/UX', level: 85 },
      { name: 'Motion', level: 75 },
      { name: 'Prototyping', level: 80 },
    ],
  },
  {
    title: 'DevOps',
    icon: Cpu,
    skills: [
      { name: 'Docker', level: 80 },
      { name: 'AWS', level: 75 },
      { name: 'CI/CD', level: 85 },
      { name: 'Vercel', level: 90 },
    ],
  },
]

export default App
