import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const projects = [
    {
      path: '/project1',
      image: '/images/pic1.png',
      alt: 'UX App Project',
      title: 'UX App (SDG 11)',
      description: 'Redesigned a sustainability app using Figma.',
    },
    {
      path: '/project2',
      image: '/images/project22.png',
      alt: 'Calorie Tracker App',
      title: 'Calorie Tracker',
      description: 'Responsive web app with API integration (PHP, Laravel).',
    },
    {
      path: '/project3',
      image: '/images/project3.png',
      alt: 'Creative Coding Game',
      title: 'Creative Coding Game',
      description: '2D interactive game built in JavaScript & Canvas.',
    },
    {
      path: '/project4',
      image: '/images/unreal1.png',
      alt: 'Slenderman Horror Game',
      title: 'Slenderman Horror Game',
      description: 'A Slenderman-type horror game built in Unreal Engine.',
    },
  ];

  const [isDesktop, setIsDesktop] = useState(true);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const updateViewport = () => {
      setIsDesktop(window.innerWidth >= 900);
      setCurrent(0);
    };
    updateViewport();
    window.addEventListener('resize', updateViewport);
    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  const slides = useMemo(() => {
    if (isDesktop) {
      return [projects.slice(0, 2), projects.slice(2)];
    }
    return projects.map((project) => [project]);
  }, [isDesktop, projects]);

  const pageCount = slides.length;
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? pageCount - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev === pageCount - 1 ? 0 : prev + 1));

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
        <div className="project-carousel">
          <button className="carousel-btn left" onClick={prevSlide} aria-label="Previous project">{`<`}</button>
          <div className="carousel-window">
            <div
              className="carousel-track"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slides.map((group, index) => (
                  <div className="carousel-slide" key={`slide-${index}`}>
                    <div className="carousel-slide-group">
                      {group.map((project) => (
                        <Link to={project.path} className="project-card" key={project.title}>
                          <img src={project.image} alt={project.alt} />
                          <h3>{project.title}</h3>
                          <p>{project.description}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <button className="carousel-btn right" onClick={nextSlide} aria-label="Next project">{`>`}</button>
          <div className="carousel-dots" role="tablist" aria-label="Project selection">
            {Array.from({ length: pageCount }).map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === current ? 'active' : ''}`}
                onClick={() => setCurrent(index)}
                aria-label={`Go to project group ${index + 1}`}
                aria-selected={index === current}
                role="tab"
              />
            ))}
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
