


// Function to render the registration form
export const render = (page) => {
  const container = document.getElementById('app');

  if (container) {
    container.innerHTML = '';
    const form = page();
    container.appendChild(form);
  }
};

