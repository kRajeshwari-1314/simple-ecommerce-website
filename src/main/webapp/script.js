// Product data
const products = {
    mobiles: [
        {
            id: 1,
            name: "iPhone 14 Pro",
            price: "₹1,29,999",
            image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
            rating: 4.8
        },
        {
            id: 2,
            name: "Samsung Galaxy S23",
            price: "₹84,999",
            image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            rating: 4.7
        },
        {
            id: 3,
            name: "Google Pixel 7",
            price: "₹59,999",
            image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            rating: 4.6
        },
        {
            id: 4,
            name: "OnePlus 11",
            price: "₹61,999",
            image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            rating: 4.5
        },
        {
            id: 5,
            name: "Xiaomi 13 Pro",
            price: "₹79,999",
            image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
            rating: 4.3
        },
        {
            id: 6,
            name: "Nothing Phone (2)",
            price: "₹44,999",
            image: "https://images.unsplash.com/photo-1655721534145-4c625d7c8936?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            rating: 4.2
        },
        {
            id: 7,
            name: "Vivo X90 Pro",
            price: "₹79,999",
            image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
            rating: 4.4
        },
        {
            id: 8,
            name: "Oppo Find X5 Pro",
            price: "₹69,999",
            image: "https://images.unsplash.com/photo-1611791484670-ce19b801d192?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            rating: 4.3
        },
        {
            id: 9,
            name: "Realme GT 3",
            price: "₹49,999",
            image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
            rating: 4.1
        },
        {
            id: 10,
            name: "Motorola Edge 40",
            price: "₹34,999",
            image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1081&q=80",
            rating: 4.0
        }
    ],
    laptops: [
        {
            id: 11,
            name: "MacBook Pro 16",
            price: "₹2,39,999",
            image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80",
            rating: 4.9
        },
        {
            id: 12,
            name: "Dell XPS 13",
            price: "₹1,49,999",
            image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
            rating: 4.7
        },
        {
            id: 13,
            name: "HP Spectre x360",
            price: "₹1,34,999",
            image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            rating: 4.6
        },
        {
            id: 14,
            name: "Lenovo ThinkPad X1",
            price: "₹1,69,999",
            image: "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
            rating: 4.8
        },
        {
            id: 15,
            name: "Asus ROG Zephyrus",
            price: "₹1,89,999",
            image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
            rating: 4.5
        },
        {
            id: 16,
            name: "Microsoft Surface Laptop 5",
            price: "₹1,29,999",
            image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
            rating: 4.6
        },
        {
            id: 17,
            name: "Acer Predator Helios 300",
            price: "₹1,19,999",
            image: "https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
            rating: 4.4
        },
        {
            id: 18,
            name: "MSI GS66 Stealth",
            price: "₹1,79,999",
            image: "https://images.unsplash.com/photo-1593069567131-53a0614dde1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            rating: 4.5
        },
        {
            id: 19,
            name: "Razer Blade 15",
            price: "₹1,99,999",
            image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80",
            rating: 4.7
        },
        {
            id: 20,
            name: "Samsung Galaxy Book3 Ultra",
            price: "₹1,59,999",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
            rating: 4.6
        }
    ],
    clothes: [
        {
            id: 21,
            name: "Men's Casual Shirt",
            price: "₹1,499",
            image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            rating: 4.3
        },
        {
            id: 22,
            name: "Women's Summer Dress",
            price: "₹2,499",
            image: "https://images.unsplash.com/photo-1529903384028-929ae5dccdf1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
            rating: 4.5
        },
        {
            id: 23,
            name: "Denim Jacket",
            price: "₹3,999",
            image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
            rating: 4.4
        },
        {
            id: 24,
            name: "Sports T-Shirt",
            price: "₹899",
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
            rating: 4.2
        },
        {
            id: 25,
            name: "Formal Trousers",
            price: "₹1,799",
            image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80",
            rating: 4.1
        },
        {
            id: 26,
            name: "Winter Sweater",
            price: "₹2,299",
            image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
            rating: 4.6
        },
        {
            id: 27,
            name: "Leather Jacket",
            price: "₹5,999",
            image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
            rating: 4.7
        },
        {
            id: 28,
            name: "Casual Sneakers",
            price: "₹2,899",
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            rating: 4.4
        },
        {
            id: 29,
            name: "Summer Shorts",
            price: "₹1,199",
            image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1625&q=80",
            rating: 4.0
        },
        {
            id: 30,
            name: "Traditional Kurti",
            price: "₹1,599",
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
            rating: 4.5
        }
    ]
};

// Function to generate star ratings
function generateStarRating(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="fas fa-star"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

// Function to display products
function displayProducts() {
    // Display mobile products
    const mobileProductsContainer = document.getElementById('mobile-products');
    products.mobiles.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <div class="product-content">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">${product.price}</div>
                <div class="product-rating">${generateStarRating(product.rating)}</div>
                <button class="add-to-cart" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}">Add to Cart</button>
            </div>
        `;
        mobileProductsContainer.appendChild(productElement);
    });

    // Display laptop products
    const laptopProductsContainer = document.getElementById('laptop-products');
    products.laptops.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <div class="product-content">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">${product.price}</div>
                <div class="product-rating">${generateStarRating(product.rating)}</div>
                <button class="add-to-cart" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}">Add to Cart</button>
            </div>
        `;
        laptopProductsContainer.appendChild(productElement);
    });

    // Display clothing products
    const clothingProductsContainer = document.getElementById('clothing-products');
    products.clothes.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <div class="product-content">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">${product.price}</div>
                <div class="product-rating">${generateStarRating(product.rating)}</div>
                <button class="add-to-cart" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}">Add to Cart</button>
            </div>
        `;
        clothingProductsContainer.appendChild(productElement);
    });

    // Add event listeners to Add to Cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Cart functionality
let cart = [];

function addToCart(event) {
    const productId = event.target.getAttribute('data-id');
    const productName = event.target.getAttribute('data-name');
    const productPrice = event.target.getAttribute('data-price');
    
    // Check if product is already in cart
    const existingProduct = cart.find(item => item.id === productId);
    
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: productName,
            price: productPrice,
            quantity: 1
        });
    }
    
    // Show confirmation
    alert(`${productName} added to cart!`);
    
    // Update cart count (if you had a cart icon with count)
    updateCartCount();
}

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayProducts();
});
