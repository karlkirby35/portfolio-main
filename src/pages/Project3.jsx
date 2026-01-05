import { Link } from 'react-router-dom';

export default function Project3() {
  return (
    <div>
      <Link to="/" className="back-button">← Back to Home</Link>
      <div className="intro1 reveal">
        <h1>Flappy Bird Project</h1>
        <p>Using Visual Studio Code, I programmed my own version of an existing game using physics properties and CSS. I used mainly JavaScript and classes to create this.</p>
      </div>
      <div className="screenShotsFb reveal">
        <div className="shotFb">
          <img src="/images/FB1.png" alt="Game Death" />
          <div className="shotText">
            <h3>Death Screen</h3>
            <p>This screen appears when the player loses the game.</p>
          </div>
        </div>
        <div className="shotFb">
          <img src="/images/FB2.png" alt="Game Play" />
          <div className="shotText">
            <h3>Start Screen</h3>
            <p>This is the initial screen where the game begins.</p>
          </div>
        </div>
        {/*Flappy bird implementation*/}
        <div className="implementation">
          <h2>Flappy Bird Implementation</h2>
          <p>This is my implementation of the classic Flappy Bird game using HTML, CSS, and JavaScript. Click the button below to play the game!<br />
            This game was programmed using physics properties and classes in JavaScript. The aim of the game is to navigate the UFO through the gaps in the pipes without hitting them. 
            Each successful pass through a gap earns the player a point. 
            The game ends if the UFO collides with a pipe.
          </p>
          <a href="https://karlkirby35.github.io/flappybirdproject/" target="_blank" className="play-button" rel="noreferrer">Play Flappy Bird</a>
        </div>
        <p>Check the project on GitHub: <a href="https://github.com/karlkirby35/flappybirdproject.git" target="_blank" rel="noreferrer">GitHub Repo</a></p>
      </div>
    </div>
  );
}
