let cart = 0;
let total = 0;

function addToCart(name,price){
    cart++;
    total += price;

    document.getElementById("cartCount").innerText = cart;
    document.getElementById("total").innerText = total;

    alert(name + " added to cart!");
}

function buyNow(){
    alert("Thank you for shopping!\nTotal Amount: ₹" + total);
}

document.getElementById("search").addEventListener("keyup", function(){
    let value = this.value.toLowerCase();
    let products = document.querySelectorAll(".product");

    products.forEach(function(product){
        let name = product.dataset.name.toLowerCase();

        if(name.includes(value)){
            product.style.display = "block";
        }
        else{
            product.style.display = "none";
        }
    });
});
