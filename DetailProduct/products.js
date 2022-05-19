const url = "https://course-api.com/javascript-store-single-product";
const productDetail = document.querySelector(".product");

getDetailProduct();
async function getDetailProduct() {
  productDetail.innerHTML = '<h4 class="product-loading">Loading... </h4>';
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const response = await fetch(`${url}?id=${id}`);
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  const data = await response.json();
  displayDetailProduct(data);
}
getDetailProduct().catch((error) => {
  error.message;
});
function displayDetailProduct(items) {
  const {
    company,
    colors,
    description,
    name: title,
    price,
    image,
  } = items.fields;
  const { url: img } = image[0];
  document.title = title.toUpperCase();

  const color = colors
    .map((color) => {
      return `<span class="product-color" style="background: ${color}"></span>`;
    })
    .join("");
  productDetail.innerHTML = `<div class="product-wrapper">
    <img src="${img}" class="img" alt="${title}" />
    <div class="product-info">
      <h3>${title}</h3>
      <h5>${company}</h5>
      <span>${price / 100}</span>
      <div class="colors">
        ${color}
      </div>
      <p>
       ${description}
      </p>
      <button class="btn">add to cart</button>
    </div>
  </div>`;
}
