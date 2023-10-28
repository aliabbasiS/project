// Import necessary modules or dependencies as nee
import { mainpage } from '../pages/mainpage/mainpage';
import { Login } from '../pages/Login/login';
import { register } from '../pages/register/register';
import { routes } from './routes';

// Define a routing function
function route(routes:object) {
  switch (routes) {
    
    case '/':
      return mainpage(); // Render the home page component
    case '/register':
      return register(); // Render the register page component
    case '/login':
      return Login(); // Render the login page component
    case '/landing':
      return LandingPage(); // Render the landing page component
    
  }
}

// Example usage
const currentPath = '/'; // Example current path

// Find the corresponding title for the current path from the navbar array


// Call the routing function with the current path
const renderedPage = route(currentPath);

// Render the returned page component to the DOM
renderToDOM(renderedPage);

// Print the current path and title
console.log(`Current path: ${currentPath}`);
console.log(`Current title: ${currentTitle}`);
