// ============================================
// DAILYVAL - ENHANCED INTERACTIVE FEATURES
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  // ============================================
  // MOBILE NAVIGATION
  // ============================================
  
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  const navContainer = document.querySelector('.glass-header');
  
  if (mobileNavToggle && mainNav) {
    mobileNavToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
      mobileNavToggle.classList.toggle('active');
      
      // Animate hamburger menu
      const spans = mobileNavToggle.querySelectorAll('span');
      if (mainNav.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
      } else {
        spans[0].style.transform = 'rotate(0) translate(0, 0)';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'rotate(0) translate(0, 0)';
      }
    });
  }

  // ============================================
  // SCROLL PROGRESS INDICATOR
  // ============================================
  
  const scrollIndicator = document.querySelector('.scroll-indicator');
  
  function updateScrollProgress() {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    if (scrollIndicator) {
      scrollIndicator.style.transform = `scaleX(${scrollPercent / 100})`;
    }
  }
  
  window.addEventListener('scroll', updateScrollProgress);

  // ============================================
  // SMOOTH SCROLLING FOR NAVIGATION LINKS
  // ============================================
  
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Close mobile menu if open
        if (mainNav && mainNav.classList.contains('active')) {
          mainNav.classList.remove('active');
          mobileNavToggle.classList.remove('active');
          const spans = mobileNavToggle.querySelectorAll('span');
          spans[0].style.transform = 'rotate(0) translate(0, 0)';
          spans[1].style.opacity = '1';
          spans[2].style.transform = 'rotate(0) translate(0, 0)';
        }
      }
    });
  });

  // ============================================
  // ACTIVE NAVIGATION HIGHLIGHT
  // ============================================
  
  const sections = document.querySelectorAll('section[id]');
  
  function highlightActiveNavLink() {
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      const navLink = document.querySelector(`a[href="#${sectionId}"]`);
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        // Remove active class from all nav links
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
        });
        
        // Add active class to current nav link
        if (navLink) {
          navLink.classList.add('active');
        }
      }
    });
  }
  
  window.addEventListener('scroll', highlightActiveNavLink);

  // ============================================
  // GLASS HEADER EFFECT ON SCROLL
  // ============================================
  
  function updateHeaderOnScroll() {
    const scrollTop = window.pageYOffset;
    
    if (navContainer) {
      if (scrollTop > 50) {
        navContainer.style.background = 'rgba(0, 0, 0, 0.95)';
        navContainer.style.backdropFilter = 'blur(20px)';
      } else {
        navContainer.style.background = 'rgba(0, 0, 0, 0.8)';
        navContainer.style.backdropFilter = 'blur(20px)';
      }
    }
  }
  
  window.addEventListener('scroll', updateHeaderOnScroll);

  // ============================================
  // FEATURE CARDS INTERACTION
  // ============================================
  
  const featureCards = document.querySelectorAll('.feature-card');
  
  featureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-12px) scale(1.02)';
      card.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
    });
  });

  // ============================================
  // SHOWCASE CARDS INTERACTION
  // ============================================
  
  const showcaseCards = document.querySelectorAll('.showcase-card');
  
  showcaseCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-8px)';
      card.style.boxShadow = '0 16px 64px rgba(0, 0, 0, 0.3)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2)';
    });
  });

  // ============================================
  // INTERSECTION OBSERVER FOR ANIMATIONS
  // ============================================
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-slide-up');
      }
    });
  }, observerOptions);
  
  // Observe all cards and sections
  const elementsToAnimate = document.querySelectorAll('.feature-card, .showcase-card, .section-header');
  elementsToAnimate.forEach(element => {
    observer.observe(element);
  });

  // ============================================
  // BUTTON INTERACTIONS
  // ============================================
  
  const buttons = document.querySelectorAll('.primary-btn, .secondary-btn, .download-btn');
  
  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'translateY(-3px)';
    });
    
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translateY(0)';
    });
  });

  // ============================================
  // PARALLAX EFFECT FOR GRADIENT ORBS
  // ============================================
  
  function updateParallax() {
    const scrollTop = window.pageYOffset;
    const orbs = document.querySelectorAll('.gradient-orb');
    
    orbs.forEach((orb, index) => {
      const speed = 0.1 + (index * 0.05);
      const yPos = -(scrollTop * speed);
      orb.style.transform = `translate3d(0, ${yPos}px, 0)`;
    });
  }
  
  window.addEventListener('scroll', updateParallax);

  // ============================================
  // STATS COUNTER ANIMATION
  // ============================================
  
  function animateCounters() {
    const counters = document.querySelectorAll('.stat-item h3');
    
    counters.forEach(counter => {
      const target = counter.textContent;
      const numericTarget = parseInt(target.replace(/[^\d]/g, ''));
      const suffix = target.replace(/[\d]/g, '');
      
      if (numericTarget) {
        let current = 0;
        const increment = numericTarget / 60; // 60 frames for 1 second
        
        const updateCounter = () => {
          if (current < numericTarget) {
            current += increment;
            counter.textContent = Math.ceil(current) + suffix;
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target;
          }
        };
        
        // Start animation when element is visible
        const counterObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              updateCounter();
              counterObserver.unobserve(entry.target);
            }
          });
        });
        
        counterObserver.observe(counter);
      }
    });
  }
  
  animateCounters();

  // ============================================
  // UTILITY FUNCTIONS
  // ============================================
  
  // Scroll to features section
  window.scrollToFeatures = function() {
    const featuresSection = document.querySelector('#features');
    if (featuresSection) {
      featuresSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Debounce function for scroll events
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

  // Optimized scroll handlers
  const debouncedScrollHandler = debounce(() => {
    updateScrollProgress();
    highlightActiveNavLink();
    updateHeaderOnScroll();
    updateParallax();
  }, 10);

  window.addEventListener('scroll', debouncedScrollHandler);

  // ============================================
  // KEYBOARD NAVIGATION SUPPORT
  // ============================================
  
  document.addEventListener('keydown', (e) => {
    // ESC key closes mobile menu
    if (e.key === 'Escape' && mainNav && mainNav.classList.contains('active')) {
      mainNav.classList.remove('active');
      mobileNavToggle.classList.remove('active');
      const spans = mobileNavToggle.querySelectorAll('span');
      spans[0].style.transform = 'rotate(0) translate(0, 0)';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'rotate(0) translate(0, 0)';
    }
  });

  // ============================================
  // PERFORMANCE OPTIMIZATION
  // ============================================
  
  // Reduce motion for users who prefer it
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  
  if (prefersReducedMotion.matches) {
    // Disable animations for users who prefer reduced motion
    document.documentElement.style.setProperty('--transition-fast', '0.1s');
    document.documentElement.style.setProperty('--transition-normal', '0.1s');
    document.documentElement.style.setProperty('--transition-slow', '0.2s');
  }

  // Initialize everything
  console.log('DailyVal website initialized with enhanced features! 🚀');
}); 