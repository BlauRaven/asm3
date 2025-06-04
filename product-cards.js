const products = [
  { name: "Echeveria", price: "$29.95", img: "images/kenny_pic.jpg" },
  { name: "Angelica", price: "$189.95", img: "images/Angelica.png" },
];

const template = document.getElementById("product-card-template");
const container = document.getElementById("product-list");

const cards = 5;

for (let i = 0; i < cards; i++) {
    for (let j = 0; j < cards; j++) {
        const product = products[(j+i) % products.length]; // alternate between 0 and 1
        const clone = template.content.cloneNode(true);
        clone.querySelector("img").src = product.img;
        clone.querySelector("img").alt = product.name;
        clone.querySelector(".product-name").textContent = product.name;
        clone.querySelector(".product-price").textContent = product.price;
        container.appendChild(clone);
    }
}