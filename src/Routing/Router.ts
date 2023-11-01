import { main, registerrender,favoriterender, Loginrender, shoppingmainrender} from './routes'; // Import the main function from the corresponding file
;

export function route(routes: string) {
  const change = () => {
    window.history.pushState(null, '', routes);
  };
  change();

  switch (routes) {
    case '/':
      main();
      break;
    case '/register':
      registerrender(); // Render the register page component
      break;
    case '/Login':
      (Loginrender()); // Render the login page component
      break;
    case '/landing':
      shoppingmainrender(); // Render the landing page component
      break;
    case '/favorite':
      favoriterender() // Render the landing page component
      break;
    default:
      break;
  }
}

// Example usage
const currentPath = '/landing'; // Example current path

// Find the corresponding title for the current path from the navbar array

// Call the routing function with the current path
route(currentPath);

// Print the current path and title
console.log(`Current path: ${currentPath}`);

