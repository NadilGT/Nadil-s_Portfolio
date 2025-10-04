import React, { useEffect, useState, useRef } from 'react';
import ContactForm from './ContactForm';
import profileImage from './profile_image.jpg';
import {
  Smartphone,
  Code,
  Layers,
  Github,
  Linkedin,
  Mail,
  Twitter,
  User,
  Zap,
  Monitor,
  Database,
  BookOpen,
  ArrowRight,
  ExternalLink,
  Menu,
  X,
  Award,
  Briefcase,
  GraduationCap
} from 'lucide-react';



function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({
    home: false,
    about: false,
    skills: false,
    projects: false,
    education: false,
    contact: false
  });
  const [showAllProjects, setShowAllProjects] = useState(false);

  const sectionsRef = useRef<Record<string, HTMLElement | null>>({
    home: null,
    about: null,
    skills: null,
    projects: null,
    education: null,
    contact: null
  });

  // Handle initial load animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
      setVisibleSections(prev => ({ ...prev, home: true }));
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Update scroll progress for progress bar
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setScrollProgress(scrollPercent);

      // Check which section is in view
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];

      // Update active section based on scroll position
      for (const section of sections) {
        const element = sectionsRef.current[section];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Update visible sections for animations
      const newVisibleSections = { ...visibleSections };
      for (const section of sections) {
        const element = sectionsRef.current[section];
        if (element) {
          const rect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          if (rect.top < windowHeight * 0.8) {
            newVisibleSections[section] = true;
          }
        }
      }
      setVisibleSections(newVisibleSections);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial values

    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleSections]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  // Skills data
  const skills = [
    { name: "Flutter", icon: <Smartphone className="h-6 w-6" />, level: 85 },
    { name: "Kotlin", icon: <Code className="h-6 w-6" />, level: 80 },
    { name: "Go", icon: <Layers className="h-6 w-6" />, level: 75 },
    { name: "Angular", icon: <Database className="h-6 w-6" />, level: 70 },
    { name: "Springboot", icon: <Monitor className="h-6 w-6" />, level: 65 },
    { name: "Java", icon: <Zap className="h-6 w-6" />, level: 85 }
  ];

  // Projects data
  const mainProjects = [
    {
      title: "Smart Pregnancy Belly Wrap",
      description: "A social networking app for university students to connect, share resources, and organize study groups.",
      image: "https://i5.walmartimages.com/seo/Belly-Bands-for-Pregnant-Women-Pregnancy-Belly-Support-Band-Belt-Pregnancy-Support-Belt-For-Back-Pelvic-Hip-Pain-Belly-Band-Back-Support_3ec63184-67c9-4b1d-8a34-547b93fe2676.bb4d47769d94634bcd09e4a209b9f1da.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      tags: ["Flutter", "Firebase", "React"],
      link: "https://github.com/chalindu19/NOVALITH",
      type: "Group Project"
    },
    {
      title: "Dice Game App",
      description: "A productivity app that helps students manage assignments, track study hours, and set goals.",
      image: "https://eventfinca-mallorca.com/wp-content/uploads/2023/10/Discover-the-Ultimate-Dice-Game-App-for-Endless-Entertainment.jpg",
      tags: ["Kotlin", "Room Database", "Productivity"],
      link: "https://github.com/NadilGT/Mobile_CW_02",
      type: "Personal Project"
    },
    {
      title: "Expenze",
      description: "An app that scans product barcodes to provide sustainability information and eco-friendly alternatives.",
      image: "https://www.appstudio.ca/blog/wp-content/uploads/2022/04/Pro-Suggestions-for-the-Best-Expense-Tracker-Apps-for-Startups-in-2022.jpg",
      tags: ["Flutter", "UI/UX", "Sustainability"],
      link: "https://github.com/NadilGT/Expenz",
      type: "Personal Project"
    }
  ];

  const moreProjects = [
    {
      title: "Spotify-Clone",
      description: "Built a cross-platform music streaming app with user authentication, real-time database, cloud storage,and playlist management using Flutter and Firebase.",
      image: "https://img.youtube.com/vi/x4Cm5WhW1M4/maxresdefault.jpg",
      tags: ["Flutter", "Firebase", "Clean Architecture"],
      link: "https://github.com/NadilGT/spotify-clone",
      type: "Personal Project"
    },
    {
      title: "Skin-firts",
      description: " Developed a cross-platform healthcare app with clean architecture, enabling user authentication, doctor search, appointment booking, and real-time schedule management. Built scalable backend APIs in Gowith secure data handling and integrated with Flutter frontend for a seamless user experience.",
      image: "https://images.ui8.net/uploads/shot1_1714061700628.png",
      tags: ["Flutter", "Firebase", "Go"],
      link: "https://github.com/NadilGT/skin-firts",
      type: "Personal Project"
    },
    {
      title: " Real-Time Ticketing System",
      description: "Design and developed a real-time event ticketing system using Java for the backend (CLI) and Angular with Spring Boot for the GUI.",
      image: "https://www.smartsight.in/wp-content/uploads/2020/11/helpdesk-ticketing-system-02.jpg",
      tags: ["Angular", "Springboot", "Rest-API"],
      link: "https://github.com/NadilGT/oop_backend_new",
      type: "Personal Project"
    }
  ];

  const projects = showAllProjects ? [...mainProjects, ...moreProjects] : mainProjects;

  // Education data
  const education = [
    {
      degree: "B.Eng (Hons) Software Engineering (Undergraduate)",
      university: " Informatics Institute of Technology",
      period: "2023 - Present (Expected graduation: 2027)",
      description: "Focusing on Mobile Application Development, Software Engineering, and Human-Computer Interaction. Current GPA: 3.8/4.0",
      courses: ["Mobile App Development", "Data Structures & Algorithms", "UI/UX Design", "Database Systems"]
    },
    {
      degree: " G.C.E. Advance Level (Physical science)",
      university: "Rajapaksha central College, Weeraketiya",
      period: "Summer 2022",
      description: " Physical Science Stream - B, C, S",
      courses: ["Pysics", "Combine Mathematics", "ICT"]
    }
  ];

  // Achievements data
  const achievements = [
    {
      title: "1st Place, Cutting Edge",
      description: "Awarded for developing an innovative maternal health monitoring solution (Smart Pregnancy Belly Wrap – Novalith) integrating IoT sensors and mobile technology at the Cutting Edge University Hackathon."
    },
    {
      title: "3rd Place, CodeSprint X",
      description: "Awarded for developing an innovative maternal health monitoring solution (Smart Pregnancy Belly Wrap – Novalith) integrating IoT sensors and mobile technology at the Cutting Edge University Hackathon."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white font-sans">
      {/* Progress bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 z-50 transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress * 100}%` }}
      ></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-gray-900/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Smartphone className="h-8 w-8 text-cyan-500" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400">
              Nadil Dinsara
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Projects' },
              { id: 'education', label: 'Education' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-all duration-300 hover:text-cyan-400 ${activeSection === item.id ? 'text-cyan-400 font-medium' : ''
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white p-2" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 py-4 absolute w-full">
            <div className="container mx-auto px-6 flex flex-col space-y-4">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'skills', label: 'Skills' },
                { id: 'projects', label: 'Projects' },
                { id: 'education', label: 'Education' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-all duration-300 hover:text-cyan-400 text-left ${activeSection === item.id ? 'text-cyan-400 font-medium' : ''
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        ref={el => sectionsRef.current.home = el}
        className="min-h-screen flex items-center justify-center pt-20"
      >
        <div className="container mx-auto px-6 py-12 md:py-24">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400">
                    Nadil Dinsara
                  </span>
                  <br />
                  <span>Mobile & Backend Developer</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-xl">
                  Passionate about creating innovative mobile & backend experiences. Seeking internship opportunities.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full font-medium hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
                  >
                    View My Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="px-8 py-3 border border-cyan-500 rounded-full font-medium hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center"
                  >
                    Contact Me
                  </button>
                </div>
                <div className="flex space-x-4 mt-8">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    <Github className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    <Twitter className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className={`relative transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="relative z-10 bg-gradient-to-br from-cyan-900/80 to-blue-900/80 backdrop-blur-sm rounded-2xl p-1 shadow-xl">
                  <div className="bg-gray-900 rounded-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000"
                      alt="Mobile App Development"
                      className="w-full h-auto rounded-t-xl"
                    />
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></div>
                        <span className="text-cyan-400 text-sm">Software Engineering Student</span>
                      </div>
                      <div className="space-y-3">
                        <div className="h-2 bg-gray-700 rounded-full w-3/4 animate-pulse"></div>
                        <div className="h-2 bg-gray-700 rounded-full animate-pulse"></div>
                        <div className="h-2 bg-gray-700 rounded-full w-5/6 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-16">
            <button
              onClick={() => scrollToSection('about')}
              className="animate-bounce flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-300"
            >
              <span className="mb-2">Scroll Down</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        ref={el => sectionsRef.current.about = el}
        className="py-20 bg-gray-900/50"
      >
        <div className="container mx-auto px-6">
          <div className={`transition-all duration-700 ${visibleSections.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/3">
                <div className="relative">
                  <div className="bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl p-1">
                    <img
                      src={profileImage}
                      alt="Nadil Dinsara"
                      className="rounded-2xl w-full h-auto"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl -z-10"></div>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
                  Software Engineering Student (Mobile & Backend Developer)
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  I'm a passionate Software Engineering student with a focus on mobile application development.
                  My journey in programming began during my freshman year, and I've since developed a strong
                  foundation in Flutter and Kotlin.
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  I'm particularly interested in creating applications that solve real-world problems and enhance
                  user experiences. My academic projects and personal initiatives have allowed me to explore various
                  aspects of mobile development, from UI design to backend integration.
                </p>
                <div className="bg-gray-800/50 p-6 rounded-xl mb-6">
                  <h4 className="text-lg font-semibold mb-3 flex items-center">
                    <Award className="h-5 w-5 mr-2 text-cyan-400" /> Achievements
                  </h4>
                  <ul className="space-y-2">
                    {achievements.map((achievement, index) => (
                      <li key={index} className="flex flex-col items-start">
                        <div className="flex items-center">
                          <span className="text-cyan-400 mr-2">•</span>
                          <span className="font-semibold">{achievement.title}</span>
                        </div>
                        <span className="text-gray-400 text-sm ml-5">{achievement.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href='/Nadil_Dinsara_Resume.pdf'
                  download
                  className="group relative inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium text-sm shadow-md transition-all duration-300 ease-in-out hover:from-cyan-500 hover:to-blue-500 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400"
                >
                  <span className="relative z-10 flex items-center">
                    Download Resume<ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 blur-md transition-all duration-300 group-hover:scale-105"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        ref={el => sectionsRef.current.skills = el}
        className="py-20"
      >
        <div className="container mx-auto px-6">
          <div className={`transition-all duration-700 ${visibleSections.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-4">
                Technical skills I've developed through coursework, projects, and self-learning.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gray-700/50 rounded-lg inline-block group-hover:bg-gray-700 transition-colors duration-300 text-cyan-400">
                      {skill.icon}
                    </div>
                    <h3 className="text-xl font-semibold ml-4">{skill.name}</h3>
                  </div>
                  <div className="w-full bg-gray-700/30 rounded-full h-2.5 mb-2">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: visibleSections.skills ? `${skill.level}%` : '0%' }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "JavaScript", "TypeScript", "Python", "Git",
                "Docker", "MongoDB", "RESTful APIs", "CI/CD"
              ].map((tech, index) => (
                <div
                  key={index}
                  className="bg-gray-800/30 rounded-lg p-3 text-center hover:bg-gray-800/50 transition-all duration-300"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        ref={el => sectionsRef.current.projects = el}
        className="py-20 bg-gray-900/50"
      >
        <div className="container mx-auto px-6">
          <div className={`transition-all duration-700 ${visibleSections.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-4">
                A selection of my academic and personal mobile development projects.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-500 group transform hover:-translate-y-2`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                    opacity: visibleSections.projects ? 1 : 0,
                    transform: visibleSections.projects ? 'translateY(0)' : 'translateY(20px)'
                  }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-3 right-3 bg-gray-900/80 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded-full">
                      {project.type}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs bg-gray-700/50 text-cyan-300 px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                    >
                      View Project <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              {!showAllProjects && (
                <button
                  className="px-8 py-3 border border-cyan-500 rounded-full font-medium hover:bg-cyan-500/10 transition-all duration-300"
                  onClick={() => setShowAllProjects(true)}
                >
                  View All Projects
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        ref={el => sectionsRef.current.education = el}
        className="py-20"
      >
        <div className="container mx-auto px-6">
          <div className={`transition-all duration-700 ${visibleSections.education ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-4">
                My academic background and relevant coursework.
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-700 transform md:translate-x-px"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                    style={{
                      transitionDelay: `${index * 150}ms`,
                      opacity: visibleSections.education ? 1 : 0,
                      transform: visibleSections.education ? 'translateY(0)' : 'translateY(20px)',
                      transition: 'opacity 0.5s ease, transform 0.5s ease'
                    }}
                  >
                    <div className="md:w-1/2 pb-8 md:pb-0 md:px-8">
                      <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 h-full">
                        <div className="flex items-center mb-2">
                          <GraduationCap className="h-5 w-5 text-cyan-400 mr-2" />
                          <div className="text-cyan-400 font-bold text-lg">{edu.degree}</div>
                        </div>
                        <div className="text-white mb-2">{edu.university}</div>
                        <div className="text-gray-400 text-sm mb-4">{edu.period}</div>
                        <p className="text-gray-300 mb-4">{edu.description}</p>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-300 mb-2">Relevant Coursework:</h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.courses.map((course, courseIndex) => (
                              <span
                                key={courseIndex}
                                className="text-xs bg-gray-700/50 text-cyan-300 px-2 py-1 rounded-full"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-0 md:left-1/2 top-6 w-6 h-6 rounded-full bg-cyan-500 transform -translate-x-1/2 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-white"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Internship Goals */}
            <div className="mt-20 bg-gray-800/30 backdrop-blur-sm rounded-xl p-8">
              <div className="flex items-center mb-6">
                <Briefcase className="h-6 w-6 text-cyan-400 mr-3" />
                <h3 className="text-2xl font-bold">Internship Goals</h3>
              </div>
              <p className="text-gray-300 mb-6">
                I'm actively seeking internship opportunities in mobile & backend development to apply my skills in a professional environment,
                learn industry best practices, and contribute to meaningful projects. My ideal internship would allow me to:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-700/30 rounded-lg p-5 hover:bg-gray-700/50 transition-all duration-300">
                  <h4 className="font-semibold mb-2 text-cyan-300">Gain Real-World Experience</h4>
                  <p className="text-gray-300 text-sm">Apply academic knowledge to solve practical problems in a professional setting.</p>
                </div>
                <div className="bg-gray-700/30 rounded-lg p-5 hover:bg-gray-700/50 transition-all duration-300">
                  <h4 className="font-semibold mb-2 text-cyan-300">Collaborate with Teams</h4>
                  <p className="text-gray-300 text-sm">Work alongside experienced developers and learn collaborative development practices.</p>
                </div>
                <div className="bg-gray-700/30 rounded-lg p-5 hover:bg-gray-700/50 transition-all duration-300">
                  <h4 className="font-semibold mb-2 text-cyan-300">Expand Technical Skills</h4>
                  <p className="text-gray-300 text-sm">Deepen my knowledge of mobile frameworks and learn new technologies.</p>
                </div>
              </div>
            </div>

            {/* Work Experience */}
            <div className="mt-20 bg-gray-800/30 backdrop-blur-sm rounded-xl p-8">
              <div className="flex items-center mb-6">
                <Briefcase className="h-6 w-6 text-cyan-400 mr-3" />
                <h3 className="text-2xl font-bold">Work Experience</h3>
              </div>
              <div className="mb-4">
                <div className="text-lg font-semibold text-cyan-300">Software Engineering Intern</div>
                <div className="text-gray-300">Evolza - Colombo, Sri Lanka</div>
                <div className="text-gray-400 text-sm mb-2">May 2025 - Present</div>
              </div>
              <ul className="list-disc ml-6 text-gray-300 space-y-2">
                <li>
                  Developed a comprehensive service management application using Kotlin Jetpack Compose, implementing multiple activities with Intents for smooth navigation and an intuitive user experience.
                </li>
                <li>
                  Integrated Firebase Messaging for real-time notifications, Go backend for fast and scalable APIs, Google Maps for location-based services, and Auth0 for secure authentication.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={el => sectionsRef.current.contact = el}
        className="py-20 bg-gray-900/50"
      >
        <div className="container mx-auto px-6">
          <div className={`transition-all duration-700 ${visibleSections.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-4">
                Interested in offering an internship opportunity or discussing a project? I'd love to hear from you!
              </p>
            </div>

            <div className="max-w-4xl mx-auto bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl">
              <div className="p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="space-y-4">            
                      <section id="contact" className="max-w-xl mx-auto px-4 py-10">
                        <h2 className="text-2xl font-semibold text-white mb-6">Contact Me</h2>
                        <ContactForm/>
                      </section>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="bg-gray-700/30 rounded-xl p-6 mb-6">
                      <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                      <div className="space-y-4 text-gray-300">
                        <div className="flex items-center">
                          <Mail className="h-5 w-5 text-cyan-400 mr-3" />
                          <span>rccnadildinsara@gmail.com</span>
                        </div>
                        <div className="flex items-center">
                          <Smartphone className="h-5 w-5 text-cyan-400 mr-3" />
                          <span>+94704583455</span>
                        </div>
                        <div className="flex items-center">
                          <User className="h-5 w-5 text-cyan-400 mr-3" />
                          <span>Informatics Institute of Technology</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-700/30 rounded-xl p-6">
                      <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
                      <div className="flex space-x-4">
                        <a href="https://github.com/NadilGT" className="p-2 bg-gray-800/50 rounded-full text-cyan-400 hover:bg-cyan-500/20 transition-colors duration-300">
                          <Github className="h-5 w-5" />
                        </a>
                        <a href="https://www.linkedin.com/in/nadil-dinsara/" className="p-2 bg-gray-800/50 rounded-full text-cyan-400 hover:bg-cyan-500/20 transition-colors duration-300">
                          <Linkedin className="h-5 w-5" />
                        </a>
                        <a href="mailto:rccnadildinsara@gmail.com" className="p-2 bg-gray-800/50 rounded-full text-cyan-400 hover:bg-cyan-500/20 transition-colors duration-300">
                          <Mail className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Smartphone className="h-6 w-6 text-cyan-500" />
              <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Nadil Dinsara
              </span>
            </div>
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Nadil Dinsara.All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;