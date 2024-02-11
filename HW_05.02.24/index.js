const productsContainer = document.getElementById('products');
const cartContainer = document.getElementById('cart-items');
const totalElement = document.getElementById('total');

let products = [];
let cart = [];

function displayProducts() {
    productsContainer.innerHTML = '';
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.innerHTML = `
            <div class="product">
                <h3>${product.title}</h3>
                <p>Price: $${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        productsContainer.appendChild(productElement);
    });
}

function displayCart() {
    cartContainer.innerHTML = '';
    cart.forEach(cartItem => {
        const cartItemElement = document.createElement('li');
        cartItemElement.innerHTML = `
            ${cartItem.title} - Quantity: ${cartItem.quantity} - $${cartItem.total}
            <button onclick="removeFromCart(${cartItem.id})">Remove</button>
            <button onclick="updateQuantity(${cartItem.id}, 'increment')">+</button>
            <button onclick="updateQuantity(${cartItem.id}, 'decrement')">-</button>
        `;
        cartContainer.appendChild(cartItemElement);
    });

    const total = cart.reduce((acc, item) => acc + item.total, 0).toFixed(2);
    totalElement.textContent = total;
}

function addToCart(productId) {
    const product = products.find(item => item.id === productId);
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity += 1;
        cartItem.total = (cartItem.quantity * cartItem.price).toFixed(2);
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            quantity: 1,
            total: product.price.toFixed(2)
        });
    }

    displayCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    displayCart();
}

function updateQuantity(productId, action) {
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        if (action === 'increment') {
            cartItem.quantity += 1;
        } else if (action === 'decrement') {
            if (cartItem.quantity > 1) {
                cartItem.quantity -= 1;
            }
        }

        cartItem.total = (cartItem.quantity * cartItem.price).toFixed(2);
        displayCart();
    }
}

fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        products = data;
        displayProducts();
    })
    .catch(error => console.error('Error fetching products:', error));
