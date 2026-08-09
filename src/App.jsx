import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function App() {

  const form = useRef();

  const [sending, setSending] = useState(false);

  const [sent, setSent] = useState(false);

  const [error, setError] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);


  /* =====================================================
     CONTACT FORM
  ===================================================== */

  const sendEmail = (e) => {

    e.preventDefault();

    setSending(true);

    setSent(false);

    setError(false);


    emailjs
      .sendForm(
        "service_vrd83ci",
        "template_x865hg9",
        form.current,
        {
          publicKey: "Vu1vce-b-JIJZQ4rg",
        }
      )

      .then(() => {

        setSending(false);

        setSent(true);

        form.current.reset();

      })

      .catch((error) => {

        console.log(error);

        setSending(false);

        setError(true);

      });

  };


  const closeMenu = () => {
    setMenuOpen(false);
  };


  return (

    <div className="app">


      {/* =================================================
          NAVBAR
      ================================================= */}

      <header className="navbar">

        <div className="navbar-container">


          <a
            href="#home"
            className="logo"
            onClick={closeMenu}
          >

            <span className="logo-icon">
              AL
            </span>

            <span className="logo-name">
              Ankit Lodhi
            </span>

          </a>


          <nav
            className={
              menuOpen
                ? "nav-links open"
                : "nav-links"
            }
          >

            <a href="#home" onClick={closeMenu}>
              Home
            </a>

            <a href="#about" onClick={closeMenu}>
              About
            </a>

            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>

            <a href="#education" onClick={closeMenu}>
              Education
            </a>

            <a href="#work" onClick={closeMenu}>
              Work
            </a>

            <a href="#experience" onClick={closeMenu}>
              Experience
            </a>

            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>

          </nav>


          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >

            {menuOpen ? "✕" : "☰"}

          </button>

        </div>

      </header>



      {/* =================================================
          HOME
      ================================================= */}

      <section
        id="home"
        className="home-section"
      >

        <div className="home-container">


          <div className="home-content">

            <p className="welcome-text">
              HEY There...!!
            </p>


            <h1>
              I'm <span>Ankit Lodhi</span>
            </h1>


            <h2>
              I Am Into{" "}
              <span>Frontend Development</span>
            </h2>


            <p className="home-description">

              I am a passionate Computer Science student
              and aspiring Full Stack Developer who loves
              building modern, responsive and user-friendly
              web applications.

            </p>


            <div className="home-buttons">

              <a
                href="#about"
                className="primary-button"
              >
                About Me ↓
              </a>


              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                View Resume ↗
              </a>

            </div>


            {/* SOCIAL ICONS */}

            <div className="social-links">


              <a
                href="https://www.linkedin.com/in/ankesh-lodhi"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
              >

                <i className="fa-brands fa-linkedin-in"></i>

              </a>


              <a
                href="https://github.com/AnkeshLodhi-11"
                target="_blank"
                rel="noreferrer"
                title="GitHub"
              >

                <i className="fa-brands fa-github"></i>

              </a>


              <a
                href="https://t.me/Ankitlodhi12"
                target="_blank"
                rel="noreferrer"
                title="Telegram"
              >

                <i className="fa-brands fa-telegram"></i>

              </a>


              <a
                href="https://wa.me/919109472996"
                target="_blank"
                rel="noreferrer"
                title="WhatsApp"
              >

                <i className="fa-brands fa-whatsapp"></i>

              </a>

            </div>

          </div>



          <div className="home-image">

            <div className="home-image-ring">

              <img
                src="/images/profile.jpg"
                alt="Ankit Lodhi"
              />

            </div>

          </div>

        </div>

      </section>



      {/* =================================================
          ABOUT
      ================================================= */}

      <section
        id="about"
        className="about-section"
      >

        <div className="about-container">


          <div className="about-image">

            <img
              src="/images/profile.jpg"
              alt="Ankit Lodhi"
            />

          </div>


          <div className="about-content">

            <span className="about-label">
              ABOUT ME
            </span>


            <h2>
              I'm <span>Ankit Lodhi</span>
            </h2>


            <h3>
              Student At Ujjain Engineering College
            </h3>


            <p className="about-description">

              HEY There..!! I am Ankit Lodhi, currently
              pursuing Bachelor of Technology (B.Tech)
              in Computer Science Engineering from
              Ujjain Engineering College, Ujjain.

            </p>


            <p className="about-description">

              I am passionate about improving my coding
              skills and developing modern applications
              and websites using Full-Stack Development.
              I enjoy learning new technologies and
              building real-world projects.

            </p>


            <div className="about-details">


              <AboutDetail
                icon="fa-user"
                label="Name"
                value="Ankit Lodhi"
              />


              <AboutDetail
                icon="fa-graduation-cap"
                label="Education"
                value="B.Tech CSE"
              />


              <AboutDetail
                icon="fa-phone"
                label="Phone"
                value="+91 9109472996"
              />


              <AboutDetail
                icon="fa-envelope"
                label="Email"
                value="ankitlodhi546@gmail.com"
              />


              <AboutDetail
                icon="fa-location-dot"
                label="Place"
                value="Ujjain, Madhya Pradesh, India"
              />

            </div>


            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="about-resume-button"
            >

              View Resume

              <i className="fa-solid fa-arrow-right"></i>

            </a>

          </div>

        </div>

      </section>



      {/* =================================================
          SKILLS
      ================================================= */}

      <section
        id="skills"
        className="skills-section"
      >

        <div className="section-heading light">

          <span className="section-label">
            MY SKILLS
          </span>

          <h2>
            Technical <span>Skills</span>
          </h2>

          <p>
            Technologies and tools I use to build
            modern applications.
          </p>

        </div>


        <div className="skill-category-container">


          <SkillCategory
            icon="fa-code"
            title="Programming"
            skills={[
              "C",
              "C++",
              "Data Structures & Algorithms",
              "Python"
            ]}
          />


          <SkillCategory
            icon="fa-laptop-code"
            title="Frontend Development"
            skills={[
              "HTML5",
              "CSS3",
              "JavaScript",
              "Tailwind CSS",
              "React.js"
            ]}
          />


          <SkillCategory
            icon="fa-server"
            title="Backend Development"
            skills={[
              "Node.js",
              "Express.js",
              "REST APIs",
              "Authentication & Authorization"
            ]}
          />


          <SkillCategory
            icon="fa-database"
            title="Database"
            skills={[
              "SQL",
              "MySQL",
              "MongoDB"
            ]}
          />


          <SkillCategory
            icon="fa-cloud-arrow-up"
            title="Deployment"
            skills={[
              "Netlify",
              "Vercel",
              "Render"
            ]}
          />


          <SkillCategory
            icon="fa-screwdriver-wrench"
            title="Tools"
            skills={[
              "Git",
              "GitHub",
              "VS Code"
            ]}
          />

        </div>

      </section>



      {/* =================================================
          EDUCATION
      ================================================= */}

      <section
        id="education"
        className="education-section"
      >

        <div className="section-heading">

          <span className="section-label">
            EDUCATION
          </span>

          <h2>
            My <span>Education</span>
          </h2>

          <p>
            My academic journey and educational background.
          </p>

        </div>


        <div className="education-container">


          <EducationCard
            image="/images/ujjain.jpg"
            year="2025 - Present"
            title="Ujjain Engineering College, Ujjain"
            course="B.Tech — Computer Science Engineering"
            university="Affiliated To Rajiv Gandhi Proudyogiki Vishwavidyalaya | RGPV"
            status="Pursuing"
          />


          <EducationCard
            image="/images/polytechnic.jpg"
            year="2022 - 2025"
            title="Govt. Polytechnic College Raghogarh"
            course="Diploma — Computer Science Engineering"
            university="Affiliated To Rajiv Gandhi Proudyogiki Vishwavidyalaya | RGPV"
            status="Completed"
          />


          <EducationCard
            image="/images/school.jpg"
            year="School Education"
            title="Government Excellence School, Mungoli"
            course="Secondary & Higher Secondary Education"
            university="Madhya Pradesh Board | MP Board"
            status="Completed"
          />

        </div>

      </section>



      {/* =================================================
          PROJECTS
      ================================================= */}

      <section
        id="work"
        className="work-section"
      >

        <div className="section-heading">

          <span className="section-label">
            MY WORK
          </span>

          <h2>
            Featured <span>Projects</span>
          </h2>

          <p>
            Some of my recent projects and work.
          </p>

        </div>


        <div className="projects-wrapper">


          <ProjectCard

            number="01"

            title="Personal Portfolio"

            description="
              A responsive personal portfolio website
              developed to showcase my skills, education,
              experience and projects.
            "

            tags={[
              "HTML5",
              "CSS3",
              "Tailwind CSS",
              "JavaScript",
              "React.js",
              "REST APIs"
            ]}

            github="https://github.com/AnkeshLodhi-11"

            live="https://portfolio-ankeshlodhii.netlify.app/"

          />


          <ProjectCard

            number="02"

            title="College Attendance System"

            description="
              A web-based attendance management system
              with student, teacher and principal flows,
              attendance management and reports.
            "

            tags={[
              "HTML5",
              "CSS3",
              "JavaScript",
              "JSONBin API",
              "jsPDF"
            ]}

            github="https://github.com/AnkeshLodhi-11"

            live="https://college-attendence.netlify.app/"

          />

        </div>

      </section>



      {/* =================================================
          EXPERIENCE
      ================================================= */}

      <section
        id="experience"
        className="experience-section"
      >

        <div className="section-heading">

          <span className="section-label">
            EXPERIENCE
          </span>

          <h2>
            Internship <span>Experience</span>
          </h2>

        </div>


        <div className="experience-container">


          <ExperienceCard
            number="01"
            date="June 2026"
            title="Web Development Intern"
            company="CODSOFT"
            description="
              Completed a 4-week virtual Web Development
              Internship. Built projects including Personal
              Portfolio, Calculator and Daily Vibes.
            "
          />


          <ExperienceCard
            number="02"
            date="November 2025"
            title="Front-End Developer Intern"
            company="StaxTech"
            description="
              Completed a 1-month Front-End Developer
              Internship and developed responsive web
              interfaces using modern web technologies.
            "
          />

        </div>

      </section>



      {/* =================================================
          CONTACT
      ================================================= */}

      <section
        id="contact"
        className="contact-section"
      >

        <div className="section-heading">

          <span className="section-label">
            CONTACT
          </span>

          <h2>
            Get In <span>Touch</span>
          </h2>

          <p>
            Have a project, question or opportunity?
            Let's connect.
          </p>

        </div>


        <div className="contact-container">


          <div className="contact-info">

            <span className="contact-small">
              LET'S TALK
            </span>


            <h3>
              Let's Work Together
            </h3>


            <p>

              If you have a project, opportunity or
              simply want to say hello, feel free to
              send me a message.

            </p>


            <ContactInfo
              icon="fa-envelope"
              title="Email"
              value="ankitlodhi546@gmail.com"
            />


            <ContactInfo
              icon="fa-phone"
              title="Phone"
              value="+91 9109472996"
            />


            <ContactInfo
              icon="fa-location-dot"
              title="Location"
              value="Ujjain, Madhya Pradesh, India"
            />


            <div className="contact-socials">


              <SocialIcon
                icon="fa-github"
                link="https://github.com/AnkeshLodhi-11"
              />


              <SocialIcon
                icon="fa-linkedin-in"
                link="https://www.linkedin.com/in/ankesh-lodhi"
              />


              <SocialIcon
                icon="fa-telegram"
                link="https://t.me/Ankitlodhi12"
              />


              <SocialIcon
                icon="fa-whatsapp"
                link="https://wa.me/919109472996"
              />

            </div>

          </div>



          {/* CONTACT FORM */}

          <form
            ref={form}
            className="contact-form"
            onSubmit={sendEmail}
          >


            <div className="form-row">


              <div className="form-group">

                <label>
                  Your Name
                </label>

                <input
                  type="text"
                  name="user_name"
                  placeholder="Enter your name"
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  Your Email
                </label>

                <input
                  type="email"
                  name="user_email"
                  placeholder="Enter your email"
                  required
                />

              </div>

            </div>


            <div className="form-group">

              <label>
                Subject
              </label>

              <input
                type="text"
                name="subject"
                placeholder="What is this regarding?"
                required
              />

            </div>


            <div className="form-group">

              <label>
                Your Message
              </label>

              <textarea
                name="message"
                rows="6"
                placeholder="Write your message here..."
                required
              ></textarea>

            </div>


            <input
              type="hidden"
              name="time"
              value={new Date().toLocaleString()}
            />


            <button
              type="submit"
              className="submit-button"
              disabled={sending}
            >

              {sending ? (

                <>
                  <i className="fa-solid fa-spinner fa-spin"></i>
                  &nbsp; Sending...
                </>

              ) : (

                <>
                  <i className="fa-solid fa-paper-plane"></i>
                  &nbsp; Send Message
                </>

              )}

            </button>


            {sent && (

              <div className="success-message">

                <i className="fa-solid fa-circle-check"></i>

                Message sent successfully! Check your Gmail.

              </div>

            )}


            {error && (

              <div className="error-message">

                <i className="fa-solid fa-circle-exclamation"></i>

                Something went wrong. Please try again.

              </div>

            )}


            <p className="form-note">

              Your message will be sent directly to my email.

            </p>

          </form>

        </div>

      </section>



      {/* =================================================
          FOOTER
      ================================================= */}

      <footer className="footer">

        <div className="footer-container">


          <div className="footer-column">

            <div className="footer-logo">
              Ankit Portfolio
            </div>

            <p>
              Full Stack Developer & Computer Science
              Engineering Student.
            </p>

            <p>
              Keep Rising 🚀
            </p>

          </div>


          <div className="footer-column">

            <h3>
              Quick Links
            </h3>

            <a href="#home">
              Home
            </a>

            <a href="#about">
              About
            </a>

            <a href="#skills">
              Skills
            </a>

            <a href="#education">
              Education
            </a>

            <a href="#work">
              Projects
            </a>

            <a href="#experience">
              Experience
            </a>

            <a href="#contact">
              Contact
            </a>

          </div>


          <div className="footer-column">

            <h3>
              Contact
            </h3>

            <p>
              <i className="fa-solid fa-envelope"></i>
              &nbsp; ankitlodhi546@gmail.com
            </p>

            <p>
              <i className="fa-solid fa-phone"></i>
              &nbsp; +91 9109472996
            </p>

            <p>
              <i className="fa-solid fa-location-dot"></i>
              &nbsp; Ujjain, Madhya Pradesh
            </p>


            <div className="footer-socials">

              <SocialIcon
                icon="fa-github"
                link="https://github.com/AnkeshLodhi-11"
              />

              <SocialIcon
                icon="fa-linkedin-in"
                link="https://www.linkedin.com/in/ankesh-lodhi"
              />

              <SocialIcon
                icon="fa-telegram"
                link="https://t.me/Ankitlodhi12"
              />

              <SocialIcon
                icon="fa-whatsapp"
                link="https://wa.me/919109472996"
              />

            </div>

          </div>

        </div>


        <div className="footer-bottom">

          <p>
            Designed With ❤️ By Ankit Lodhi
          </p>

          <p>
            © 2026 All Rights Reserved
          </p>

        </div>

      </footer>



      {/* FLOATING WHATSAPP */}

      <a
        href="https://wa.me/919109472996"
        target="_blank"
        rel="noreferrer"
        className="chat-button"
        title="WhatsApp"
      >

        <i className="fa-brands fa-whatsapp"></i>

      </a>


      <a
        href="#home"
        className="scroll-top"
        title="Back To Top"
      >
        ↑
      </a>

    </div>

  );
}



/* =====================================================
   ABOUT DETAIL
===================================================== */

function AboutDetail({
  icon,
  label,
  value
}) {

  return (

    <div className="about-detail">

      <div className="about-detail-icon">

        <i
          className={`fa-solid ${icon}`}
        ></i>

      </div>


      <div className="about-detail-text">

        <span>
          {label} :
        </span>

        <strong>
          {value}
        </strong>

      </div>

    </div>

  );

}



/* =====================================================
   SKILL CATEGORY
===================================================== */

function SkillCategory({
  icon,
  title,
  skills
}) {

  return (

    <div className="skill-category">

      <div className="skill-category-icon">

        <i
          className={`fa-solid ${icon}`}
        ></i>

      </div>


      <h3>
        {title}
      </h3>


      <div className="skill-tags">

        {skills.map((skill) => (

          <span key={skill}>
            {skill}
          </span>

        ))}

      </div>

    </div>

  );

}



/* =====================================================
   EDUCATION CARD
===================================================== */

function EducationCard({
  image,
  year,
  title,
  course,
  university,
  status
}) {

  return (

    <article className="education-card">

      <div className="education-image">

        <img
          src={image}
          alt={title}
        />

      </div>


      <div className="education-content">

        <span className="education-year">
          {year}
        </span>


        <h3>
          {title}
        </h3>


        <h4>
          {course}
        </h4>


        <p>
          {university}
        </p>


        <strong className="education-status">
          {status}
        </strong>

      </div>

    </article>

  );

}



/* =====================================================
   PROJECT CARD
===================================================== */

function ProjectCard({
  number,
  title,
  description,
  tags,
  github,
  live
}) {

  return (

    <article className="project-card">


      <div className="project-top">

        <span>
          PROJECT {number}
        </span>

        <i className="fa-solid fa-code"></i>

      </div>


      <div className="project-content">

        <h3>
          {title}
        </h3>


        <p>
          {description}
        </p>


        <div className="project-tags">

          {tags.map((tag) => (

            <span key={tag}>
              {tag}
            </span>

          ))}

        </div>


        <div className="project-buttons">


          <a
            href={github}
            target="_blank"
            rel="noreferrer"
          >

            <i className="fa-brands fa-github"></i>

            GitHub

          </a>


          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="live-button"
          >

            <i className="fa-solid fa-arrow-up-right-from-square"></i>

            Live Demo

          </a>

        </div>

      </div>

    </article>

  );

}



/* =====================================================
   EXPERIENCE
===================================================== */

function ExperienceCard({
  number,
  date,
  title,
  company,
  description
}) {

  return (

    <article className="experience-card">

      <div className="experience-number">
        {number}
      </div>


      <div>

        <span className="experience-date">
          {date}
        </span>


        <h3>
          {title}
        </h3>


        <h4>
          {company}
        </h4>


        <p>
          {description}
        </p>


        <div className="project-tags">

          <span>HTML5</span>
          <span>CSS3</span>
          <span>JavaScript</span>
          <span>Tailwind CSS</span>

        </div>

      </div>

    </article>

  );

}



/* =====================================================
   CONTACT INFO
===================================================== */

function ContactInfo({
  icon,
  title,
  value
}) {

  return (

    <div className="contact-detail">

      <div className="contact-detail-icon">

        <i
          className={`fa-solid ${icon}`}
        ></i>

      </div>


      <div>

        <small>
          {title}
        </small>

        <p>
          {value}
        </p>

      </div>

    </div>

  );

}



/* =====================================================
   SOCIAL ICON
===================================================== */

function SocialIcon({
  icon,
  link
}) {

  return (

    <a
      href={link}
      target="_blank"
      rel="noreferrer"
    >

      <i
        className={`fa-brands ${icon}`}
      ></i>

    </a>

  );

}


export default App;