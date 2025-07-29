function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      e.preventDefault();
      // Remove the class from all sections
      document.querySelectorAll('section').forEach(sec => {
        sec.classList.remove('section--swipe-in');
      });
      // Scroll to the section
      targetSection.scrollIntoView({ behavior: 'smooth' });
      // Add the swipe-in class after a short delay
      setTimeout(() => {
        targetSection.classList.add('section--swipe-in');
      }, 200);
    }
  });
});

const sections = Array.from(document.querySelectorAll('section'));
const arrow = document.getElementById('static-arrow');

arrow.addEventListener('click', function(e) {
    e.preventDefault();
    // Find the first section below the current scroll position
    const scrollY = window.scrollY;
    const nextSection = sections.find(sec => sec.offsetTop > scrollY + 10);
    if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        // If at the end, scroll to the top
        sections[0].scrollIntoView({ behavior: 'smooth' });
    }
});