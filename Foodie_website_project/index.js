// ================= GLOBAL CART =================
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ================= CART PAGE =================
const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

function displayCart() {

    if (!cartItemsContainer || !cartTotal) return;

    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {

        total += item.price;

        const itemHTML = `
            <div class="cart_item">
                <div>
                    <h4>${item.name}</h4>
                    <p>$${item.price.toFixed(2)}</p>
                </div>
                <button onclick="removeItem(${index})" class="remove_btn">Remove</button>
            </div>
        `;

        cartItemsContainer.innerHTML += itemHTML;
    });

    cartTotal.textContent = total.toFixed(2);
}

// Remove Item
function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
    updateCartCount();
}

// Go To Payment
function goToPayment() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        window.location.href = "payment.html";
    }
}


// ================= ADD TO CART (PRODUCT PAGE) =================
const addButtons = document.querySelectorAll(".add-cart");
const cartCount = document.getElementById("cart-count");

function updateCartCount() {
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

// Add Product
addButtons.forEach(button => {
    button.addEventListener("click", () => {

        const name = button.dataset.name;
        const price = parseFloat(button.dataset.price);

        cart.push({ name, price });

        localStorage.setItem("cart", JSON.stringify(cart));

        updateCartCount();

        button.innerHTML = "Added ✔";
        button.disabled = true;

        setTimeout(() => {
            button.innerHTML = "Add to Cart";
            button.disabled = false;
        }, 1000);
    });
});


// ================= INITIAL LOAD =================
displayCart();
updateCartCount();