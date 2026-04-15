import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ExternalLink, Menu, X } from "lucide-react";
import ProfileImage from "./components/ProfileImage";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = [
    {
      title: "Digital Wallet Backend",
      desc: "Built a secure wallet backend with JWT authentication, transactions, and MongoDB integration.",
      tech: "Node.js, Express.js, MongoDB, JWT",
      github: "https://github.com/Choubey2691/-payFlow-wallet",
      live: "https://your-live-link.com",
    },
    {
      title: "Task Management API",
      desc: "Developed a task management API with authentication, CRUD operations, PostgreSQL and MongoDB.",
      tech: "Node.js, Express.js, PostgreSQL, MongoDB",
      github: "https://github.com/Choubey2691/task-management-api",
      live: "https://your-live-link.com",
    },
    {
      title: "Salary Prediction using Ensemble Learning",
      desc: "ML project to predict salaries using ensemble techniques and data preprocessing.",
      tech: "Python, Machine Learning",
      github: "https://github.com/Choubey2691/Salary-prediction-using-Ensemble-Learning",
      live: "https://your-live-link.com",
    },
  ];

  const skills = [
    "JavaScript",
    "Java",
    "Python",
    "C++",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Git",
    "GitHub",
    "Postman",
    "Render",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <h2>Ashish Chaturvedi</h2>

        <div className="desktop-menu">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="tel:+919504229671">Contact</a>
        </div>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          className="mobile-menu"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="hero">
          <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Hi, I'm Ashish Chaturvedi 👋
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Backend Developer | MERN Stack | API Builder
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <a href="#projects" className="btn">
            View Projects
          </a>
          <a href="/resume.pdf" className="btn btn-outline" download>
           📄 Download Resume
          </a>
        </motion.div>
      </section>

      {/* Profile */}
      <section id="profile" className="profile-section">
        <motion.div
          className="profile-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="profile-grid">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ProfileImage 
                src="/profile.jpg" 
                alt="Ashish Chaturvedi" 
                fullSrc="/full.jpg" 
              />
            </motion.div>

            <div className="profile-content">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="profile-name"
              >
                Ashish Chaturvedi
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="profile-role"
              >
                Backend Developer | MERN Stack
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="profile-bio"
              >
                Passionate B.Tech CSE student dedicated to backend development and scalable API design. I specialize in building secure, efficient applications using Node.js, Express.js, and MongoDB.
              </motion.p>

              <motion.div
                className="profile-contacts"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
              >
                <a
                  href="mailto:ashishchoubey047@gmail.com"
                  className="contact-link email-link"
                  rel="noopener noreferrer"
                >
                  <Mail size={22} />
                  <span>ashishchoubey047@gmail.com</span>
                </a>

                <a
                  href="tel:+919504229671"
                  className="contact-link phone-link"
                  rel="noopener noreferrer"
                >
                  <Phone size={22} />
                  <span>+91 9504229671</span>
                </a>

                <a
                  href="https://github.com/Choubey2691"
                  target="_blank"
                  className="contact-link github-link"
                  rel="noopener noreferrer"
                >
                  <Github size={22} />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/ashish-chaturvedi-86b9302a4"
                  target="_blank"
                  className="contact-link linkedin-link"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={22} />
                  <span>LinkedIn</span>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          I am a B.Tech CSE student passionate about backend development, APIs,
          and solving real-world problems. I enjoy building scalable
          applications using modern technologies like Node.js, Express.js, and
          MongoDB. I'm always eager to learn new technologies and best practices
          in software development.
        </motion.p>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>
        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="card"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        <motion.div
          className="project-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <small>{project.tech}</small>

              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github size={18} /> GitHub
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={18} /> Live
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.h2>
        <motion.div
          className="contact-links"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a href="mailto:ashishchoubey047@gmail.com" rel="noopener noreferrer">
            <Mail size={20} /> Email
          </a>
          <a
            href="https://github.com/Choubey2691"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={20} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ashish-chaturvedi-86b9302a4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={20} /> LinkedIn
          </a>
        </motion.div>
      </section>

    </div>
  );
}