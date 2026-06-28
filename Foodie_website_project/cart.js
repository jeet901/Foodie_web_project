const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayCart() {
    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        cartItemsContainer.innerHTML += `
            <div class="cart_item">
                <div>
                    <h4>${item.name}</h4>
                    <p>$${item.price}</p>
                </div>
                <button onclick="removeItem(${index})" class="remove_btn">Remove</button>
            </div>
        `;
    });

    cartTotal.textContent = total.toFixed(2);
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

function goToPayment() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        window.location.href = "payment.html";
    }
}

displayCart();