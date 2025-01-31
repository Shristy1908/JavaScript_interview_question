const products = [
  {
    name: "Sony Playstation 5",
    url: "images/playstation_5.png",
    type: "games",
    price: 499.99,
  },
  {
    name: "Samsung Galaxy",
    url: "images/samsung_galaxy.png",
    type: "smartphones",
    price: 399.99,
  },
  {
    name: "Cannon EOS Camera",
    url: "images/cannon_eos_camera.png",
    type: "cameras",
    price: 749.99,
  },
  {
    name: "Sony A7 Camera",
    url: "images/sony_a7_camera.png",
    type: "cameras",
    price: 1999.99,
  },
  {
    name: "LG TV",
    url: "images/lg_tv.png",
    type: "televisions",
    price: 799.99,
  },
  {
    name: "Nintendo Switch",
    url: "images/nintendo_switch.png",
    type: "games",
    price: 299.99,
  },
  {
    name: "Xbox Series X",
    url: "images/xbox_series_x.png",
    type: "games",
    price: 499.99,
  },
  {
    name: "Samsung TV",
    url: "images/samsung_tv.png",
    type: "televisions",
    price: 1099.99,
  },
  {
    name: "Google Pixel",
    url: "images/google_pixel.png",
    type: "smartphones",
    price: 499.99,
  },
  {
    name: "Sony ZV1F Camera",
    url: "images/sony_zv1f_camera.png",
    type: "cameras",
    price: 799.99,
  },
  {
    name: "Toshiba TV",
    url: "images/toshiba_tv.png",
    type: "televisions",
    price: 499.99,
  },
  {
    name: "iPhone 14",
    url: "images/iphone_14.png",
    type: "smartphones",
    price: 999.99,
  },
];

const productWrapperEle = document.getElementById("product-wrapper");
const checkEle = document.querySelectorAll(".check");
const filtercontainer = document.getElementById("filter-container");
const searchInput = document.getElementById("search");
const cartBtn = document.getElementById("cartBtn");
const cartCount = document.getElementById("cartCount");

var cartItemCount = 0;

let productsEle = [];

products.forEach((product) => {
  const productEl = createProductElement(product);
  productsEle.push(productEl);
  productWrapperEle.appendChild(productEl);
  console.log(product);
});

//Add filter event listeners
filtercontainer.addEventListener("change", filterProducts);
searchInput.addEventListener("input", filterProducts);

function createProductElement(product) {
  const productEl = document.createElement("div");
  productEl.className = "item space-y-2";
  productEl.innerHTML = ` <div class="bg-gray-100 flex justify-center relative overflow-hidden group cursor-pointer border">
                        <img src="${product.url}" alt="${
    product.name
  }" class="w-full h-full object-cover" />
                        <span
                            class="status bg-black text-white absolute bottom-0 left-0 right-0 text-center py-2 translate-y-full transition group-hover:translate-y-0">Add
                            to Cart</span>
                    </div>
                <p class="text-xl">${product.name}</p>
                <strong>${product.price.toLocaleString()}</strong>`;
  productEl.querySelector(".status").addEventListener("click", addToCart);
  return productEl;
}

//Toggle add/remove from cart

function addToCart(e) {
  const statusEl = e.target;
  if (statusEl.classList.contains("added")) {
    //Remove from cart
    console.log("removed");
    statusEl.classList.remove("added");
    statusEl.innerText = "Add to Cart";
    statusEl.classList.remove("bg-red-600");
    statusEl.classList.add("bg-gray-800");

    cartItemCount--;
  } else {
    //Add to cart
    statusEl.classList.add("added");
    statusEl.innerText = "Remove From Cart";
    statusEl.classList.remove("bg-gray-800");
    statusEl.classList.add("bg-red-600");
    cartItemCount++;
  }

  //Update cart item count
  cartCount.innerText = cartItemCount.toString();
}

// filter products by search or checkbox

function filterProducts() {
  //get search term
  const searchTerm = searchInput.value.trim().toLowerCase();
  // get checked categories
  const checkedCategories = Array.from(checkEle)
    .filter((check) => check.checked)
    .map((check) => check.id);
  console.log(checkedCategories);

  // Loop over products and check for matches
  productsEle.forEach((productEl, index) => {
    const product = products[index];

    // check to see if product matches the search or checked items
    const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm);
    const isInCheckedCategory =
      checkedCategories.length === 0 ||
      checkedCategories.includes(product.type);

    //show or hide product based on matches
    if (matchesSearchTerm && isInCheckedCategory) {
      productEl.classList.remove("hidden");
    } else {
      productEl.classList.add("hidden");
    }
  });
}
