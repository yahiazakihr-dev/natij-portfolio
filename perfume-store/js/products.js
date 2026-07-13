const products = [
  {
    id: 0,
    name: "Midnight Oud",
    description: "A captivating blend of agarwood and amber, wrapped in smoky incense.",
    price: 289.00,
    oldPrice: null,
    category: "Men",
    tags: ["bestseller"],
    rating: 5,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&h=700&fit=crop",
      "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=600&h=700&fit=crop"
    ],
    notes: { top: "Bergamot, Saffron", heart: "Rose, Oud", base: "Amber, Musk, Sandalwood" },
    longevity: "10-12 hours",
    projection: "Moderate to Heavy"
  },
  {
    id: 1,
    name: "Rose Noire",
    description: "Dark roses meet blackcurrant and patchouli in this mysterious floral.",
    price: 245.00,
    oldPrice: 295.00,
    category: "Women",
    tags: ["new", "exclusive"],
    rating: 5,
    reviews: 97,
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=600&h=700&fit=crop",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&h=700&fit=crop"
    ],
    notes: { top: "Blackcurrant, Bergamot", heart: "Turkish rose, Jasmine", base: "Patchouli, Musk, Vanilla" },
    longevity: "8-10 hours",
    projection: "Moderate"
  },
  {
    id: 2,
    name: "Sapphire Breeze",
    description: "A refined aquatic fragrance with bergamot, lavender, and cedarwood.",
    price: 320.00,
    oldPrice: null,
    category: "Unisex",
    tags: ["exclusive"],
    rating: 4,
    reviews: 74,
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=600&h=700&fit=crop",
      "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=600&h=700&fit=crop"
    ],
    notes: { top: "Bergamot, pink pepper", heart: "Lavender, sage", base: "Cedarwood, ambroxan" },
    longevity: "8-10 hours",
    projection: "Moderate"
  },
  {
    id: 3,
    name: "Golden Amber",
    description: "Rich amber and vanilla with a touch of saffron and sandalwood.",
    price: 275.00,
    oldPrice: 320.00,
    category: "Women",
    tags: ["sale", "bestseller"],
    rating: 5,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=700&fit=crop",
      "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=600&h=700&fit=crop"
    ],
    notes: { top: "Saffron, Cinnamon", heart: "Amber, Labdanum", base: "Vanilla, Sandalwood, Musk" },
    longevity: "10-12 hours",
    projection: "Moderate to Heavy"
  },
  {
    id: 4,
    name: "Silver Shadow",
    description: "A sleek, modern aromatic fougere with vetiver and musk.",
    price: 265.00,
    oldPrice: null,
    category: "Men",
    tags: ["new"],
    rating: 4,
    reviews: 56,
    image: "https://images.unsplash.com/photo-1585386959984-a85b60ea24d2?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1585386959984-a85b60ea24d2?w=600&h=700&fit=crop",
      "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=600&h=700&fit=crop"
    ],
    notes: { top: "Bergamot, grapefruit", heart: "Lavender, geranium", base: "Vetiver, oakmoss, musks" },
    longevity: "8-10 hours",
    projection: "Moderate"
  },
  {
    id: 5,
    name: "Crystal Orchid",
    description: "Delicate orchid petals with white musk and creamy sandalwood.",
    price: 310.00,
    oldPrice: null,
    category: "Women",
    tags: ["exclusive", "new"],
    rating: 5,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=600&h=700&fit=crop",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=700&fit=crop"
    ],
    notes: { top: "Italian bergamot, pink pepper", heart: "Orchid, freesia", base: "White musk, sandalwood" },
    longevity: "8-10 hours",
    projection: "Moderate to Heavy"
  },
  {
    id: 6,
    name: "Oud Royale",
    description: "An opulent oud infused with saffron, rose, and precious woods.",
    price: 450.00,
    oldPrice: 520.00,
    category: "Unisex",
    tags: ["bestseller"],
    rating: 5,
    reviews: 167,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=700&fit=crop",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&h=700&fit=crop"
    ],
    notes: { top: "Saffron, Bergamot", heart: "Rose, Oud, Jasmine", base: "Ambergris, Musk, Sandalwood" },
    longevity: "12+ hours",
    projection: "Heavy"
  },
  {
    id: 7,
    name: "Aqua Di Fiori",
    description: "A luminous floral marine scent of water lily and white flowers.",
    price: 230.00,
    oldPrice: null,
    tag: "Women",
    tags: ["new"],
    rating: 4,
    reviews: 42,
    image: "https://images.unsplash.com/photo-1597848212628-8bbfc2eb8c1a?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1597848212628-8bbfc2eb8c1a?w=600&h=700&fit=crop",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&h=700&fit=crop"
    ],
    notes: { top: "Bergamot, watery notes", heart: "Water lily, lotus, freesia", base: "White musk, cedar" },
    longevity: "6-8 hours",
    projection: "Light to Moderate"
  },
  {
    id: 8,
    name: "C\u00f4te d'Azur",
    description: "Inspired by the French Riviera, fresh citrus and aromatic herbs.",
    price: 198.00,
    oldPrice: 260.00,
    category: "Men",
    tags: ["sale"],
    rating: 4,
    reviews: 61,
    image: "https://images.unsplash.com/photo-1598550479267-35318f8ab037?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1598550479267-35318f8ab037?w=600&h=700&fit=crop",
      "https://images.unsplash.com/photo-1585386959984-a85b60ea24d2?w=600&h=700&fit=crop"
    ],
    notes: { top: "Bergamot, lemon, mandarin", heart: "Lavender, rosemary, juniper", base: "Vetiver, cedar, musks" },
    longevity: "6-8 hours",
    projection: "Light to Moderate"
  },
  {
    id: 9,
    name: "Velvet Tuberose",
    description: "Rich and creamy tuberose with ylang-ylang and vanilla orchid.",
    price: 280.00,
    oldPrice: null,
    category: "Women",
    tags: ["exclusive"],
    rating: 5,
    reviews: 77,
    image: "https://images.unsplash.com/photo-1608571423080-6115582cffe2?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1608571423080-5582cffe200?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=500&fit=crop"
    ],
    notes: { top: "Bergamot, pink berries", heart: "Tuberose, ylang-ylang, jasmine", base: "Vanilla, musk, sandalwood" },
    longevity: "8-10 hours",
    projection: "Moderate"
  },
  {
    id: 10,
    name: "Smoke & Leather",
    description: "A bold, uncompromising leather fragrance with birch and rum.",

    price: 310.00,
    oldPrice: null,
    tag: "Men",
    tags: ["new", "bestseller"],
    rating: 4,
    reviews: 92,
    image: "https://images.unsplash.com/photo-1585386959984-a85b60ea24d2?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1608571423080-33425e3d1d9c?w=600&h=700&fit=crop",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=700&fit=crop"
    ],
    notes: { top: "Rum, bergamot, saffron", heart: "Birch, leather, incense", base: "Labdanum, amber, musk" },
    longevity: "10-12 hours",
    projection: "Heavy"
  }
];

// Correct broken image refs
products.forEach(p => {
  if (p.images) {
    p.images = p.images.filter(x => x !== 'undefined' && x);
    if (p.images.length === 0) { p.images = [p.image]; }
  }
});
// Fix specific broken paths
products[4].image = products[4].image.replace('60ea24d2', '26b2de2');
products[9].images = [products[9].image, 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=700&fit=crop'];
products[10].images = [products[10].image, 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=700&fit=crop'];

const categories_data = [
  {name: "Men's Perfumes", img: "https://images.unsplash.com/photo-1598550479267-35318f8ab037?w=500&h=600&fit=crop", icon: "fa-mars", count: 15},
  {name: "Women's Perfumes", img: "https://images.unsplash.com/photo-1608571423080-33425e3d1d9c?w=500&h=600&fit=crop", icon: "fa-venus", count: 18},
  {name: "Oriental", img: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=500&h=600&fit=crop", icon: "fa-moon", count: 12},
  {name: "French", img: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&h=600&fit=crop", icon: "fa-wine-glass", count: 10},
  {name: "Arabic", img: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&h=600&fit=crop", icon: "fa-star-and-crescent", count: 14},
  {name: "Luxury Collection", img: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&h=600&fit=crop", icon: "fa-crown", count: 9}
];

const testimonials_data = [
  {name: "Amber Lee", avatar: "https://i.pravatar.cc/100?img=1", location: "New York, USA", text: "I have never experienced such a luxurious fragrance. The Midnight Oud is absolutely divine. It stays on my skin for the whole day."},
  {name: "James Sullivan", avatar: "https://i.pravatar.cc/100?img=11", location: "London, UK", text: "Exquisite quality and unique scents. Eternal Essence is my go-to for special occasions. The packaging is also beautiful."},
  {name: "Lina Al-Rashid", avatar: "https://i.pravatar.cc/100?img=5", location: "Dubai, UAE", text: "Finally, a perfume brand that understands true luxury. Rose Noire is a masterpiece. Fast delivery and beautiful service!"},
  {name: "Marcus Weber", avatar: "https://i.pravatar.cc/100?img=12", location: "Berlin, Germany", text: "Silver Shadow is my signature scent now. The longevity and sillage are incredible. Worth every penny."},
  {name: "Sophie Laurent", avatar: "https://i.pravatar.cc/100?img=9", location: "Paris, France", text: "The attention to detail in these fragrances is unmatched. Oud Royale is a true work of olfactory art. Highly recommend!"},
  {name: "Olivia Chen", avatar: "https://i.pravatar.cc/100?img=6", location: "Singapore", text: "I gifted the Crystal Orchid to my mother and she loved it. The service team was very helpful in picking the right perfume."},
  {name: "Daniel Voss", avatar: "https://i.pravatar.cc/100?img=13", location: "Wien, AT" , text: "I own over 50 perfumes and Eternal Essence ones are among my best. Golden Amber is incredibly unique."}
];

const features_data = [
  {icon: "fa-shield-alt", title: "100% Original", description: "Authenticated products from official brands"},
  {icon: "fa-rocket", title: "Fast Shipping", description: "Free express delivery on all orders"},
  {icon: "fa-lock", title: "Secure Payment", description: "256-bit encrypted checkout"},
  {icon: "fa-gem", title: "Premium Packaging", description: "Gift-ready luxury boxes"},
  {icon: "fa-check-circle", title: "Money Back", description: "30-day hassle-free returns"}
];

const insta_data = [
  {img: "https://images.unsplash.com/photo-1592942945403-5v4d539f5tt?w=400&h=400&fit=crop", likes: 2451},
  {img: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop", likes: 1893},
  {img: "https://images.unsplash.com/photo-1441986300917-6458rr8r4r4d4?w=400&h=400&fit=crop", likes: 3201},
  {img: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop", likes: 2107},
  {img: "https://images.unsplash.com/photo-1503428312055-db32ce458h1e?w=400&h=400&fit=crop", likes: 1892},
  {img: "https://images.unsplash.com/photo-1512777576244-b36febb73efp?w=400&h=400&fit=crop", likes: 2754},
  {img: "https://images.unsplash.com/photo-1615361241900-3766a12ba01c?w=400&h=400&fit=crop", likes: 3432},
  {img: "https://images.unsplash.com/photo-1563170421-9d3a3adef182?w=400&h=400&fit=crop", likes: 1567}
];
insta_data.forEach(i => {
  if (!i.img || i.img.includes('tt') || i.img.includes('8r8r') || i.img.includes('h1e') || i.img.includes('fp') || i.img.includes('pc'))
    i.img = "https://images.unsplash.com/photo-1592942945404-b3fbafd7f539?w=400&h=400&fit=crop";
  else i.img = i.img.replace('?w=400&h=400&fit=crop', '?w=400&h=400&fit=crop');
  if (i.img.includes('tt') || i.img.includes('rr8r') || i.img.includes('h1e') || i.img.includes('fp') || i.img.includes('pc') || i.img.includes('xZzdv')) {
    i.img = "https://images.unsplash.com/photo-1598734297111-3e52f0b2c6c2?w=400&h=400&fit=crop";
  }
});
// Safe fallback for all insta images
const safeInsta = [
  "https://images.unsplash.com/photo-1592942945404-bfbafd7f539?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1503428312055-db32ce453b1e?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1490481651871-ab77f08cd747?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1490481651871-ab77f08cd747?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1503428312055-db32ce453b1e?w=400&h=400&fit=crop",
  "https://crehana.com/blog/wp-content/uploads/2021/03/perfumes.jpeg?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop"
];
insta_data.forEach((i, idx) => { i.img = safeInsta[idx]; });

// Static orders and wishlist persistence
let cart = JSON.parse(localStorage.getItem('ec_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('ec_wishlist') || '[]');

function saveCart() { localStorage.setItem('ec_cart', JSON.stringify(cart)); updateCartUI(); }
function saveWishlist() { localStorage.setItem('ec_wishlist', JSON.stringify(wishlist)); updateWishlistUI(); }
function isInCart(id) { return cart.some(c => c.id === id); }
function addToCart(id) {
  var p = products.find(x => x.id === id);
  if (!p) return showToast('Product not found');
  if (isInCart(id)) return showToast('Already in bag');
  cart.push({id: id, qty: 1, name: p.name, price: p.price, image: p.image});
  saveCart();
  showToast('Added to bag');
}
function removeFromCart(id) { cart = cart.filter(c => c.id !== id); saveCart(); }
function updateCartQty(id, d) { 
  var c = cart.find(x => x.id === id); 
  if (!c) return;
  var n = c.qty + d;
  if (n < 1) { removeFromCart(id); return; }
  c.qty = n; 
  saveCart();
}
function getCartTotal() { return cart.reduce((a, c) => a + c.price * c.qty, 0); }
function isWishlisted(id) { return wishlist.includes(id); }
function toggleWishlist(id) {
  if (isWishlisted(id)) { wishlist = wishlist.filter(x => x !== id); showToast('Removed from favorites'); }
  else { wishlist.push(id); showToast('Added to favorites'); }
  saveWishlist();
}
function showToast(msg) {
  var t = document.querySelector('.toast') || createToast();
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2000);
}
function createToast() {
  var t = document.createElement('div');
  t.className = 'toast success';
  document.body.appendChild(t);
  return t;
}
function updateWishlistUI() {
  document.querySelectorAll('.product-wishlist').forEach(el => {
    var id = parseInt(el.getAttribute('data-id'));
    if (id || id === 0) el.classList.toggle('active', wishlist.includes(id));
  });
  var badge = document.getElementById('wishlistCount');
  if (badge) badge.textContent = wishlist.filter(function(x) { return x !== null; }).length;
}
function updateCartUI() {
  var badge = document.getElementById('cartCount');
  if (badge) badge.textContent = cart.length;
  renderCart();
}
function renderCart() {
  var container = document.getElementById('cartItems');
  var footer = document.getElementById('cartFooter');
  if (!container) return;
  if (cart.length === 0) {
    container.innerHTML = '<div class="cart-empty"><i class="fas fa-shopping-bag"></i><p>Your bag is empty</p><button class="btn btn-primary" onclick="closeCart()">Start Shopping</button></div>';
    if (footer) footer.style.display = 'none';
    return;
  }
  var html = cart.map(item => `
<div class="cart-item">
  <img src="${item.image}" alt="${item.name}" loading="lazy">
  <div class="cart-item-info">
    <div class="cart-item-name">${item.name}</div>
    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
    <div class="cart-item-qty">
      <button onclick="updateCartQty(${item.id}, -1)">-</button>
      <span>${item.qty}</span>
      <button onclick="updateCartQty(${item.id}, 1)">+</button>
      <span style="margin-left: auto;">$${(item.price * item.qty).toFixed(2)}</span>
    </div>
  </div>
  <button class="cart-item-remove" onclick="removeFromCart(${item.id})"><small>Remove</small></button>
</div>`).join('');
  container.innerHTML = html;
  if (footer) {
    footer.style.display = 'block';
    document.getElementById('cartTotal').textContent = '$' + getCartTotal().toFixed(2);
  }
}
function openCart() { 
  document.getElementById('cartSidebar').classList.add('active'); 
  document.getElementById('overlay').classList.add('active'); 
  renderCart();
}
function closeCart() { 
  document.getElementById('cartSidebar').classList.remove('active'); 
  document.getElementById('overlay').classList.remove('active'); 
}
function openSearch() { 
  document.getElementById('searchToggle').click(); 
}
