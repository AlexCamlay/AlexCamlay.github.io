document.addEventListener("DOMContentLoaded", function() {
	const recipesList = document.querySelector("#recipes-list");
	recipesList.addEventListener("click", e => {
	  if (e.target.tagName === "A") {
		const recipeId = e.target.getAttribute("href");
		if (!recipeId) return; // on vérifie si l'élément cliqué possède un attribut href
		const recipeSection = document.querySelector(`#${recipeId.slice(1)}`);
		if (!recipeSection) return; //on vérifie si l'élément existe dans le DOM
		const activeSections = document.querySelectorAll(".cocktail-recipe.active");
		activeSections.forEach(section => section.classList.remove("active"));
		recipeSection.classList.add("active");
		centerIfOnlyOneElementActive();
	  }
	});
	
	const searchForm = document.querySelector("#search-form");
	const searchResults = document.querySelector("#search-results");
	searchForm.addEventListener("submit", function(event) {
	  event.preventDefault();
	  const searchTerm = this.querySelector("input").value.toLowerCase();
	  const filteredRecipes = searchRecipes(searchTerm);
	  displaySearchResults(filteredRecipes);
	  centerIfOnlyOneElementActive();
	});

	function searchRecipes(searchTerm) {
		const allRecipes = document.querySelectorAll('.cocktail-recipe');
		const searchResults = [];
		allRecipes.forEach(function(recipe) {
			const title = recipe.querySelector('.cocktail-recipe__title').textContent.toLowerCase();
			const ingredients = recipe.querySelector('.cocktail-recipe__ingredients').textContent.toLowerCase();
			if (title.toLowerCase().includes(searchTerm) || ingredients.toLowerCase().includes(searchTerm)) {
				searchResults.push(recipe);
			}
		});
		return searchResults;
	}
	
	// Fonction pour afficher les résultats de recherche
function displaySearchResults(searchResults) {
   // Récupérez toutes les recettes
   const allRecipes = document.querySelectorAll('.cocktail-recipe');
   // Masquez toutes les recettes
   allRecipes.forEach(function(recipe) {
      recipe.classList.remove("active");
   });
   // Affichez uniquement les recettes correspondant à la recherche
   searchResults.forEach(function(recipe) {
      recipe.classList.add("active");
   });
   
		window.location.hash = searchResults[0].id;
		
		
		
}


		function centerIfOnlyOneElementActive() {
			const activeRecipes = document.querySelectorAll('.cocktail-recipe.active');
const recipeList = document.getElementById('selected-recipe');

if (activeRecipes.length === 1) {
    recipeList.style.display = "flex";
    recipeList.style.alignItems = "center";
    recipeList.style.justifyContent = "center";
} else {
    recipeList.style.display = "";
    recipeList.style.alignItems = "";
    recipeList.style.justifyContent = "";
}

		}

});