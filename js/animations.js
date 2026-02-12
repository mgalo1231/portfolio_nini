/* ========================================
   GSAP Animations
   ======================================== */

if (typeof gsap !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  document.addEventListener('DOMContentLoaded', () => {
    initGSAPAnimations();
  });
}

function initGSAPAnimations() {
  initHeroAnimations();
  initFloatingStars();
  initSectionAnimations();
  initWorkCardsAnimation();
}

/* -------- Hero Entrance Animation -------- */
function initHeroAnimations() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  
  const tl = gsap.timeline({ delay: 3.5 });
  
  tl.from('.hero__subtitle', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
  })
  .from('.hero__title', {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  }, '-=0.4')
  .from('.hero__portfolio-label', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
  }, '-=0.4')
  .from('.hero__tagline', {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
  }, '-=0.4')
  .from('.hero__scroll', {
    y: 20,
    opacity: 0,
    duration: 0.6,
    ease: 'power3.out',
  }, '-=0.2')
  .from('.hero__deco-star', {
    scale: 0,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: 'back.out(1.7)',
  }, '-=0.8');
}

/* -------- Floating Stars Animation -------- */
function initFloatingStars() {
  const stars = document.querySelectorAll('.hero__deco-star');
  
  stars.forEach((star, index) => {
    gsap.to(star, {
      y: 'random(-20, 20)',
      x: 'random(-10, 10)',
      rotation: 'random(-15, 15)',
      duration: 'random(3, 5)',
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: index * 0.2,
    });
  });
}

/* -------- Section Scroll Animations -------- */
function initSectionAnimations() {
  gsap.from('.profile__image-wrapper', {
    scrollTrigger: {
      trigger: '.profile',
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    x: -50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  });
  
  gsap.from('.profile__info > *', {
    scrollTrigger: {
      trigger: '.profile',
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
  });
  
  gsap.utils.toArray('.section-header').forEach((header) => {
    gsap.from(header, {
      scrollTrigger: {
        trigger: header,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    });
    
    const line = header.querySelector('.section-line');
    if (line) {
      gsap.from(line, {
        scrollTrigger: {
          trigger: header,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 1,
        ease: 'power3.out',
        delay: 0.3,
      });
    }
  });
}

/* -------- Work Cards Stagger Animation -------- */
function initWorkCardsAnimation() {
  const workCards = document.querySelectorAll('.work-card-v2');
  if (workCards.length === 0) return;
  
  gsap.from(workCards, {
    scrollTrigger: {
      trigger: '.works-grid',
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: { amount: 0.6, from: 'start' },
    ease: 'power3.out',
  });
}
