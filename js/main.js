// DOM Elements
const darkModeToggle = document.getElementById('dark-mode-toggle');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const typeText = document.getElementById('type-text');
const scrollDown = document.querySelector('.scroll-down');

// Typewriter Effect
const texts = [
    "a Software Engineer",
    "a Python Developer",
    "a Java Developer",
    "a VR/AR Enthusiast",
    "a Creative Technologist"
];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
    if (count === texts.length) count = 0;
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    
    typeText.textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000);
    } else {
        setTimeout(type, 100);
    }
}

// Dark Mode Toggle
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    
    // Change icon
    const icon = darkModeToggle.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    const icon = darkModeToggle.querySelector('i');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
}

// Mobile Navigation
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Scroll Reveal Animation
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}

// Scroll to sections
scrollDown.addEventListener('click', () => {
    document.querySelector('.featured-projects').scrollIntoView({ 
        behavior: 'smooth' 
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Start typewriter effect
    setTimeout(type, 1000);
    
    // Initialize scroll reveal
    window.addEventListener('scroll', reveal);
    reveal();
    
    // Add reveal class to elements
    document.querySelectorAll('section').forEach((section, index) => {
        section.classList.add('reveal', `delay-${index % 6}`);
    });
});