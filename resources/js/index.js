const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");
const dialogReg = document.querySelectorAll("dialog")[0];
const dialogLog = document.querySelectorAll("dialog")[1];
const openLogin = document.querySelector(".openLogin");
const openRegister = document.querySelector(".openRegister");

openLogin.addEventListener("click", function() {
  dialogLog.close();
  dialogReg.close();
  dialogLog.showModal();
});

openRegister.addEventListener("click", function() {
  dialogLog.close();
  dialogReg.close();
  dialogReg.showModal();
});

window.onclick = function(event) {
  if (event.target == dialogLog || event.target == dialogReg) {
    dialogLog.close();
    dialogReg.close();
  }
}

//---------------------------------------------------------------------

const filters = document.querySelectorAll(".sidebar dl dd");
const categories = document.querySelectorAll(".sidebar dl dt");

filters.forEach(function (filter, index, itemList){
  filter.addEventListener("click", function(){ 
    toggleFilter(filter); 
  });
});

categories.forEach(function (category, index, categoriesList){
  category.addEventListener("click", function (event){
    resetFilters(event.target);
  });
})

function toggleFilter(filter){  

  if(filter.className === "excluded"){
    filter.classList.remove("excluded");
  }
  else if( filter.className === "selected"){
    filter.classList.remove("selected");
    filter.classList.add("excluded")
  }
  else{
    filter.classList.add("selected")
  }
}

function resetFilters(category){
  let filters = category.parentElement.querySelectorAll("dd");

  filters.forEach(function(filter){
    filter.removeAttribute("class");
  });

}

//---------------------------------------------------------------------

window.addEventListener("load", () => {
  loadCategories();
  loadDefaultRecipes();
});


async function loadDefaultRecipes(){
  //const recipes = await fetch("www.themealdb.com/api/json/v1/1/filter.php?i=chicken");
  const recetas = await (await fetch("./resources/json/DemoRecipes.json")).json();
  printRecipes(recetas.meals);
}

function printRecipes(recipes){
  let articles = "";
  recipes.forEach((recipe)=> {
  articles += 
    `<article class="recipe">
        <a href="./pages/recipe.html?id${recipe.idMeal}"></a>
        <img src="${recipe.strMealThumb}" alt="">
        <div class="preparation">${Math.floor(recipe.idMeal/10)%100} min</div>
        <div class="title fade">
            <h3>${recipe.strMeal}</h4>
        </div>
        <div class="scoreContainer">
            <div class="stars">
                <div class="score" style="width: ${recipe.idMeal%100}%;"></div>
            </div>
        </div>
    </article>`
  });
  document.querySelector(".gridContainer").innerHTML += articles;
}

async function loadCategories(){
  const categories = await(await fetch("./resources/json/Categories.json")).json();
  printCategories(categories.categories);
}

function printCategories(categories){
  let listItems = "";
  categories.forEach((category) => {
    listItems += 
    `<dd><a>${category.strCategory}</a></dd>`;
  });
  document.querySelector(".sidebar > dl:nth-child(1)").innerHTML += listItems;
}

//---------------------------------------------------------------------

