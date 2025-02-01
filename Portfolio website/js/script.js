// Dark Mode Toggle Function
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
  
    // Check localStorage for dark mode preference
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
  
    // Apply dark mode if enabled
    if (isDarkMode) {
      body.classList.add('dark-mode');
      darkModeToggle.innerHTML = '<i class="bi bi-sun-fill"></i> Light Mode';
    }
  
    // Toggle dark mode
    darkModeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      const isDarkModeEnabled = body.classList.contains('dark-mode');
  
      // Save preference to localStorage
      localStorage.setItem('darkMode', isDarkModeEnabled ? 'enabled' : 'disabled');
  
      // Update button text
      darkModeToggle.innerHTML = isDarkModeEnabled
        ? '<i class="bi bi-sun-fill"></i> Light Mode'
        : '<i class="bi bi-moon-fill"></i> Dark Mode';
    });
  });