// DailyVal Website Interactive Elements
document.addEventListener('DOMContentLoaded', () => {
  initMobileNavigation();
  initFAQAccordion();
  initScrollAnimations();
  initSmoothScrolling();
  initButtonAnimations();
});

// Mobile Navigation
function initMobileNavigation() {
  const mobileNavToggle = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-navigation');

  if (mobileNavToggle && mainNav) {
    mobileNavToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
      mobileNavToggle.setAttribute(
        'aria-expanded',
        mainNav.classList.contains('active') ? 'true' : 'false'
      );

      // Toggle hamburger animation
      const lines = mobileNavToggle.querySelectorAll('.hamburger-line');
      lines.forEach((line, index) => {
        if (mainNav.classList.contains('active')) {
          if (index === 0) line.style.transform = 'rotate(45deg) translate(5px, 5px)';
          if (index === 1) line.style.opacity = '0';
          if (index === 2) line.style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
          line.style.transform = '';
          line.style.opacity = '';
        }
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileNavToggle.contains(e.target) && !mainNav.contains(e.target)) {
        if (mainNav.classList.contains('active')) {
          mainNav.classList.remove('active');
          mobileNavToggle.setAttribute('aria-expanded', 'false');

          // Reset hamburger
          const lines = mobileNavToggle.querySelectorAll('.hamburger-line');
          lines.forEach(line => {
            line.style.transform = '';
            line.style.opacity = '';
          });
        }
      }
    });

    // Close menu when pressing Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mainNav.classList.contains('active')) {
        mainNav.classList.remove('active');
        mobileNavToggle.setAttribute('aria-expanded', 'false');
        mobileNavToggle.focus();

        // Reset hamburger
        const lines = mobileNavToggle.querySelectorAll('.hamburger-line');
        lines.forEach(line => {
          line.style.transform = '';
          line.style.opacity = '';
        });
      }
    });
  }
}

// FAQ Accordion
function initFAQAccordion() {
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const isExpanded = question.getAttribute('aria-expanded') === 'true';

      // Close all other items
      faqQuestions.forEach(otherQuestion => {
        if (otherQuestion !== question) {
          otherQuestion.setAttribute('aria-expanded', 'false');
          const otherAnswer = otherQuestion.nextElementSibling;
          if (otherAnswer) {
            otherAnswer.classList.remove('expanded');
          }
        }
      });

      // Toggle current item
      if (!isExpanded) {
        question.setAttribute('aria-expanded', 'true');
        if (answer) {
          answer.classList.add('expanded');
        }
      } else {
        question.setAttribute('aria-expanded', 'false');
        if (answer) {
          answer.classList.remove('expanded');
        }
      }
    });

    // Keyboard navigation for FAQ
    question.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        question.click();
      }
    });
  });
}

// Scroll Animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';

        // Add staggered animation for feature cards
        if (entry.target.classList.contains('feature-card')) {
          const cards = document.querySelectorAll('.feature-card');
          cards.forEach((card, index) => {
            if (card === entry.target) {
              setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
              }, index * 100);
            }
          });
        }
      }
    });
  }, observerOptions);

  // Observe elements for scroll animations
  const animatedElements = document.querySelectorAll('.feature-card, .faq-item, .contact-method, .stat-card');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// Smooth Scrolling
function initSmoothScrolling() {
  const scrollLinks = document.querySelectorAll('a[href^="#"]');

  scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const headerHeight = document.querySelector('.site-header')?.offsetHeight || 0;
        const targetPosition = targetElement.offsetTop - headerHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Button Animations
function initButtonAnimations() {
  const buttons = document.querySelectorAll('.btn');

  buttons.forEach(button => {
    // Ripple effect
    button.addEventListener('click', function(e) {
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      const ripple = document.createElement('span');
      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
      `;

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  // Add ripple animation styles
  const style = document.createElement('style');
  style.textContent = `
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}

// Header scroll effect
function initHeaderScrollEffect() {
  const header = document.querySelector('.site-header');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 100) {
      header.style.backgroundColor = 'rgba(17, 24, 39, 0.95)';
      header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.backgroundColor = 'rgba(17, 24, 39, 0.8)';
      header.style.boxShadow = 'none';
    }

    lastScrollY = currentScrollY;
  });
}

// Initialize header scroll effect
initHeaderScrollEffect();

// Intersection Observer for animations
function createIntersectionObserver(className, animationClass) {
  const elements = document.querySelectorAll(className);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(animationClass);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(element => observer.observe(element));
}

// Performance optimization
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Optimized scroll handler
const handleScroll = debounce(() => {
  // Add any scroll-based functionality here
}, 16); // ~60fps

window.addEventListener('scroll', handleScroll, { passive: true });

// Preload critical images
function preloadImages() {
  const imageUrls = [
    'images/hero.png',
    'images/app icon.png'
  ];

  imageUrls.forEach(url => {
    const img = new Image();
    img.src = url;
  });
}

// Initialize image preloading
preloadImages();

// Error handling for images
function initImageErrorHandling() {
  const images = document.querySelectorAll('img');

  images.forEach(img => {
    img.addEventListener('error', function() {
      this.style.opacity = '0.5';
      this.alt = '圖片載入失敗';
    });
  });
}

initImageErrorHandling();

// Form validation (if forms are added later)
function initFormValidation() {
  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      const inputs = form.querySelectorAll('input[required], textarea[required]');
      let isValid = true;

      inputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          input.classList.add('error');
        } else {
          input.classList.remove('error');
        }
      });

      if (!isValid) {
        e.preventDefault();
      }
    });
  });
}

// Performance monitoring
function initPerformanceMonitoring() {
  // Monitor page load performance
  window.addEventListener('load', () => {
    const perfData = performance.getEntriesByType('navigation')[0];

    // Log performance metrics (for development)
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart);
      console.log('DOM Content Loaded:', perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart);
    }
  });
}

initPerformanceMonitoring();