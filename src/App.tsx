import "./App.css";
import { FaGithub, FaEnvelope, FaLinkedin, FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiMysql, SiDocker, SiPython, SiHtml5, SiCss3, SiTypescript, SiPostgresql, SiGithub, SiAmazonwebservices } from "react-icons/si";
import developerAnimation from "./assets/developer-animation.svg";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header-content">
          <div>
            <h1>@l3xnd3r-h@cch1</h1>
            <p>Senior Software Engineer | +10 years of experience</p>
          </div>
          <img
            src={developerAnimation}
            alt="Software development animation"
            className="header-animation"
          />
        </div>
      </header>
      <main className="main">
        <section className="skills">
          <h2>Technological Expertise</h2>
          <div className="skills-grid">
            <div className="skill-item">
              <FaReact className="skill-icon" />
              <p>React</p>
            </div>
            <div className="skill-item">
              <SiJavascript className="skill-icon" />
              <p>JavaScript</p>
            </div>
            <div className="skill-item">
              <FaNodeJs className="skill-icon" />
              <p>Node.js</p>
            </div>
            <div className="skill-item">
              <SiMysql className="skill-icon" />
              <p>MySQL</p>
            </div>
            <div className="skill-item">
              <SiDocker className="skill-icon" />
              <p>Docker</p>
            </div>
            <div className="skill-item">
              <SiPython className="skill-icon" />
              <p>Python</p>
            </div>
            <div className="skill-item">
              <SiHtml5 className="skill-icon" />
              <p>HTML5</p>
            </div>
            <div className="skill-item">
              <SiCss3 className="skill-icon" />
              <p>CSS3</p>
            </div>
            <div className="skill-item">
              <SiTypescript className="skill-icon" />
              <p>TypeScript</p>
            </div>
            <div className="skill-item">
              <SiPostgresql className="skill-icon" />
              <p>PostgreSQL</p>
            </div>
            <div className="skill-item">
              <SiGithub className="skill-icon" />
              <p>Git</p>
            </div>
            <div className="skill-item">
              <SiAmazonwebservices className="skill-icon" />
              <p>AWS</p>
            </div>
          </div>
        </section>
        <section className="projects">
          <h2>Highlighted Projects</h2>
          <div className="projects-grid">
            <div className="project-item">
              <h3>Reservation Manager</h3>
              <p>
                Web application to manage real-time reservations using React and Node.js.
              </p>
              <a
                href="https://github.com/Scorpion/reservas"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
            <div className="project-item">
              <h3>Streaming App</h3>
              <p>
                Live streaming platform with real-time payments and token integration.
              </p>
              <a
                href="https://github.com/Scorpion/streaming-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
            <div className="project-item">
              <h3>Sales Dashboard</h3>
              <p>
                Sales analytics tool with dynamic charts and integration with MySQL databases.
              </p>
              <a
                href="https://github.com/Scorpion/dashboard-ventas"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
            <div className="project-item">
              <h3>User Management API</h3>
              <p>
                RESTful API for user management, authentication, and authorization using Node.js and PostgreSQL.
              </p>
              <a
                href="https://github.com/Scorpion/api-usuarios"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </section>
        <section className="about">
          <h2>About Me</h2>
          <p>
            I am a software engineer with over 10 years of experience in building modern, scalable, and high-performance applications. My expertise lies in frontend and backend development, focusing on delivering innovative technological solutions.
          </p>
          <p>
            I am passionate about working with modern technologies like React, Node.js, Docker, and relational databases. Additionally, I have experience leading development teams and contributing to complex projects from design to implementation.
          </p>
        </section>
        <section className="contact">
          <h2>Contact</h2>
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <a href="mailto:achacchi@icloud.com">achacchi@icloud.com</a>
          </div>
          <div className="contact-item">
            <FaGithub className="icon" />
            <a href="https://github.com/Scorpion" target="_blank" rel="noopener noreferrer">
              github.com/Scorpion
            </a>
          </div>
          <div className="contact-item">
            <FaLinkedin className="icon" />
            <a
              href="www.linkedin.com/in/achacchi"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/achacchi
            </a>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Alexander Chacchi. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App