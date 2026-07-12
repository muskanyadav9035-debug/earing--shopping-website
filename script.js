
 let cart = Number(localStorage.getItem("cart")) || 0;
let total = Number(localStorage.getItem("total")) || 0;

let items = JSON.parse(localStorage.getItem("items")) || {};


function addToCart(name, price) {

    cart++;
    total += price;

    document.getElementById("cartCount").innerText = cart;
    document.getElementById("total").innerText = total;


    if (items[name]) {
        items[name].quantity++;
        items[name].amount += price;
    } 
    else {
        items[name] = {
            quantity: 1,
            amount: price
        };
    }


    localStorage.setItem("cart", cart);
    localStorage.setItem("total", total);
    localStorage.setItem("items", JSON.stringify(items));

    updateCart();
}


function updateCart() {

    let cartList = document.getElementById("cartList");

    if(!cartList) return;

    cartList.innerHTML = "";


    for (let name in items) {

        let li = document.createElement("li");

        li.innerText =
        `${name} x${items[name].quantity} - ₹${items[name].amount}`;

        cartList.appendChild(li);
    }
}


function buyNow() {

    window.location.href = "bill.html";

}


updateCart();
