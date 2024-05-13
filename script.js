// get a reference to the button
const toggleButton = document.querySelector('#toggle-ingredients');
  
// get a reference to the ingredients list
const ingredientsList = document.querySelector('#ingredients-list');
  
// add a click event listener to the button
toggleButton.addEventListener('click', function() {
  // toggle the 'hidden' class on the ingredients list
  ingredientsList.classList.toggle('hidden');
    
  // update the text of the button
  if (ingredientsList.classList.contains('hidden')) {
    toggleButton.textContent = 'Show Ingredients';
  } else {
    toggleButton.textContent = 'Hide Ingredients';
  }
});
