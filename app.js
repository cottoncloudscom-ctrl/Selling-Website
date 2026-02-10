const products = [
    {
        id: 1,
        name: "Royal Silk Bedsheet Set",
        category: "bedsheets",
        price: 8500,
        image: "images/category_bedsheet.svg",
        rating: 4.8
    },
    {
        id: 2,
        name: "Premium Cotton Bath Towel",
        category: "towels",
        price: 2500,
        image: "images/category_towel.svg",
        rating: 4.5
    },
    {
        id: 3,
        name: "Handwoven Table Runner",
        category: "tablecloths",
        price: 3200,
        image: "images/category_tablecloth.svg",
        rating: 4.7
    },
    {
        id: 4,
        name: "Luxury Satin Pillowcase Pair",
        category: "pillowcases",
        price: 1800,
        image: "images/category_pillowcase.svg",
        rating: 4.9
    },
    {
        id: 5,
        name: "Organic Bamboo Sheet Set",
        category: "bedsheets",
        price: 12000,
        image: "images/category_bedsheet.svg",
        rating: 5.0
    },
    {
        id: 6,
        name: "Spa Hotel Collection Towels",
        category: "towels",
        price: 4500,
        image: "images/category_towel.svg",
        rating: 4.8
    },
    {
        id: 7,
        name: "Damask Table Cloth",
        category: "tablecloths",
        price: 5500,
        image: "images/category_tablecloth.svg",
        rating: 4.6
    },
    {
        id: 8,
        name: "Embroidered Pillow Sham",
        category: "pillowcases",
        price: 2200,
        image: "images/category_pillowcase.svg",
        rating: 4.7
    }
];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    setupEventListeners();
});

function renderProducts(productsToRender) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    productsToRender.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-actions">
                    <button onclick="addToCart(${product.id})">Add to Cart</button>
                    <button onclick="viewDetails(${product.id})">View Details</button>
                </div>
            </div>
            <div class="product-details">
                <div class="product-category">${product.category}</div>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">LKR ${product.price.toLocaleString()}</div>
            </div>
        `;

        productList.appendChild(productCard);
    });
}

// Cart Logic
let cartCount = 0;
function addToCart(productId) {
    cartCount++;
    document.querySelector('.cart-count').textContent = cartCount;
    alert('Product added to cart!');
}

function viewDetails(productId) {
    alert('Product details view coming soon!');
}

function setupEventListeners() {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile Menu Toggle (Basic)
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '70px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = '#fff';
            navLinks.style.padding = '20px';
        }
    });

    // Category Filtering
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.getAttribute('data-category');
            const filtered = products.filter(p => p.category === category);
            renderProducts(filtered);

            // Scroll to products
            document.querySelector('#product-list').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}
