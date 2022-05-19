let allProducts = [...products];
const productsContainer = document.querySelector(".products-container");

function showProducts() {
  if (allProducts.length < 1) {
    productsContainer.innerHTML = `<h6>Sorry, no products matched your search</h6>`;
    return;
  }

  productsContainer.innerHTML = allProducts
    .map((items) => {
      const { id, title, image, price } = items;
      return `<article class="product" data-id="${id}">
      <img
        src="${image}"
        class="product-img img"
        alt=""
      />
      <footer>
        <h5 class="product-name">${title}</h5>
        <span class="product-price">${price}</span>
      </footer>
    </article>`;
    })
    .join("");
}
showProducts();

const CategoryBtns = document.querySelector(".companies");
CategoryBtns.addEventListener("click", function (e) {
  const el = e.target;
  console.log(el);
  if (el.classList.contains("company-btn")) {
    if (el.dataset.id === "all") {
      allProducts = [...products];
    } else {
      allProducts = products.filter((product) => {
        return product.company === el.dataset.id;
      });
    }
    console.log(allProducts);
    showProducts();
  }
});

const form = document.querySelector(".input-form");
const searchInput = document.querySelector(".search-input");

form.addEventListener("keyup", function () {
  const inputValue = searchInput.value;
  allProducts = products.filter((product) => {
    console.log(product.title.toLowerCase().includes(inputValue));
    return product.title.toLowerCase().includes(inputValue);
  });
  showProducts();
});
