// Wait for all libraries to load before initializing
let gsapLoaded = false;
let threeLoaded = false;

// Check if GSAP is available
function checkGSAP() {
    if (typeof gsap !== 'undefined') {
        gsapLoaded = true;
        if (typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
        }
        initializeAnimations();
    } else {
        setTimeout(checkGSAP, 100);
    }
}

// Check if Three.js is available
function checkThreeJS() {
    if (typeof THREE !== 'undefined') {
        threeLoaded = true;
        initThreeJS();
    } else {
        setTimeout(checkThreeJS, 100);
    }
}

// Three.js Background Setup
let scene, camera, renderer, particles;

function initThreeJS() {
    try {
        if (typeof THREE === 'undefined') {
            console.log('Three.js not loaded, skipping 3D background');
            return;
        }

        const canvas = document.getElementById('hero-canvas');
        if (!canvas) {
            console.log('Hero canvas not found');
            return;
        }

        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        renderer = new THREE.WebGLRenderer({ 
            canvas: canvas,
            alpha: true,
            antialias: true 
        });
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);

        // Create particles
        const geometry = new THREE.BufferGeometry();
        const particleCount = 1000;
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount * 3; i += 3) {
            positions[i] = (Math.random() - 0.5) * 20;
            positions[i + 1] = (Math.random() - 0.5) * 20;
            positions[i + 2] = (Math.random() - 0.5) * 20;

            colors[i] = Math.random() * 0.5 + 0.5;
            colors[i + 1] = Math.random() * 0.5 + 0.5;
            colors[i + 2] = Math.random() * 0.5 + 0.5;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const material = new THREE.PointsMaterial({
            size: 0.05,
            vertexColors: true,
            transparent: true,
            opacity: 0.8
        });

        particles = new THREE.Points(geometry, material);
        scene.add(particles);

        camera.position.z = 5;

        animate();
    } catch (error) {
        console.log('Three.js initialization failed:', error);
    }
}

function animate() {
    if (!renderer || !scene || !camera) return;
    
    requestAnimationFrame(animate);

    if (particles) {
        particles.rotation.x += 0.001;
        particles.rotation.y += 0.002;
    }

    renderer.render(scene, camera);
}

// Handle window resize
function onWindowResize() {
    if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
}

// Navigation functionality
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger) {
                hamburger.classList.remove('active');
            }
            if (navMenu) {
                navMenu.classList.remove('active');
            }
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Hero Section Animations
function initHeroAnimations() {
    if (!gsapLoaded) {
        console.log('GSAP not loaded, skipping hero animations');
        return;
    }

    try {
        const tl = gsap.timeline();

        tl.from('.greeting', {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power3.out'
        })
        .from('.name', {
            duration: 1.2,
            y: 100,
            opacity: 0,
            ease: 'power3.out'
        }, '-=0.5')
        .from('.title', {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power3.out'
        }, '-=0.8')
        .from('.hero-description', {
            duration: 1,
            y: 30,
            opacity: 0,
            ease: 'power3.out'
        }, '-=0.6')
        .from('.hero-buttons', {
            duration: 1,
            y: 30,
            opacity: 0,
            ease: 'power3.out'
        }, '-=0.4')
        .from('.floating-elements .element', {
            duration: 1.5,
            scale: 0,
            opacity: 0,
            stagger: 0.2,
            ease: 'back.out(1.7)'
        }, '-=0.8');
    } catch (error) {
        console.log('Hero animations failed:', error);
    }
}

// Scroll Animations
function initScrollAnimations() {
    if (!gsapLoaded) {
        console.log('GSAP not loaded, skipping scroll animations');
        return;
    }

    try {
        // About section animations
        gsap.from('.about-card', {
            scrollTrigger: {
                trigger: '.about',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            duration: 1,
            y: 50,
            opacity: 0,
            stagger: 0.2,
            ease: 'power3.out'
        });

        gsap.from('.stat-item', {
            scrollTrigger: {
                trigger: '.about-stats',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            duration: 1,
            scale: 0.8,
            opacity: 0,
            stagger: 0.2,
            ease: 'back.out(1.7)'
        });

        // Skills section animations
        gsap.from('.skill-category', {
            scrollTrigger: {
                trigger: '.skills',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            duration: 1,
            y: 50,
            opacity: 0,
            stagger: 0.3,
            ease: 'power3.out'
        });

        gsap.from('.skill-item', {
            scrollTrigger: {
                trigger: '.skill-items',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            duration: 0.8,
            scale: 0,
            opacity: 0,
            stagger: 0.1,
            ease: 'back.out(1.7)'
        });

        // Projects section animations
        gsap.from('.project-card', {
            scrollTrigger: {
                trigger: '.projects',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            duration: 1,
            y: 100,
            opacity: 0,
            stagger: 0.3,
            ease: 'power3.out'
        });

        // Contact section animations
        gsap.from('.contact-item', {
            scrollTrigger: {
                trigger: '.contact-info',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            duration: 1,
            x: -50,
            opacity: 0,
            stagger: 0.2,
            ease: 'power3.out'
        });

        gsap.from('.contact-form', {
            scrollTrigger: {
                trigger: '.contact-form',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            duration: 1,
            x: 50,
            opacity: 0,
            ease: 'power3.out'
        });
    } catch (error) {
        console.log('Scroll animations failed:', error);
    }
}

// Counter Animation
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };

        // Use Intersection Observer instead of ScrollTrigger
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(counter);
    });
}

// Parallax Effect for Floating Elements
function initParallax() {
    const elements = document.querySelectorAll('.element');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        elements.forEach(element => {
            const speed = element.getAttribute('data-speed');
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Skill Item Interactions
function initSkillInteractions() {
    const skillItems = document.querySelectorAll('.skill-item');
    console.log('Found skill items:', skillItems.length);
    
    skillItems.forEach((item, index) => {
        console.log(`Skill item ${index}:`, item.textContent.trim());
        
        // Ensure item is visible
        item.style.opacity = '1';
        item.style.transform = 'none';
        
        item.addEventListener('mouseenter', () => {
            if (gsapLoaded) {
                gsap.to(item, {
                    duration: 0.3,
                    scale: 1.1,
                    ease: 'power2.out'
                });
            } else {
                item.style.transform = 'scale(1.1)';
            }
        });
        
        item.addEventListener('mouseleave', () => {
            if (gsapLoaded) {
                gsap.to(item, {
                    duration: 0.3,
                    scale: 1,
                    ease: 'power2.out'
                });
            } else {
                item.style.transform = 'scale(1)';
            }
        });
    });
}

// Navbar scroll effect
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = 'none';
            }
        });
    }
}

// Typing effect for hero title
function initTypingEffect() {
    const title = document.querySelector('.title');
    if (!title) return;
    
    const text = title.textContent;
    title.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start typing effect after initial animations
    setTimeout(typeWriter, 2000);
}

// Initialize animations when GSAP is ready
function initializeAnimations() {
    if (gsapLoaded) {
        initHeroAnimations();
        initScrollAnimations();
    }
}

// Force display all skill items
function ensureSkillItemsVisible() {
    const skillItems = document.querySelectorAll('.skill-item');
    const skillCategories = document.querySelectorAll('.skill-category');
    
    skillCategories.forEach(category => {
        category.style.opacity = '1';
        category.style.transform = 'none';
    });
    
    skillItems.forEach(item => {
        item.style.opacity = '1';
        item.style.transform = 'none';
        item.style.display = 'flex';
        
        // Ensure icon and text are visible
        const icon = item.querySelector('i');
        const text = item.querySelector('span');
        
        if (icon) {
            icon.style.display = 'block';
            icon.style.opacity = '1';
        }
        
        if (text) {
            text.style.display = 'block';
            text.style.opacity = '1';
        }
    });
    
    console.log('Skill items visibility ensured');
}

// Project link functionality
function initProjectLinks() {
    const projectLinks = document.querySelectorAll('.project-link');
    
    projectLinks.forEach((link, index) => {
        console.log(`Project link ${index}:`, link.href);
        
        // Ensure link is clickable
        link.style.pointerEvents = 'auto';
        link.style.cursor = 'pointer';
        
        // Add click event listener for debugging
        link.addEventListener('click', (e) => {
            console.log('Project link clicked:', link.href);
            
            // If it's a placeholder link, prevent navigation
            if (link.href === '#' || link.href === window.location.href + '#') {
                e.preventDefault();
                console.log('Placeholder link clicked - preventing navigation');
                return;
            }
            
            // Allow navigation for real links
            console.log('Navigating to:', link.href);
        });
        
        // Add hover effect
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'scale(1.1)';
            link.style.background = 'var(--primary-color)';
            link.style.color = 'white';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'scale(1)';
            link.style.background = 'white';
            link.style.color = 'var(--primary-color)';
        });
    });
    
    console.log('Project links initialized:', projectLinks.length);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize basic functionality first
    initNavigation();
    initCounterAnimation();
    initParallax();
    initSkillInteractions();
    initNavbarScroll();
    initTypingEffect();
    initProjectLinks();
    
    // Ensure skill items are visible
    ensureSkillItemsVisible();
    
    // Check for external libraries
    checkGSAP();
    checkThreeJS();
    
    // Handle window resize
    window.addEventListener('resize', onWindowResize);
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Smooth reveal animations for sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for reveal animations
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
    animatedElements.forEach(el => observer.observe(el));
});

// Add some interactive effects
document.addEventListener('DOMContentLoaded', () => {
    // Cursor trail effect
    const cursor = document.createElement('div');
    cursor.className = 'cursor-trail';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: var(--primary-color);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        opacity: 0.6;
        transform: translate(-50%, -50%);
        transition: all 0.1s ease;
    `;
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Hide cursor on mobile
    if ('ontouchstart' in window) {
        cursor.style.display = 'none';
    }
});

// Add some particle effects to the background
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
    `;
    document.body.appendChild(particlesContainer);

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: var(--primary-color);
            border-radius: 50%;
            opacity: 0.3;
            animation: float-particle 6s ease-in-out infinite;
            animation-delay: ${Math.random() * 6}s;
        `;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particlesContainer.appendChild(particle);
    }
}

// Add CSS for particle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float-particle {
        0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
        50% { transform: translateY(-20px) translateX(10px); opacity: 0.6; }
    }
`;
document.head.appendChild(style);

// Initialize particles
document.addEventListener('DOMContentLoaded', createParticles); 