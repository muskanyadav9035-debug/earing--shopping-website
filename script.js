let count = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        count++;
        alert("Item added to cart! Total items: " + count);
    });
});
