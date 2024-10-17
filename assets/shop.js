let main = document.querySelector("main");
let container = document.querySelector(".container");
let left = document.querySelector(".left");
let arr = [];
let obj = {};
let data = JSON.parse(localStorage.getItem("shopKey"));
let sum = null;

function func(arr) {
  let newarr = [];
  for (let i of arr) {
    newarr.push(i);
    if (newarr.join("").includes(i) && obj[i] !== undefined) {
      obj[i] += 1;
    } else {
      obj[i] = 1;
    }
  }
  return obj;
}

if (data) {
  addData();
} else {
}

function addData() {
  data.forEach((item) => {
    arr.push(JSON.parse(item.id));
  });
  left.innerHTML = ``;
  func(arr);
  data.forEach((value) => {
    for (let i in obj) {
      if (value.id === i) {
        if (sum !== value.id) {
          sum = value.id;
          left.innerHTML += `
                <div class="card">
                    <div style="background-image: url(${value.img});" class="img"></div>
                    <p class="title">
                    ${value.title}
                    </p>
                    <div class="adding">
                        <div class="minus">-</div>
                        <p class="count">${obj[i]}</p>
                        <div class="plus">+</div>
                    </div>
                    <div class="price">
                        <div class="precent_price">
                            ${value.price}
                        </div>
                    </div>
                    <div class="types">
                        <i class="fa-regular fa-heart"></i>
                        <i class="fa-regular fa-trash-can"></i>
                    </div>
                </div>
                <hr>
    `;
          container.append(left);
          let minus = left.querySelector(".minus");
          let count = left.querySelector(".count");
          minus.addEventListener("click", (e) => {
            // obj[i] -= 1;
            // console.log(JSON.parse(obj).length);
          });
        }
      }
    }
  });
}
