document.addEventListener("DOMContentLoaded", function () {

    // CART SYSTEM
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const addButtons = document.querySelectorAll(".add-cart");
    const cartCount = document.getElementById("cart-count");

    function updateCartCount() {
        if (cartCount) {
            cartCount.textContent = cart.length;
        }
    }

    updateCartCount();

    addButtons.forEach(button => {
        button.addEventListener("click", function () {

            const name = this.dataset.name;
            const price = parseFloat(this.dataset.price);

            cart.push({ name, price });

            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartCount();

            this.innerHTML = "Added ✔";
            this.style.backgroundColor = "green";

            setTimeout(() => {
                this.innerHTML = "Add to Cart";
                this.style.backgroundColor = "";
            }, 1000);
        });
    });

    // MOBILE MENU
    const menuBtn = document.getElementById("menu_btn");
    const navLinks = document.getElementById("nav_links");

    if(menuBtn){
        menuBtn.addEventListener("click", function () {

            navLinks.classList.toggle("active");

            const icon = menuBtn.querySelector("i");

            if (navLinks.classList.contains("active")) {
                icon.classList.remove("ri-menu-line");
                icon.classList.add("ri-close-line");
            } else {
                icon.classList.remove("ri-close-line");
                icon.classList.add("ri-menu-line");
            }

        });
    }

});