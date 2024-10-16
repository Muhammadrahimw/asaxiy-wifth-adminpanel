let bars = document.getElementById("bars");
let xMark = document.querySelector("#close");
let xMark2 = document.querySelector("#category_close");
let bars2 = document.querySelector("#category_bars");
let icons = document.querySelector(".icons");
let categories = document.querySelector(".categories");

bars.addEventListener("click", () => {
  if (icons.style.left === 0) {
    icons.style.left = -200 + "%";
  }
  icons.style.left = 0;
});

xMark.addEventListener("click", () => {
  if (icons.style.left !== 0) {
    icons.style.left = 0;
  }
  icons.style.left = -200 + "%";
});

bars2.addEventListener("click", () => {
  if (categories.style.right === 0) {
    categories.style.right = -200 + "%";
  }
  categories.style.right = 0;
});

xMark2.addEventListener("click", () => {
  if (categories.style.right === 0) {
    categories.style.right = 0;
  }
  categories.style.right = -200 + "%";
});

// main ------------------------------------------

let products = document.querySelector(".products");
let discount = document.getElementById("discount");
let air = document.getElementById("air");
let phone = document.getElementById("phone");
let house = document.getElementById("house");
let book = document.getElementById("book");
let tv = document.getElementById("tv");
let laptop = document.getElementById("laptop");

let createCard = (info) => {
  let card = document.createElement("div");
  let otherPrice = info.price;
  otherPrice = otherPrice.replace(/\D/g, "");
  card.innerHTML = `
<div class="card">
                <div style="background-image: url(${
                  info.img
                })" class="img"></div>
                <p class="title">${info.title}</p>
                <div class="rating">
                    <div class="stars">
                        <i class="fa-solid fa-star fa-2xs" style="color: #FFD43B;"></i>
                        <i class="fa-solid fa-star fa-2xs" style="color: #FFD43B;"></i>
                        <i class="fa-solid fa-star fa-2xs" style="color: #FFD43B;"></i>
                        <i class="fa-solid fa-star fa-2xs" style="color: #FFD43B;"></i>
                        <i class="fa-solid fa-star fa-2xs" style="color: #FFD43B;"></i>
                    </div>
                    <div class="comments">
                        4 отзывов
                    </div>
                </div>
                <div class="price">
                    <div class="real_price">${Number(otherPrice) + 250000}</div>
                    <div class="precent_price">${info.price}</div>
                    <div class="monthly_price">${
                      Math.ceil(Number(otherPrice) / 12) + " x 12 мес"
                    }</div>
                </div>
                <div class="adding_product">
                    <button class="btn">Купить в один клик</button>
                    <div>
                        <i class="fa-solid fa-cart-shopping" style="color: #ffffff;"></i>
                    </div>
                </div>
            </div>
`;
  products.append(card);
};

fetch("http://localhost:3000/products")
  .then((data) => data.json())
  .then((data) => addData(data))
  .catch((error) => error + ":(");

let addData = (data) => {
  data.forEach((info) => {
    createCard(info);
    filterCategory(data, discount);
    filterCategory(data, air, "air");
    filterCategory(data, phone, "phone");
    filterCategory(data, house, "house");
    filterCategory(data, book, "book");
    filterCategory(data, tv, "tv");
    filterCategory(data, laptop, "laptop");
  });
};

let filterCategory = (data, type, otherType) => {
  type.addEventListener("click", () => {
    products.innerHTML = "";
    data.forEach((item) => {
      if (item.category === otherType || !otherType) {
        createCard(item);
      }
    });
  });
};
