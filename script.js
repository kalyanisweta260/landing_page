// Get the navigation bar
const navbar = document.getElementById('navbar');

// Function to change the navbar background color when scrolling
window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.style.backgroundColor = '#0056b3';  // Darker blue background when scrolled
    } else {
        navbar.style.backgroundColor = '#007bff';  // Original blue background
    }
};