let cart = 0;
let total = 0;

function addToCart(name, price) {
    cart++;
    total += price;

    document.getElementById("cartCount").innerText = cart;
    document.getElementById("total").innerText = total;

    let li = document.createElement("li");
    li.innerText = name + " - ₹" + price;
    document.getElementById("cartList").appendChild(li);
}

function buyNow() {
    
    function buyNow() {
    localStorage.setItem("cart", cart);
    localStorage.setItem("total", total);

    window.location.href = "bill.html";
}
}
