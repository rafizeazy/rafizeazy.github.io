import "./index.css";
import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Menu,
  X,
  ChevronDown,
  Instagram,
} from "lucide-react";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollY >= offsetTop - 100 &&
            scrollY < offsetTop + offsetHeight - 100
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "Edulify",
      description:
        "Full-stack web application with feature with crud and admin panel.",
      tech: ["CodeIgniter4", "TailwindCSS", "MySQL"],
      github: "https://github.com/rafizeazy/Edulify.git",
      image: "/images/edulify.png",
    },
    {
      title: "SIBAS",
      description:
        "Website for managing trash reports with real-time updates using JavaScript.",
      tech: ["PHP Native", "JavaScript", "MySQL"],
      github: "https://github.com/rafizeazy/sibasv2.git",
      image: "/images/sibas.png",
    },
    {
      title: "HorizonDesk",
      description:
        "Ticketing application for managing student and lecturer requests.",
      tech: ["Flutter", "Firebase", "Dart"],
      image: "/images/horizondesk.png",
      github: "https://github.com/rafizeazy/horizondesk.git",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-gray-900">Rafizerzy</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === item
                      ? "text-blue-600 font-medium"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["home", "about", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 capitalize w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-gray-900 mb-6">
              Hi, I'm{" "}
              <span className="font-bold text-blue-600">Rafi Imanullah</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Passionate about designing and developing user-focused digital
              experiences that are both functional and visually engaging.
            </p>
            <div className="flex justify-center space-x-6 mb-12">
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <Github size={24} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <Mail size={24} />
              </a>
            </div>
            <button
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
            >
              My Projects
              <ExternalLink className="ml-2" size={18} />
            </button>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={24} className="text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-8 md:mb-0"></div>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I am an Informatics Engineering student at Horizon University
                Indonesia since 2022 with a strong foundation in programming and
                web development. I have a keen interest in technology and eager
                to gain hands-on experience in real-world projects. Known for
                being a quick learner, adaptable, and committed to continuous
                improvement in both technical and analytical skills.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Programming Skills
                  </h4>
                  <p className="text-gray-600">
                    HTML/CSS/JS, Tailwind CSS, PHP, Java, Laravel, CodeIgniter4,
                    MySQL, PostgreSQL
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Soft Skills
                  </h4>
                  <p className="text-gray-600">
                    Time Management, Problem Solving, Critical Thinking,
                    Teamwork, Adaptability
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills in web
              development and design. Each project reflects my passion for
              creating user-friendly and efficient digital solutions.
              <br />
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-100 relative overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-blue-100 to-purple-100"></div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      <Github size={18} className="mr-1" />
                      Github
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto"></p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <a
                href="https://www.github.com/rafizeazy"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-200"
              >
                <Github className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  GitHub
                </h3>
              </a>
              <a
                href="https://www.linkedin.com/in/rafizerzy/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-200"
              >
                <Linkedin className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  LinkedIn
                </h3>
              </a>
              <a
                href="https://www.instagram.com/rafizerzy/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-200"
              >
                <Instagram className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Instagram
                </h3>
              </a>
              <a
                href="mailto:rafiimanullah@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-200"
              >
                <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Email
                </h3>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600">
              © 2025 Rafi Imanullah. Made with ❤️ by Rafizerzy
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}
// Add any additional styles or global styles here
// You can also use Tailwind CSS classes directly in the JSX
