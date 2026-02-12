/* ========================================
   Main JavaScript
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
  initLoadingScreen();
  initHeader();
  initScrollAnimations();
  initBackToTop();
  initMobileMenu();
  initSmoothScroll();
  initCustomCursor();
  initMagneticButtons();
  initTiltCards();
  initTextScramble();
  initParallaxDecorations();
  initCopyButtons();
});

/* -------- Loading Screen -------- */
function initLoadingScreen() {
  const loadingScreen = document.querySelector('.loading-screen');
  if (!loadingScreen) return;
  
  const minLoadTime = 3000;
  const startTime = Date.now();
  
  window.addEventListener('load', () => {
    const elapsedTime = Date.now() - startTime;
    const remainingTime = Math.max(0, minLoadTime - elapsedTime);
    
    setTimeout(() => {
      loadingScreen.classList.add('hidden');
      document.body.classList.add('loaded');
      setTimeout(() => {
        loadingScreen.style.display = 'none';
      }, 800);
    }, remainingTime);
  });
}

/* -------- Header Scroll Effect -------- */
function initHeader() {
  const header = document.querySelector('.header');
  if (!header) return;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  });
}

/* -------- Scroll Animations -------- */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll(
    '.fade-in-up, .fade-in, .slide-in-left, .slide-in-right, .scale-in, .stagger-children, .img-reveal, .text-reveal'
  );
  
  if (animatedElements.length === 0) return;
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { root: null, rootMargin: '0px 0px -100px 0px', threshold: 0.1 }
  );
  
  animatedElements.forEach((el) => observer.observe(el));
}

/* -------- Back to Top Button -------- */
function initBackToTop() {
  const backToTop = document.querySelector('.back-to-top');
  if (!backToTop) return;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });
  
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* -------- Mobile Menu -------- */
function initMobileMenu() {
  const menuBtn = document.querySelector('.header__menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeBtn = document.querySelector('.mobile-menu__close');
  const menuLinks = document.querySelectorAll('.mobile-menu__link');
  
  if (!menuBtn || !mobileMenu) return;
  
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
  
  const closeMenu = () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  };
  
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  menuLinks.forEach((link) => link.addEventListener('click', closeMenu));
}

/* -------- Smooth Scroll -------- */
function initSmoothScroll() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (!target) return;
      
      e.preventDefault();
      const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
      
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    });
  });
}

/* -------- Custom Cursor -------- */
function initCustomCursor() {
  if (window.innerWidth < 1024) return;
  
  const cursorOuter = document.createElement('div');
  const cursorInner = document.createElement('div');
  cursorOuter.className = 'cursor-outer';
  cursorInner.className = 'cursor-inner';
  document.body.appendChild(cursorOuter);
  document.body.appendChild(cursorInner);
  
  let mouseX = 0, mouseY = 0;
  let outerX = 0, outerY = 0;
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorInner.style.left = mouseX + 'px';
    cursorInner.style.top = mouseY + 'px';
  });
  
  function animateCursor() {
    outerX += (mouseX - outerX) * 0.15;
    outerY += (mouseY - outerY) * 0.15;
    cursorOuter.style.left = outerX + 'px';
    cursorOuter.style.top = outerY + 'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();
  
  const hoverTargets = document.querySelectorAll('a, button, .work-card-v2, .tag, .skill-logo');
  
  hoverTargets.forEach(target => {
    target.addEventListener('mouseenter', () => {
      cursorOuter.classList.add('cursor-hover');
      cursorInner.classList.add('cursor-hover');
    });
    target.addEventListener('mouseleave', () => {
      cursorOuter.classList.remove('cursor-hover');
      cursorInner.classList.remove('cursor-hover');
    });
  });
}

/* -------- Magnetic Buttons -------- */
function initMagneticButtons() {
  if (window.innerWidth < 1024) return;
  
  const magneticElements = document.querySelectorAll('.btn, .social-link, .tag');
  
  magneticElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });
    
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'translate(0, 0)';
      el.style.transition = 'transform 0.3s ease';
    });
    
    el.addEventListener('mouseenter', () => {
      el.style.transition = 'none';
    });
  });
}

/* -------- Tilt Effect for Cards -------- */
function initTiltCards() {
  if (window.innerWidth < 1024) return;
  
  const cards = document.querySelectorAll('.work-card-v2');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
  });
}

/* -------- Text Scramble Effect -------- */
function initTextScramble() {
  const scrambleElements = document.querySelectorAll('.hero__portfolio-label');
  
  scrambleElements.forEach(el => {
    const originalText = el.textContent;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789*#@&%';
    let iteration = 0;
    let frameCount = 0;
    
    const scramble = () => {
      frameCount++;
      if (frameCount % 3 !== 0) {
        requestAnimationFrame(scramble);
        return;
      }
      
      el.textContent = originalText
        .split('')
        .map((char, index) => {
          if (index < iteration) return originalText[index];
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');
      
      if (iteration < originalText.length) {
        iteration += 0.15;
        requestAnimationFrame(scramble);
      }
    };
    
    setTimeout(() => {
      iteration = 0;
      frameCount = 0;
      scramble();
    }, 3500);
  });
}

/* -------- Parallax Decorations -------- */
function initParallaxDecorations() {
  if (window.innerWidth < 1024) return;
  
  const decorations = document.querySelectorAll('.hero__deco-star, .deco-float, .deco-pixel-heart');
  
  document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;
    
    decorations.forEach((deco, index) => {
      const speed = (index % 3 + 1) * 15;
      const x = mouseX * speed;
      const y = mouseY * speed;
      deco.style.transform = `translate(${x}px, ${y}px)`;
    });
  });
}

/* -------- Copy to Clipboard -------- */
function initCopyButtons() {
  const copyButtons = document.querySelectorAll('.copy-btn');
  
  copyButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const textToCopy = btn.dataset.copy;
      
      try {
        await navigator.clipboard.writeText(textToCopy);
        btn.classList.add('copied');
        setTimeout(() => btn.classList.remove('copied'), 2000);
      } catch (err) {
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        document.body.appendChild(textArea);
        textArea.select();
        try {
          document.execCommand('copy');
          btn.classList.add('copied');
          setTimeout(() => btn.classList.remove('copied'), 2000);
        } catch (e) {
          console.error('Copy failed:', e);
        }
        document.body.removeChild(textArea);
      }
    });
  });
}

/* -------- Ripple Effect -------- */
function createRipple(event) {
  const button = event.currentTarget;
  const ripple = document.createElement('span');
  ripple.className = 'ripple';
  
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = event.clientX - rect.left - size / 2 + 'px';
  ripple.style.top = event.clientY - rect.top - size / 2 + 'px';
  
  button.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
}

document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', createRipple);
});

/* -------- Utilities -------- */
function debounce(func, wait = 100) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => { clearTimeout(timeout); func(...args); };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function throttle(func, limit = 100) {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
