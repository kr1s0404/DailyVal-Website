document.addEventListener('DOMContentLoaded', () => {
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (mobileNavToggle && mainNav) {
    mobileNavToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
      
      // Change icon based on menu state
      const icon = mobileNavToggle.querySelector('i');
      if (icon) {
        if (mainNav.classList.contains('active')) {
          icon.classList.remove('uil-bars');
          icon.classList.add('uil-times');
        } else {
          icon.classList.remove('uil-times');
          icon.classList.add('uil-bars');
        }
      }
    });
  }
}); 