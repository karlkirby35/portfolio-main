import { Link } from 'react-router-dom';

export default function Project1() {
  return (
    <div>
      <Link to="/" className="back-button">← Back to Home</Link>
      <div className="intro1 reveal">
        <h1>Ux App Design (SDG 11)</h1>
        <p>As part of a group project, I designed the user interface for a sustainability focused app. My contributions included the layout of the Eco-Homes feature, the Materials page and the property page.</p>
      </div>
      <div className="screenShots reveal">
        <div className="shot">
          <img src="/images/APP5.png" alt="App Home Screen" />
          <h3>Home Screen</h3>
          <p>The landing page gives users quick access to eco-friendly housing options and sustainability tips. There is a map, grant section and a materials section.</p>
        </div>
        <div className="shot">
          <img src="/images/APP1.png" alt="Eco-Homes Feature" />
          <h3>Materials Page</h3>
          <p>Materials section which showcases different sustainable materials that are used in construction.</p>
        </div>
        <div className="shot">
          <img src="/images/APP2.png" alt="Materials Page" />
          <h3>Learn More Page</h3>
          <p>Depending on what material you chose on the Materials page you will be given a more in depth description about the material. The icons show what benefits it provides. The properties part showcases housing that was built with your chosen material.</p>
        </div>
        <div className="shot">
          <img src="/images/APP3.png" alt="Property Details Page" />
          <h3>Property Details</h3>
          <p>Each property includes floor plans, eco-features, and sustainability scores to guide decision-making. It gives the user a more detailed description about the estate agents and the house.</p>
        </div>
        <div className="shot">
          <img src="/images/APP4.png" alt="User Dashboard" />
          <h3>User Dashboard</h3>
          <p>When the user has selected the house they are looking for there is a button called 'show on map' in the learn more page. This links to the map section which then shows the user where the house they are looking for is located.</p>
        </div>
        <div className="shot">
          <img src="/images/APP6.png" alt="Community Section" />
          <h3>Community Section</h3>
          <p>The favourite materials section is used for when the user wants to come back to look into a material later on. When the user selects a material from this section it brings them to the learn more page of the app.</p>
        </div>
      </div>
    </div>
  );
}
