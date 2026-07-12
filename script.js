let cart = 0;
let total = 0;
let items = {};

function addToCart(name, price) {
    cart++;
    total += price;

    document.getElementById("cartCount").innerText = cart;
    document.getElementById("total").innerText = total;

    if (items[name]) {
        items[name].quantity++;
        items[name].amount += price;
    } else {
        items[name] = {
            quantity: 1,
            amount: price
        };
    }

    updateCart();
}

function updateCart() {
    let cartList = document.getElementById("cartList");
    cartList.innerHTML = "";

    for (let name in items) {
        let li = document.createElement("li");
        li.innerText =
            `${name} x${items[name].quantity} - ₹${items[name].amount}`;
        cartList.appendChild(li);
    }
}

function buyNow() {
    localStorage.setItem("cart", cart);
    localStorage.setItem("total", total);

    window.location.href = "bill.html";
}
