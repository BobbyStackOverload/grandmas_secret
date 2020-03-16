'use scrict';

const addRecipeButton = document.getElementById("addRecipeButton");
const closeModalButton = document.getElementsByClassName("closeModalButton")[0];
const addIngredientButton = document.getElementById("addIngredientButton");
const ingredientName = document.getElementById('ingredientName');
const ingredients = [];
const loginButton = document.getElementById("loginButton");

let count = 0;

while (count < ingredientName.options.length) {
    ingredients.push([ingredientName[count].innerHTML, ingredientName[count].value]);
    count +=1 ;
}

addRecipeButton.addEventListener("click", function(e) {
    const addRecipeModal = document.getElementById("addRecipeModal");
    addRecipeModal.style.display = "block";
});

closeModalButton.addEventListener("click", function(e) {
    const modal = document.getElementById("addRecipeModal");
    modal.style.display = "none";
});

addIngredientButton.addEventListener("click", function(e) {
    // let count = 0;
    // const ingredients = [];
    const ingredientNameSelectDiv = document.getElementById("ingredientNameSelect");
    const ingredientAmountDiv = document.getElementById("ingredientAmount");
    const ingredientMeasurementDiv = document.getElementById('ingredientMeasurement');
    const ingredientMeasurementOptionDiv = document.getElementById('ingredientMeasurementOptionDiv');
    const ingredientSelectLandingSpot = document.getElementById('ingrdientSelectLandingSpot');

    const ingredientNameSelect = document.createElement('select');
    const ingredientMeasurementSelect = document.createElement('select');
    const tsp = document.createElement('option');
    const tbsp = document.createElement('option');
    const cup = document.createElement('option');
    const quart = document.createElement('option');
    const gallon = document.createElement('option');
    const pint = document.createElement('option');
    const oz = document.createElement('option');
    const lb = document.createElement('option');
    
    const ingredientAmountInput = document.createElement("input");
  
    ingredientNameSelect.id = "ingredientName";
    ingredientNameSelect.name = "ingredientName";
    ingredientNameSelect.value = ""
    ingredientMeasurementSelect.id = "ingredientMeasurement";
    ingredientMeasurementSelect.name = "ingredientMeasurement";
    ingredientAmountInput.type = "number";
    ingredientAmountInput.step = "0.25";
    ingredientAmountInput.name="ingredientAmount";
    // ingredientAmountInput.value="0";
    tsp.value = "tsp";
    tsp.innerHTML = "tsp";
    tbsp.value = "tbsp";
    tbsp.innerHTML = "tbsp"
    cup.value = "cup";
    cup.innerHTML = "cup";
    quart.value = "quart";
    quart.innerHTML = "quart";
    gallon.value = "gallon";
    gallon.innerHTML = "gallon";
    pint.value = "pint";
    pint.innerHTML = "pint";
    oz.value = "oz";
    oz.innerHTML = "oz";
    lb.value = "lb";
    lb.innerHTML = "lb";
    ingredientMeasurementSelect.appendChild(tsp);
    ingredientMeasurementSelect.appendChild(tbsp);
    ingredientMeasurementSelect.appendChild(cup);
    ingredientMeasurementSelect.appendChild(quart);
    ingredientMeasurementSelect.appendChild(gallon);
    ingredientMeasurementSelect.appendChild(pint);
    ingredientMeasurementSelect.appendChild(oz);
    ingredientMeasurementSelect.appendChild(lb);

    ingredients.map(ingredient => {
        let ingredientNameOption = document.createElement('option');
        ingredientNameOption.value = ingredient[1];
        ingredientNameOption.innerHTML = ingredient[0];
        ingredientNameSelect.appendChild(ingredientNameOption);
    });
  
    ingredientSelectLandingSpot.appendChild(ingredientNameSelect);
    ingredientSelectLandingSpot.appendChild(ingredientAmountInput);
    ingredientSelectLandingSpot.appendChild(ingredientMeasurementSelect);
    
});

loginButton.addEventListener("click", function(e) {
    const loginModal = document.getElementById("login-modal");
    console.log(loginModal);
    loginModal.style.display = "block";
});