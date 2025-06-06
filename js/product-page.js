const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

const products = [
  {
    id: "1",
    name: "Echeveria",
    price: "$29.95",
    img: "images/kenny_pic.jpg",
    description: "Echeveria is a stunning succulent with sculpted rosettes \
        in striking shades of green, blue, or pink. It is ideal for beginnersand plants lovers alike.",
    sun: "High",
    water: "Low",
    shade: "Half shade"
  },
    {
    id: "2",
    name: "Zayne",
    price: "$59.95",
    img: "images/Zayne.jpg",
    description: "Zayne looks exotic but is tough as nails, thriving just about anywhere with only a modicum of care.",
    sun: "Medium",
    water: "Medium",
    shade: "Half shade"
  }
];

const product = products.find(p => p.id === productId);

if (product) {
  document.querySelector(".product-img").src = product.img;
  document.querySelector(".product-img").alt = product.name;
  document.querySelector(".productpage-name").textContent = product.name;
  document.querySelector(".productpage-name-desktop").textContent = product.name;
  document.querySelector(".product-detail").textContent = product.description;
  document.querySelector(".button-price").textContent = product.price;

  document.querySelector(".sun-level").textContent = product.sun;
  document.querySelector(".water-level").textContent = product.water;
  document.querySelector(".cloud-level").textContent = product.shade;
} else {
  document.querySelector(".product-page").innerHTML = "<p>Product not found.</p>";
}