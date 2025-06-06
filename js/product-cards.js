const products = [
  { id: "1", name: "Echeveria", price: "$29.95", img: "images/kenny_pic.jpg" },
  { id: "2", name: "Zayne", price: "$59.95", img: "images/zayne.jpg" },
];

const template = document.getElementById("product-card-template");
const container = document.getElementById("product-list2");

const rows = 4;
const cols = 5;

for (let i = 0; i < rows * cols; i++) {
    const product = products[i % products.length]; // cycle products
    const clone = template.content.cloneNode(true);

        const link = clone.querySelector(".product-card-link");
         link.href = `product.html?id=${product.id}`;

        clone.querySelector("img").src = product.img;
        clone.querySelector("img").alt = product.name;
        clone.querySelector(".product-name").textContent = product.name;
        clone.querySelector(".product-price").textContent = product.price;
        container.appendChild(clone);
    }
