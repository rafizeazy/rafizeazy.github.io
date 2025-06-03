import React, { useState, useEffect, useRef } from "react";
import {
  Home,
  User,
  Briefcase,
  Code,
  Mail,
  Linkedin,
  Github,
  Menu,
  X,
  Send,
  CalendarDays,
  Building,
  Award,
  CheckCircle,
  ExternalLink,
  ArrowDown,
} from "lucide-react";

// Helper component for section titles
const SectionTitle = ({ children, className = "" }) => (
  <h2
    className={`text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center ${className}`}
  >
    {children}
  </h2>
);

// Custom Hook for Intersection Observer
const useIntersectionObserver = (options) => {
  const [entry, setEntry] = useState(null);
  const [node, setNode] = useState(null);

  const observer = useRef(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new window.IntersectionObserver(
      ([entry]) => setEntry(entry),
      options
    );

    const { current: currentObserver } = observer;

    if (node) currentObserver.observe(node);

    return () => currentObserver.disconnect();
  }, [node, options]);

  return [setNode, entry];
};

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: "#home", text: "Home" },
    { href: "#about", text: "About Me" },
    { href: "#experience", text: "Experience" },
    { href: "#projects", text: "Projects" },
    { href: "#contact", text: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`p-4 fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a
          href="#home"
          className={`text-2xl font-bold transition-colors ${
            isScrolled
              ? "text-sky-600 hover:text-sky-500"
              : "text-white hover:text-sky-300"
          }`}
        >
          rafizerzy
          <span className="text-sky-500">.dev</span>
        </a>
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`flex items-center space-x-2 transition-colors ${
                isScrolled
                  ? "text-slate-700 hover:text-sky-600"
                  : "text-gray-200 hover:text-white"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {/* Icons can be re-added here if desired, e.g., link.icon */}
              <span>{link.text}</span>
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`focus:outline-none transition-colors ${
              isScrolled ? "text-slate-700" : "text-white"
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden absolute top-full left-0 right-0 shadow-lg py-2 ${
            isScrolled ? "bg-white" : "bg-sky-700"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`flex items-center space-x-2 px-4 py-3 transition-colors ${
                isScrolled
                  ? "text-slate-700 hover:bg-sky-50"
                  : "text-white hover:bg-sky-600"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {/* Icons can be re-added here */}
              <span>{link.text}</span>
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

// Animated Section Wrapper
const AnimatedSection = ({ children, id, className = "" }) => {
  const [setNode, entry] = useIntersectionObserver({ threshold: 0.1 });
  const isVisible = entry?.isIntersecting;

  return (
    <section
      ref={setNode}
      id={id}
      className={`${className} transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </section>
  );
};

// Home Section Component
const HomeSection = () => (
  <section
    id="home"
    className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-600 to-sky-800 text-white p-6 pt-24 sm:pt-20 relative"
  >
    <div className="text-center max-w-3xl mx-auto">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-light mb-3">
        Hi, I'm <span className="font-bold">Rafi Imanullah</span>
      </h1>
      <p className="text-lg sm:text-xl text-sky-100 mb-10 leading-relaxed">
        An IT Enthusiast who passionate about designing and developing
        user-focused digital experiences that are both functional and visually
        engaging.
      </p>
      <div className="flex justify-center space-x-6 mb-12">
        <a
          href="https://github.com/rafizeazy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-200 hover:text-white transition-colors"
        >
          <Github size={28} />
        </a>
        <a
          href="https://linkedin.com/in/rafizerzy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-200 hover:text-white transition-colors"
        >
          <Linkedin size={28} />
        </a>
        <a
          href="mailto:rafiimanullah@gmail.com"
          className="text-sky-200 hover:text-white transition-colors"
        >
          <Send size={28} />
        </a>
      </div>
      <a
        href="#projects"
        className="bg-white hover:bg-sky-50 text-sky-600 font-semibold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 shadow-md inline-flex items-center space-x-2"
      >
        <span>Show Projects</span>
        <ExternalLink size={20} />
      </a>
    </div>
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
      <a href="#about" aria-label="Scroll to about section">
        <ArrowDown
          size={32}
          className="text-sky-300 hover:text-white transition-colors"
        />
      </a>
    </div>
  </section>
);

// About & Skills Section Component
const AboutSection = () => {
  const professionalSkills = ["JavaScript", "PHP", "Java", "HTML/CSS", "MySQL"];
  const softSkills = [
    "Problem Solving",
    "Teamwork",
    "Adaptability",
    "Creativity",
  ];

  return (
    <AnimatedSection
      id="about"
      className="py-16 sm:py-24 bg-white text-slate-700"
    >
      <div className="container mx-auto px-6">
        <SectionTitle className="text-sky-600">About Me</SectionTitle>
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg text-slate-600 max-w-none text-justify mb-12">
            <p>
              I am an Informatics Engineering student at Horizon University
              Indonesia since 2022 with a strong foundation in programming and
              web development. I have a keen interest in technology and eager to
              gain hands-on experience in real-world projects. Known for being a
              quick learner, adaptable, and committed to continuous improvement
              in both technical and analytical skills. I am always enthusiastic
              about learning new things and collaborating in teams to create
              innovative digital products that make a positive impact.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-sky-500">
                Professional Skills:
              </h3>
              <div className="flex flex-wrap gap-3">
                {professionalSkills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-sky-500 text-white px-4 py-2 rounded-md text-sm font-medium shadow"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-sky-500">
                Soft Skills:
              </h3>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-sky-400 text-white px-4 py-2 rounded-md text-sm font-medium shadow"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

// Experience Section Component
const ExperienceSection = () => {
  const experiences = [
    {
      icon: <Building size={18} />,
      role: "Developer",
      company: "LuckyNetwork SEA",
      duration: "Feb 2023 - Jan 2025",
      description: [
        "Successfully lead LuckyNetwork development team, consisting of plugin developers, server setup specialists, and builders.",
        "Developed and maintained multiple Minecraft server plugins, including LuckyNetwork custom plugins for various game modes.",
        "Implemented new features and improvements to existing plugins, enhancing user experience and gameplay.",
        "Played a key role in the development of LuckyNetwork LuckyBedwars1058 plugin, which pushed LuckyNetwork player count to 1800+ concurrent players, making it the largest server in Southeast Asia.",
      ],
      technologies: [
        "Java",
        "Gradle",
        "Maven",
        "Bukkit API",
        "Spigot API",
        "Paper API",
      ],
    },
    {
      icon: <Award size={18} />,
      role: "Administrator",
      company: "Luckynetwork SEA",
      duration: "Aug 2021 - Feb 2023",
      description: [
        "Successfully enforced LuckyNetwork rule and maintained LuckyNetwork community.",
        "Improved and contributed in LuckyNetwork KitBattle server, which gets around 60 concurrent players.",
        "Successfully transformed a script gamemode called ThePit into a Minecraft plugin written in Java.",
      ],
      technologies: ["Java", "Maven", "Spigot API"],
    },
    {
      icon: <CheckCircle size={18} />,
      role: "Moderator",
      company: "Luckynetwork SEA",
      duration: "Feb 2021 - Aug 2019",
      description: [
        "Minecraft Server Moderator that is responsible in maintaining a safe and fun environment for the players. Enforce server rules, issue warnings, mutes, kicks, and bans when necessary.",
      ],
      technologies: ["Java"],
    },
    {
      icon: <CheckCircle size={18} />,
      role: "Java Developer",
      company: "Blocky, LLC",
      duration: "Sep 2021 - Jan 2022",
      description: [
        "Developed and maintained Minecraft server plugins and mods.",
        "Collaborated with designers to implement new features and improve user experience.",
      ],
      technologies: ["Java"],
    },
  ];

  return (
    <AnimatedSection
      id="experience"
      className="py-16 sm:py-24 bg-sky-50 text-slate-700"
    >
      <div className="container mx-auto px-6">
        <SectionTitle className="text-sky-600">Experience</SectionTitle>
        <div className="relative pl-8 sm:pl-12">
          <div className="absolute left-4 sm:left-6 top-0 h-full w-1 bg-sky-300 transform -translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 relative">
              <div className="absolute left-4 sm:left-6 top-1 w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center ring-4 ring-sky-50 text-white">
                {exp.icon || <Briefcase size={16} />}
              </div>

              <div className="ml-10 sm:ml-12 p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl sm:text-2xl font-semibold text-sky-600 mb-1">
                  {exp.role} -{" "}
                  <span className="text-lg sm:text-xl text-sky-500">
                    {exp.company}
                  </span>
                </h3>
                <p className="text-sm text-slate-500 mb-3 flex items-center">
                  <CalendarDays size={14} className="mr-2 text-slate-400" />
                  {exp.duration}
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-1 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                {exp.technologies && exp.technologies.length > 0 && (
                  <div>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-sky-100 text-sky-700 px-3 py-1 text-xs rounded-md shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

// Projects Section Component
const ProjectsSection = () => {
  const projectsData = [
    {
      category: "Horizon University",
      year: "2024",
      title: "Edulify Website",
      description:
        "A educational learning platform that provides a comprehensive solution for students and educators",
      technologies: ["CodeIgniter4", "MySQL", "JavaScript", "Tailwind CSS"],
      imageUrl: "images/edulify.png",
      repoLink: "https://github.com/rafizeazy/edulify",
    },
    {
      category: "Horizon University",
      year: "2024",
      title: "SIBAS Website",
      description:
        "Website for managing trash reports for Dinas Lingkungan Hidup Kota Karawang. Allows users to report trash issues and track their resolution.",
      technologies: ["PHP", "MySQL", "JavaScript"],
      imageUrl: "images/sibas.png",
      repoLink: "https://github.com/rafizeazy/sibasv2",
    },
    {
      category: "Horizon University",
      year: "2024",
      title: "HorizonDesk Apps",
      description:
        "Ticketing application for managing student and lecturer requests.",
      technologies: ["Firebase", "Dart", "Flutter"],
      imageUrl: "images/horizondesk.png",
      repoLink: "https://github.com/rafizeazy/horizondesk",
    },
    {
      category: "Blocky, LLC",
      year: "2021",
      title: "BlockyCore",
      description:
        "Minecraft server core plugin that provides essential features for server management, player interactions, and game modes.",
      technologies: ["Java", "MySQL"],
      imageUrl: "images/blockycore.png",
    },
    {
      category: "LuckyNetwork SEA",
      year: "2023",
      title: "Atreus",
      description:
        "Minecraft server core plugin that utilizes the micro-service architecture and gRPC to be as performant and scaleable as possible.",
      technologies: ["Java", "MySQL"],
      imageUrl: "images/LuckyCore.png",
    },
    {
      category: "LuckyNetwork SEA",
      year: "2023",
      title: "LuckyEssentials",
      description:
        "Lightweight yet feature-rich plugin designed to improve the gameplay experience and moderation experience for Minecraft servers.",
      technologies: ["Java"],
      imageUrl: "images/luckyessential.png",
    },
  ];

  return (
    <AnimatedSection
      id="projects"
      className="py-16 sm:py-24 bg-white text-slate-700"
    >
      <div className="container mx-auto px-6">
        <SectionTitle className="text-sky-600">Projects</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="rounded-lg shadow-lg overflow-hidden group transform transition-all duration-300 hover:scale-105 relative h-72 sm:h-80 md:h-96 bg-sky-50"
            >
              {/* Image Container with padding on all sides for whitespace */}
              <div className="absolute inset-0 w-full h-full p-4 sm:p-6 flex items-center justify-center">
                {" "}
                {/* Added p-4 sm:p-6 for all-around padding */}
                <img
                  src={project.imageUrl}
                  alt={`[Gambar Proyek ${project.title}]`}
                  className="max-w-full max-h-full object-contain transition-opacity duration-300 group-hover:opacity-80"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/600x400/E0F2FE/0EA5E9?text=Image+Error";
                  }}
                />
              </div>

              {/* Subtle Overlay for Text Readability - Applied to the entire card */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300"></div>

              {/* Content Layer (Text and Hover Icon) */}
              <div className="absolute inset-0 p-3 sm:p-4 flex flex-col justify-between">
                {/* Top part of overlay: Category and Year */}
                <div className="flex justify-between items-start z-10">
                  <span className="text-xs text-white font-semibold bg-black/50 px-2 py-1 rounded shadow">
                    {project.category}
                  </span>
                  <span className="text-xs text-white bg-black/50 px-2 py-1 rounded shadow">
                    {project.year}
                  </span>
                </div>

                {/* GitHub Icon Overlay - Appears on hover in the center */}
                {project.repoLink && project.repoLink !== "#" && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                      className="p-3 bg-black/60 rounded-full hover:bg-black/80 transition-colors"
                    >
                      <Github size={36} className="text-white" />
                    </a>
                  </div>
                )}

                {/* Bottom part of overlay: Title, Description, Technologies */}
                <div className="space-y-1 sm:space-y-2 z-10">
                  <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-sky-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-200 text-[10px] sm:text-xs leading-snug max-h-12 sm:max-h-14 overflow-y-auto">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="bg-sky-600/80 text-white px-1.5 py-0.5 text-[9px] sm:text-[10px] rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

// Contact Section Component
const ContactSection = () => {
  const contactMethods = [
    {
      name: "GitHub",
      icon: (
        <Github
          size={40}
          className="text-sky-500 group-hover:text-sky-600 transition-colors"
        />
      ),
      link: "https://github.com/rafizeazy",
      cta: "View Profile",
      bgColor: "bg-white hover:bg-sky-50",
      textColor: "text-slate-700",
      ctaColor: "text-sky-600 group-hover:text-sky-500",
    },
    {
      name: "LinkedIn",
      icon: (
        <Linkedin
          size={40}
          className="text-sky-500 group-hover:text-sky-600 transition-colors"
        />
      ),
      link: "https://linkedin.com/in/rafizerzy",
      cta: "Connect with Me",
      bgColor: "bg-white hover:bg-sky-50",
      textColor: "text-slate-700",
      ctaColor: "text-sky-600 group-hover:text-sky-500",
    },
    {
      name: "Email",
      icon: (
        <Send
          size={40}
          className="text-sky-500 group-hover:text-sky-600 transition-colors"
        />
      ),
      link: "mailto:rafiimanullah@gmail.com",
      cta: "Send an Email",
      bgColor: "bg-white hover:bg-sky-50",
      textColor: "text-slate-700",
      ctaColor: "text-sky-600 group-hover:text-sky-500",
    },
  ];

  return (
    <AnimatedSection
      id="contact"
      className="py-16 sm:py-24 bg-sky-50 text-slate-700"
    >
      <div className="container mx-auto px-6">
        <SectionTitle className="text-sky-600">Get in Touch</SectionTitle>
        <p className="text-center text-slate-600 mb-12 max-w-xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions. Feel free to reach out
          through any of the platforms below.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {contactMethods.map((method) => (
            <a
              key={method.name}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-8 rounded-lg shadow-lg flex flex-col items-center text-center transition-all duration-300 transform hover:scale-105 ${method.bgColor}`}
            >
              <div className="mb-6 p-3 bg-sky-100 rounded-full inline-block">
                {method.icon}
              </div>
              <h3 className={`text-2xl font-semibold mb-2 ${method.textColor}`}>
                {method.name}
              </h3>
              <p className={`${method.ctaColor} transition-colors`}>
                {method.cta}
              </p>
            </a>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

// Main App Component
export default function App() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const navbarHeight = document.querySelector("nav")?.offsetHeight || 0;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      });
    });
  }, []);

  return (
    <div className="font-sans antialiased bg-white">
      <Navbar />
      <main>
        <HomeSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}
