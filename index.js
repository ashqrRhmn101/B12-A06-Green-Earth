const allTrees = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((jon) => displayAllTrees(jon.categories));
};
const removeActive = () => {
  const categoriesBtns = document.querySelectorAll(".categoriesBtn");
  categoriesBtns.forEach((btn) => btn.classList.remove("active"));
};

const clickBtn = (id) => {
  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      removeActive();
      const clickBtns = document.getElementById(`category-btn-${id}`);
      // console.log(clickBtns);
      clickBtns.classList.add("active");
      //  displayAllTrees(json.data)
    });
};

const displayAllTrees = (trees) => {
  const treesCard = document.getElementById("categotis");
  trees.forEach((tree) => {
    // console.log(tree)
    const div = document.createElement("div");
    div.innerHTML = `
        <button id="category-btn-${tree.id}" onclick="clickBtn(${tree.id})" class="text-left p-2 font-semibold w-full rounded-sm categoriesBtn">${tree.category_name}</button>
        `;
    treesCard.appendChild(div);
  });
};
allTrees();

// ALlCards
const allCards = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((json) => displayAllCards(json.plants));
};

const displayAllCards = (plants) => {
  const plantsCard = document.getElementById("allCards");
  plantsCard.innerText = "";
  plants.forEach((plant) => {
    // console.log(plant);
    const div = document.createElement("div");
    // div.innerHTML = `
    //     <div class="bg-white p-4 rounded-lg">
    //              <div>
    //                 <img src="${plant.image}" class="rounded-lg h-[168px] w-[350px] mx-auto" alt="">
    //              </div>
    //              <div class="space-y-2 mt-2">
    //                 <h1 class="text-xl font-bold">${plant.name}</h1>
    //                 <p class="opacity-70 line-clamp-2">${plant.description}</p>
    //              </div>
    //              <div class="flex justify-between items-center py-2">
    //                 <button
    //         class="btn border-none bg-[#DCFCE7] text-[#15803D] font-semibold rounded-3xl"
    //       >
    //         ${plant.category}
    //       </button>
    //       <p class="font-bold">৳ <span>${plant.price}</span></p>
    //              </div>
    //              <button onclick="lodePrice('${plant.name}', ${plant.price})" class="btn bg-[#15803D] text-white rounded-3xl w-full">Add to Cart</button>
    //         </div>
    //     `;
    plantsCard.appendChild(div);
  });
};

let total = 0;
const lodePrice = (name, price) => {
  const yourCard = document.getElementById("yourCard");
  const spanTotal = document.getElementById("spnTotal");
  const div = document.createElement("div");
  div.innerHTML = `
    <div
              class="flex justify-between items-center bg-[#DCFCE7] p-2 rounded-lg"
            >
              <div class="space-y-3">
                <h2 class="font-bold">${name}</h2>
                <p class="opacity-70">৳ <span id="itemPrice"> ${price}</span> × 1</p>
              </div>
              <div class="opacity-70">
                <i class="fa-solid fa-xmark"></i>
              </div>
            </div>
    `;
  // Total add price
  total += price;
  spanTotal.innerText = total;
  div.querySelector("i").addEventListener("click", function () {
    div.remove();
    // total remove
    total -= price;
    spanTotal.innerText = total;
  });
  yourCard.appendChild(div);
  // console.log(name)
};

allCards();
