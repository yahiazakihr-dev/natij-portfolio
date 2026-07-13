document.addEventListener('DOMContentLoaded', function() {
  initParticles();
  initScrollAnimations();
  initNavbar();
  initSearch();
  initCart();
  initWishlist();
  initTheme();
  initBackToTop();
  initProductCards();
  initCategories();
  initCarousel();
  initTestimonials();
  initFeatures();
  initInsta();
  initNewsletter();
  initSmoothScroll();
  initMouseParallax();
  updateWishlistUI();
  updateCartUI();
});

// ========== PARTICLES ==========
function initParticles() {
  var container = document.getElementById('particles');
  if (!container) return;
  for (var i = 0; i < 50; i++) {
    var p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.top = Math.random() * 100 + '%';
    p.style.animationDelay = Math.random() * 6 + 's';
    p.style.animationDuration = (4 + Math.random() * 4) + 's';
    p.style.width = p.style.height = (2 + Math.random() * 4) + 'px';
    container.appendChild(p);
  }
}

// ========== SCROLL ANIMATIONS ==========
function initScrollAnimations() {
  var els = document.querySelectorAll('[data-animate]');
  if (!els.length) return;
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        setTimeout(function() { e.target.classList.add('visible'); }, parseInt(e.target.getAttribute('data-delay')) || 0);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(function(el) { obs.observe(el); });
}

// ========== NAVBAR ==========
function initNavbar() {
  var nav = document.getElementById('navbar');
  if (!nav) return;
  window.addEventListener('scroll', function() {
    requestAnimationFrame(function() {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    });
  });
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('navMenu');
  if (toggle && menu) {
    toggle.addEventListener('click', function() {
      toggle.classList.toggle('active');
      menu.classList.toggle('active');
    });
    menu.querySelectorAll('.nav-link').forEach(function(l) {
      l.addEventListener('click', function() {
        toggle.classList.remove('active');
        menu.classList.remove('active');
      });
    });
  }
  // Active link
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(function(l) {
    var href = l.getAttribute('href').split('/').pop();
    if (href === path || (path === '' && href === 'index.html')) l.classList.add('active');
  });
}

// ========== SEARCH ==========
function initSearch() {
  var btn = document.getElementById('searchToggle');
  var overlay = document.getElementById('searchOverlay');
  var close = document.getElementById('searchClose');
  var input = document.getElementById('searchInput');
  if (!btn || !overlay) return;
  btn.addEventListener('click', function() { overlay.classList.add('active'); if (input) setTimeout(function() { input.focus(); }, 300); });
  if (close) close.addEventListener('click', function() { overlay.classList.remove('active'); });
  overlay.addEventListener('click', function(e) { if (e.target === overlay) overlay.classList.remove('active'); });
  if (input) {
    input.addEventListener('keyup', function() {
      var q = input.value.toLowerCase();
      document.querySelectorAll('.suggestion-item').forEach(function(s) { s.style.display = q === '' || s.textContent.toLowerCase().includes(q) ? 'flex' : 'none'; });
    });
    document.querySelectorAll('.suggestion-item').forEach(function(s) {
      s.addEventListener('click', function() {
        var id = parseInt(s.getAttribute('data-product'));
        if (id || id === 0) { overlay.classList.remove('active'); location.href = 'pages/product.html?id=' + id; }
      });
    });
  }
}

// ========== CART ==========
function initCart() {
  var btn = document.getElementById('cartBtn');
  var close = document.getElementById('cartClose');
  var overlay = document.getElementById('overlay');
  if (btn) btn.addEventListener('click', openCart);
  if (close) close.addEventListener('click', closeCart);
  if (overlay) overlay.addEventListener('click', closeCart);
}

// ========== WISHLIST ==========
function initWishlist() {
  var btn = document.getElementById('wishlistBtn');
  if (btn) btn.addEventListener('click', function() { location.href = 'pages/wishlist.html'; });
}

// ========== THEME ==========
function initTheme() {
  var btn = document.getElementById('themeToggle');
  if (!btn) return;
  var html = document.documentElement;
  if (localStorage.getItem('ec_theme') === 'dark') { html.setAttribute('data-theme', 'dark'); btn.innerHTML = '<i class="fas fa-sun"></i>'; }
  btn.addEventListener('click', function() {
    var isDark = html.getAttribute('data-theme') === 'dark';
    html.setAttribute('data-theme', isDark ? 'light' : 'dark');
    btn.innerHTML = isDark ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    localStorage.setItem('ec_theme', isDark ? 'light' : 'dark');
  });
}

// ========== BACK TO TOP ==========
function initBackToTop() {
  var btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', function() { btn.classList.toggle('visible', window.scrollY > 500); });
  btn.addEventListener('click', function() { window.scrollTo({ top: 0, behavior: 'smooth' }); });
}

// ========== PRODUCT CARDS ==========
function initProductCards() {
  var fg = document.getElementById('featuredGrid');
  if (fg) renderProducts(fg, products.slice(0, 8));
  var ng = document.getElementById('newArrivalsGrid');
  if (ng) renderProducts(ng, products.filter(function(p) { return p.tags && p.tags.indexOf('new') > -1; }).slice(0, 4));
  // If new arrivals empty, show first 4
  if (ng && ng.children.length === 0) renderProducts(ng, products.slice(0, 4));
}

function renderProducts(container, data) {
  container.innerHTML = data.map(function(p) {
    var stars = '<i class="fas fa-star"></i>'.repeat(p.rating);
    var badges = (p.tags || []).map(function(t) {
      var cls = t === 'new' ? 'badge-new' : t === 'exclusive' ? 'badge-exclusive' : t === 'bestseller' ? 'badge-bestseller' : t === 'sale' ? 'badge-sale' : 'badge-new';
      return '<span class="product-badge ' + cls + '">' + t + '</span>';
    }).join('');
    var oldPrice = p.oldPrice ? '<span class="original">$' + p.oldPrice.toFixed(2) + '</span>' : '';
    var wlActive = wishlist.indexOf(p.id) > -1 ? 'active' : '';
    return '<div class="product-card" data-id="' + p.id + '">' +
      '<div class="product-image">' +
      (badges ? '<div class="product-badges">' + badges + '</div>' : '') +
      '<button class="product-wishlist ' + wlActive + '" data-id="' + p.id + '" onclick="event.stopPropagation(); toggleWishlist(' + p.id + '); this.classList.toggle(\'active\', isWishlisted(' + p.id + '));"><i class="fas fa-heart"></i></button>' +
      '<img src="' + p.image + '" alt="' + p.name + '" loading="lazy" />' +
      '</div>' +
      '<div class="product-info">' +
      '<div class="product-name">' + p.name + '</div>' +
      '<div class="product-desc">' + p.description + '</div>' +
      '<div class="product-price-row">' +
      '<div class="product-price">$' + p.price.toFixed(2) + oldPrice + '</div>' +
      '<div class="product-rating">' + stars + '<span>(' + p.reviews + ')</span></div>' +
      '</div>' +
      '<button class="btn btn-gold" onclick="event.stopPropagation(); addToCart(' + p.id + '); updateWishlistUI(); updateCartUI();"><i class="fas fa-shopping-bag"></i> Add to Cart</button>' +
      '</div></div>';
  }).join('');
}

// ========== CATEGORIES ==========
function initCategories() {
  var grid = document.getElementById('categoriesGrid');
  if (!grid) return;
  grid.innerHTML = categories_data.map(function(c) {
    var href = c.name.toLowerCase().includes('men') ? 'men' : c.name.toLowerCase().includes('women') ? 'women' : c.name.toLowerCase().includes('orient') ? 'collections' : c.name.toLowerCase().includes('french') ? 'collections' : c.name.toLowerCase().includes('arabic') ? 'collections' : 'collections';
    return '<a href="pages/' + href + '.html" class="category-card"><img src="' + c.img + '" alt="' + c.name + '" loading="lazy" /><div class="category-overlay"><i class="fas ' + c.icon + '"></i><h3>' + c.name + '</h3><span>' + c.count + ' Products</span></div></a>';
  }).join('');
}

// ========== CAROUSEL ==========
function initCarousel() {
  var carousel = document.getElementById('carousel');
  if (!carousel) return;
  var carouselData = products.filter(function(p) { return p.tags && p.tags.indexOf('bestseller') > -1; });
  if (carouselData.length < 3) carouselData = products.slice(0, 6);
  renderProducts(carousel, carouselData);
  
  var prev = document.getElementById('carouselPrev');
  var next = document.getElementById('carouselNext');
  var dots = document.getElementById('carouselDots');
  if (!prev || !next) return;
  
  var cards = carousel.querySelectorAll('.product-card');
  var cardWidth = 100 / (window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : window.innerWidth < 1280 ? 3 : 4);
  var gap = 24; // px gap
  var currentIdx = 0;
  var totalPages = Math.max(1, cards.length - Math.floor(100 / cardWidth) + 1);
  
  // Dots
  if (dots) {
    for (var i = 0; i < totalPages; i++) {
      var dot = document.createElement('button');
      dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
      dot.addEventListener('click', function() { goTo(Array.from(this.parentElement.children).indexOf(this)); });
      dots.appendChild(dot);
    }
  }
  
  function goTo(idx) {
    idx = Math.max(0, Math.min(idx, totalPages - 1));
    currentIdx = idx;
    var perPage = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
    var offset = -(idx * (100 / perPage)) + '%';
    carousel.style.transform = 'translateX(' + offset + ')';
    if (dots) dots.querySelectorAll('.carousel-dot').forEach(function(d, i) { d.classList.toggle('active', i === idx); });
  }
  
  prev.addEventListener('click', function() { goTo(currentIdx - 1); });
  next.addEventListener('click', function() { goTo(currentIdx + 1); });
  
  // Auto-play
  var autoPlay = setInterval(function() { goTo(currentIdx + 1); }, 4000);
  carousel.addEventListener('mouseenter', function() { clearInterval(autoPlay); });
  carousel.addEventListener('mouseleave', function() { autoPlay = setInterval(function() { goTo(currentIdx + 1); }, 4000); });
}

// ========== TESTIMONIALS ==========
function initTestimonials() {
  var carousel = document.getElementById('testimonialCarousel');
  if (!carousel) return;
  var html = testimonials_data.map(function(t) {
    return '<div class="testimonial-card"><div class="testimonial-stars">' + '<i class="fas fa-star"></i>'.repeat(5) + '</div><p class="testimonial-text">"' + t.text + '"</p><div class="testimonial-author"><img src="' + t.avatar + '" alt="' + t.name + '" /><div><h4>' + t.name + '</h4><span>' + t.location + '</span></div></div></div>';
  }).join('');
  carousel.innerHTML = html;
  
  var idx = 0;
  var total = testimonials_data.length;
  var perPage = Math.min(3, total);
  function slideTestimonials() {
    // Update - smooth scroll by px
    var cards = carousel.querySelectorAll('.testimonial-card');
    var cardW = cards.length > 0 ? cards[0].offsetWidth + 24 : 400;
    carousel.style.transform = 'translateX(-' + (idx * cardW) + 'px)';
    idx = (idx + 1) % (total - perPage + 1);
  }
  // Reset on resize
  window.addEventListener('resize', function() { idx = 0; slideTestimonials(); });
  setInterval(slideTestimonials, 4000);
}

// ========== FEATURES ==========
function initFeatures() {
  var grid = document.getElementById('featuresGrid');
  if (!grid) return;
  grid.innerHTML = features_data.map(function(f) {
    return '<div class="feature-card"><i class="fas ' + f.icon + '"></i><h4>' + f.title + '</h4><p>' + f.description + '</p></div>';
  }).join('');
}

// ========== INSTAGRAM ==========
function initInsta() {
  var grid = document.getElementById('instaGrid');
  if (!grid) return;
  var html = insta_data.map(function(i) {
    return '<div class="insta-item"><img src="' + i.img + '" alt="Instagram" loading="lazy" /><div class="insta-overlay"><span><i class="fas fa-heart"></i> ' + i.likes + '</span><span><i class="fas fa-comment"></i> 24</span></div></div>';
  }).join('');
  grid.innerHTML = html;
  // Lightbox
  grid.addEventListener('click', function(e) {
    var img = e.target.closest('.insta-item');
    if (!img) return;
    var src = img.querySelector('img').src;
    openLightbox(src);
  });
}

function openLightbox(src) {
  var lb = document.createElement('div');
  lb.className = 'lightbox active';
  lb.innerHTML = '<button class="lightbox-close" onclick="this.parentElement.remove()"><i class="fas fa-times"></i></button><img src="' + src + '" alt="" />';
  lb.addEventListener('click', function(e) { if (e.target === lb) lb.remove(); });
  document.body.appendChild(lb);
}

// ========== NEWSLETTER ==========
function initNewsletter() {
  var form = document.getElementById('newsletterForm');
  if (!form) return;
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var input = form.querySelector('input');
    if (input && input.value) { showToast('Welcome to the Essence Club! Check your email.'); input.value = ''; }
  });
}

// ========== SMOOTH SCROLL ==========
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function(a) {
    a.addEventListener('click', function(e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });
}

// ========== MOUSE PARALLAX ==========
function initMouseParallax() {
  var hero = document.querySelector('.hero-visual');
  if (!hero) return;
  document.addEventListener('mousemove', function(e) {
    var x = (e.clientX / window.innerWidth - 0.5) * 10;
    var y = (e.clientY / window.innerHeight - 0.5) * 10;
    hero.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
  });
}

// Product page done inline
