import { Link } from 'react-router-dom';

export default function Project2() {
  return (
    <div>
      <Link to="/" className="back-button">← Back to Home</Link>
      <div className="intro2 reveal">
        <h1>Health Nutrition App</h1>
        <p>
          Using Visual Studio Code, I designed and implemented a working nutrition app that functions
          similarly to MyFitnessPal. The project was built using Laravel as the backend framework and 
          integrates the Nutritionix API via an API key and Postman to retrieve real food data.
        </p>
      </div>
      <div className="screenShotsHealth reveal">
        <div className="screenShotH1">
          <img src="/images/project2.1.png" alt="App Landing Page" />
          <p className="caption">
            This is the dashboard page. At the top it provides a total calories consumed for the day. When the user adds a food to the list the calories change accordingly.
          </p>
        </div>
        <div className="screenShotH2">
          <img src="/images/project2.2.png" alt="User Registration Page" />
          <p className="caption">
            This is the food logging page. When the user searches for a good, the nutritional information is pulled from the Nutritioni9x API.
            The user can then add the food to their daily log which updates the total calories on the dashboard.
          </p>
        </div>
        <div className="screenShotH1">
          <img src="/images/project2.3.png" alt="Dashboard Overview" />
          <p className="caption">
            The dashboard displays the total calories consumed for the day based on foods the user has added.
            This helps users monitor their daily calorie intake at a glance.
          </p>
        </div>
        <div className="screenShotH2">
          <img src="/images/project2.4.png" alt="Food Search Feature" />
          <p className="caption">
            Users can search for foods using the Nutritionix API. Once an item is selected, they can view its 
            nutritional details or add it to their daily meal log.
          </p>
        </div>
        <div className="screenShotH1">
          <img src="/images/project2.5.png" alt="Nutritional Information" />
          <p className="caption">
            The nutritional information screen displays detailed food data, including calories, protein, carbs,
            and fat content — all retrieved dynamically from the Nutritionix API.
          </p>
        </div>
        <div className="screenShotH2">
          <img src="/images/project2.6.png" alt="Meal Logging Example" />
          <p className="caption">
            The meal logging system lets users track what they’ve eaten. Foods are stored in the session 
            rather than a database, allowing totals to update instantly.
          </p>
        </div>
      </div>
      <div className="how-it-works reveal">
        <h2>How It Works</h2>
        <p>
          The app is powered by Laravel. When a user searches for a food item, a request is sent to a Laravel
          controller that communicates with the Nutritionix API. The API response — containing calories,
          protein, carbs, and fats — is displayed instantly on the interface. User-selected foods are stored 
          within the session, and the total calories are dynamically calculated and shown on the dashboard.
        </p>
      </div>
      <div className="project-footer reveal">
        <h2>Project Resources</h2>
        <p>You can view the full project code and explore the API used below:</p>
        <div className="project-links">
          <a href="https://developer.nutritionix.com/" target="_blank" rel="noreferrer">🍎 Nutritionix API</a>
        </div>
      </div>
    </div>
  );
}
