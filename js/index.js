// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
  
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((oneGreenPepper) => {
    if (state.greenPeppers) {  // se a condição se verifica
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  if (state.whiteSauce) {
    document.querySelector('.sauce').classList.add('sauce-white')  // querySelector: só vai buscar o primeiro elemento que encontra;
  }
  else {
    document.querySelector('.sauce').classList.remove('sauce-white')
  }
}

function renderGlutenFreeCrust() {
  if (state.glutenFreeCrust) {
    document.querySelector('.crust').classList.add('crust-gluten-free')  
  }
  else {
    document.querySelector('.crust').classList.remove('crust-gluten-free')
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if (state.pepperoni){
    document.querySelector('.btn-pepperoni').classList.add('active')
  }
  else {
    document.querySelector('.btn-pepperoni').classList.remove('active')
  }
  if (state.mushrooms){
    document.querySelector('.btn.btn-mushrooms').classList.add('active')
  }
  else {
    document.querySelector('.btn.btn-mushrooms').classList.remove('active')
  }
  if (state.greenPeppers){
    document.querySelector('.btn.btn-green-peppers').classList.add('active')
  }
  else {
    document.querySelector('.btn.btn-green-peppers').classList.remove('active')
  }
  if (state.whiteSauce){
    document.querySelector('.btn.btn-sauce').classList.add('active')
  }
  else {
    document.querySelector('.btn.btn-sauce').classList.remove('active')
  }
  if (state.glutenFreeCrust){
    document.querySelector('.btn.btn-crust').classList.add('active')
  }
  else {
    document.querySelector('.btn.btn-crust').classList.remove('active')
  }
   
  
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  if (state.pepperoni){
    document.getElementById("pepperoni").style.visibility = 'visible'
  }
  else {
    document.getElementById("pepperoni").style.visibility = 'hidden'
  }

  if (state.mushrooms){
    document.getElementById("mushrooms").style.visibility = 'visible'
  }
  else {
    document.getElementById("mushrooms").style.visibility = 'hidden'
  }

  if (state.greenPeppers){
    document.getElementById("greenPeppers").style.visibility = 'visible'
  }
  else {
    document.getElementById("greenPeppers").style.visibility = 'hidden'
  }

  if (state.whiteSauce){
    document.getElementById("whiteSauce").style.visibility = 'visible'
  }
  else {
    document.getElementById("whiteSauce").style.visibility = 'hidden'
  }

  if (state.glutenFreeCrust){
    document.getElementById("glutenFree").style.visibility = 'visible'
  }
  else {
    document.getElementById("glutenFree").style.visibility = 'hidden'
  }

}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {   
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {   
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {   
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector('.btn.btn-sauce').addEventListener('click', function () {   
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {   
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
