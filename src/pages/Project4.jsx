import { Link } from 'react-router-dom';

export default function Project4() {
  return (
    <div className="unreal-page">
      <Link to="/" className="back-button">← Back to Home</Link>

      <div className="unreal-hero reveal">
        <h1>Slenderman Horror Game</h1>
        <p>
          A Slenderman-type horror game built in Unreal Engine. Players navigate through eerie environments collecting books while being hunted by a supernatural entity.
          The game features atmospheric lighting, immersive sound design, and tense gameplay mechanics to create a terrifying experience.
        </p>
      </div>

      <div className="unreal-info-grid reveal">
        <div className="unreal-info-card">
          <h3>My Role</h3>
          <p>Design, scripting, lighting, and performance polish.</p>
        </div>
        <div className="unreal-info-card">
          <h3>Focus Areas</h3>
          <p>Blueprint gameplay logic, level layout, materials, and cinematic beats.</p>
        </div>
        <div className="unreal-info-card">
          <h3>What I Learned</h3>
          <p>Iterating fast with Blueprints, profiling frame time, and packaging builds for distribution.</p>
        </div>
      </div>

      <div className="unreal-gallery reveal">
        <div className="unreal-shot">
          <img src="/images/unreal1.png" alt="Unreal Engine environment placeholder" />
          <div className="unreal-shot-copy">
            <h3>Home Menu</h3>
            <p>Home design to start the game and exit the game. Also includes options and instructions menu.</p>
          </div>
        </div>
     
        <div className="unreal-shot">
          <img src="/images/unreal2.png" alt="Lighting pass placeholder" />
          <div className="unreal-shot-copy">
            <h3>Ui Design</h3>
            <p>Ui design for menus and HUD elements to ensure clarity and usability.</p>
          </div>
        </div>
      </div>

      <div className="unreal-cta reveal">
        <h2>Want to try it?</h2>
        <p>Add your build link or gameplay video here so people can download or watch a short run-through.</p>
        <div className="unreal-links">
          <a href="https://github.com/karlkirby35/CA2ForestGame2.git" target="_blank" rel="noreferrer">Download Build (replace link)</a>
        </div>
      </div>
    </div>
  );
}
