import { register } from './src/pages/register/register';
import { handelregesterform } from './src/pages/register/regstry';


// Function to render the registration form
const renderRegisterForm = () => {
  const container = document.getElementById('app');

  if (container) {
    container.innerHTML = '';
    const form = register();
    container.appendChild(form);
  }
};

// Function to attach event listeners
const attachEventListeners = () => {
  const form = document.querySelector('#register-form');

  if (form) {
    form.addEventListener('submit', handelregesterform);
  }
};

// Main function to render the form and attach event listeners
export const render = () => {
  renderRegisterForm();
  attachEventListeners();
};

// Call the render function to initialize the form
