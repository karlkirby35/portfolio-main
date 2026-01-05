import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <div className="intro reveal">
        <img src="/images/karlkirbypicture.jpeg" alt="Karl Kirby" className="profile-pic" />
        <h1>Karl Kirby</h1>
        <p>
          I’m a third-year Creative Computing student at IADT with a strong interest in combining design and technology.
          I have experience in UX design, web development, creative coding, and programming, and I’m passionate about applying what I’ve learned to real-world projects.
          I bring a proactive, "can-do" attitude and thrive when working collaboratively in a team environment.
        </p>
      </div>
      <section className="projects reveal">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="project">
            <Link to="/project1">
              <img src="/images/pic1.png" alt="UX App Project" />
              <h3>UX App (SDG 11)</h3>
              <p>Redesigned a sustainability app using Figma.</p>
            </Link>
          </div>
          <div className="project">
            <Link to="/project2">
              <img src="/images/project22.png" alt="Calorie Tracker App" />
              <h3>Calorie Tracker</h3>
              <p>Responsive web app with API integration (PHP, Laravel).</p>
            </Link>
          </div>
          <div className="project">
            <Link to="/project3">
              <img src="/images/project3.png" alt="Creative Coding Game" />
              <h3>Creative Coding Game</h3>
              <p>2D interactive game built in JavaScript & Canvas.</p>
            </Link>
          </div>
        </div>
      </section>
      <div className="reveal" style={{ textAlign: 'center', paddingBottom: '40px' }}>
        <h2>Contact</h2>
        <p>
          Email: KarlKirby79@gmail.com | <a href="https://github.com/karlkirby35/portfolio.git" target="_blank" rel="noreferrer">GitHub</a>
        </p>
      </div>
    </div>
  );
}
