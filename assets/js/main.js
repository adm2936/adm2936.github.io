// Simple script to enhance user experience
document.addEventListener('DOMContentLoaded', function() {
  // Add active class to current navigation item
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (currentPath.startsWith(linkPath) && linkPath !== '/') {
      link.classList.add('text-blue-600', 'font-medium');
    } else if (currentPath === '/' && linkPath === '/') {
      link.classList.add('text-blue-600', 'font-medium');
    }
  });
});