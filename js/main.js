document.addEventListener('DOMContentLoaded', function() {

    // Fallback logo handler
    function handleLogoFallback(img) {
        var svgFallback = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" rx="20" fill="%231a5c2e"/%3E%3Ctext x="50" y="68" font-family="Arial" font-size="50" font-weight="bold" fill="%23f5b8c4" text-anchor="middle"%3Eن%3C/text%3E%3C/svg%3E';
        img.onerror = null;
        img.src = svgFallback;
    }

    document.querySelectorAll('img[src="assets/logo.png"]').forEach(function(img) {
        img.onerror = function() { handleLogoFallback(this); };
        if (img.complete && img.naturalWidth === 0) {
            handleLogoFallback(img);
        }
    });

    // Loader
    var loader = document.getElementById('loader');
    window.addEventListener('load', function() {
        setTimeout(function() {
            loader.classList.add('hidden');
        }, 1500);
    });

    // Header scroll effect
    var header = document.getElementById('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    var navToggle = document.getElementById('nav-toggle');
    var navMenu = document.getElementById('nav-menu');
    
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu on link click
    document.querySelectorAll('.nav-link').forEach(function(link) {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe elements
    document.querySelectorAll('.fade-in, .fade-in-right, .fade-in-left, .scale-in, .stagger-children').forEach(function(el) {
        observer.observe(el);
    });

    // Counter animation
    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(function() {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 30);
    }

    // Observe counters
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-count'));
                animateCounter(entry.target, target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-number').forEach(function(counter) {
        counterObserver.observe(counter);
    });

    // Portfolio filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            filterButtons.forEach(function(b) {
                b.classList.remove('active');
            });
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            const items = document.querySelectorAll('.portfolio-item');
            
            items.forEach(function(item) {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Create particles
    const particlesContainer = document.getElementById('particles');
    if (particlesContainer) {
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 10 + 's';
            particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
            particlesContainer.appendChild(particle);
        }
    }

    // GSAP animations (if available)
    if (typeof gsap !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Hero animations
        gsap.from('.hero-greeting', {
            opacity: 0,
            y: 30,
            duration: 1,
            delay: 1.5
        });

        gsap.from('.hero-name', {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: 1.7
        });

        gsap.from('.hero-title', {
            opacity: 0,
            y: 30,
            duration: 1,
            delay: 1.9
        });

        gsap.from('.hero-tagline', {
            opacity: 0,
            y: 30,
            duration: 1,
            delay: 2.1
        });

        gsap.from('.hero-cta', {
            opacity: 0,
            y: 30,
            duration: 1,
            delay: 2.3
        });

        gsap.from('.hero-logo', {
            opacity: 0,
            scale: 0.5,
            duration: 1.5,
            delay: 1.5,
            ease: 'back.out(1.7)'
        });

        // ScrollTrigger animations
        gsap.utils.toArray('.section-header').forEach(function(header) {
            gsap.from(header, {
                scrollTrigger: {
                    trigger: header,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                opacity: 0,
                y: 50,
                duration: 1
            });
        });

        gsap.utils.toArray('.service-card').forEach(function(card, index) {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 0,
                y: 50,
                duration: 0.8,
                delay: index * 0.2
            });
        });

        gsap.utils.toArray('.contact-item').forEach(function(item, index) {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: item,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 0,
                x: -50,
                duration: 0.8,
                delay: index * 0.2
            });
        });
    }

    // Contact form handling
    var contactForm = document.getElementById('contact-form');
    if (contactForm) {
        var inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(function(input) {
            input.addEventListener('blur', function() {
                if (this.value.trim()) {
                    this.style.borderColor = 'var(--primary-light)';
                } else {
                    this.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }
            });
        });

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            var name = document.getElementById('name').value.trim();
            var email = document.getElementById('email').value.trim();
            var message = document.getElementById('message').value.trim();
            
            if (!name || !email || !message) {
                alert('يرجى ملء جميع الحقول');
                return;
            }
            
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('يرجى إدخال بريد إلكتروني صحيح');
                return;
            }
            
            var subject = encodeURIComponent('رسالة من ' + name);
            var body = encodeURIComponent('الاسم: ' + name + '\nالبريد: ' + email + '\n\n' + message);
            window.location.href = 'mailto:natij.team.com@gmail.com?subject=' + subject + '&body=' + body;
            
            contactForm.reset();
            inputs.forEach(function(input) {
                input.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            });
        });
    }

    // Scroll indicator click
    const scrollIndicator = document.getElementById('scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            document.getElementById('about').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});
