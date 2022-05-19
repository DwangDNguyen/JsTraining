const API_URL = "https://course-api.com/javascript-store-products";

const productsDOM = document.querySelector(".products-center");

getProducts(API_URL);

async function getProducts(url) {
  productsDOM.innerHTML = '<div class="loading"></div>';
  const response = await fetch(url);
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  const data = await response.json();
  showProducts(data);
}
getProducts(API_URL).catch((error) => {
  error.message;
});

function showProducts(items) {
  productsDOM.innerHTML = "";
  const productContainer = document.createElement("div");
  productContainer.classList.add("products-container");
  const list = items
    .map((item) => {
      const { id } = item;
      const { name: title, price } = item.fields;
      const { url: img } = item.fields.image[0];
      return `<a class="single-product" href="detail.html?id=${id}&name=john&age=25">
    <img src="${img}" class="single-product-img img" alt="${title}" />
    <footer>
      <h5 class="name">${title}</h5>
      <span class="price">$${price / 100}</span>
    </footer>
  </a>`;
    })
    .join("");
  productContainer.innerHTML = list;
  productsDOM.appendChild(productContainer);
}
