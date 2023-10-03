const cocktails = [
   {
    id: '1',
    name: 'Mojito',
    ingredients: [
      { name: 'Rhum', measure: '6 cl' },
      { name: 'Menthe', measure: '8 feuilles' },
      { name: 'Jus de citron vert', measure: '3 cl' },
      { name: 'Eau gazeuse', measure: 'Top up' },
      { name: 'Sucre', measure: '2 cuillères à café' }
    ],
    instructions: 'Mélanger les feuilles de menthe, le jus de citron vert et le sucre dans un verre. Ajouter le rhum et de la glace. Remplir avec de l\'eau gazeuse. Décorer avec des feuilles de menthe et une tranche de citron vert.'
  }
]


// Fonction pour afficher un cocktail
function updateCocktailCard(cocktailCard, cocktail) {
  // Afficher l'image
  const image = cocktailCard.querySelector('.cocktail-image');
  image.setAttribute('src', `./images/${cocktail.id}.jpg`);

  // Afficher le titre
  const title = cocktailCard.querySelector('.cocktail-title');
  title.innerText = cocktail.name;

  // Afficher la liste des ingrédients
  const ingredients = cocktailCard.querySelector('.cocktail-recipe__ingredients ul');
  ingredients.innerHTML = '';
  cocktail.ingredients.forEach((ingredient) => {
    const listItem = document.createElement('li');
    listItem.innerText = `${ingredient.name} - ${ingredient.measure}`;
    ingredients.appendChild(listItem);
  });

  // Afficher la description
  const description = cocktailCard.querySelector('.cocktail-recipe__description p');
  description.innerText = cocktail.instructions;
}

// Fonction pour afficher la liste des cocktails
function showCocktails() {
  const cocktailList = document.querySelector('.cocktail-cards');
  cocktails.forEach((cocktail) => {
    const cocktailCard = document.createElement('li');
    cocktailCard.classList.add('cocktail-card');
    cocktailCard.innerHTML = `
      <div class="cocktail-image-container">
        <img src="" alt="${cocktail.name}" class="cocktail-image">
      </div>
      <h2 class="cocktail-title">${cocktail.name}</h2>
      <div class="cocktail-recipe__ingredients">
        <ul></ul>
      </div>
      <div class="cocktail-recipe__description">
        <p></p>
      </div>
      <button class="custom-button" data-cocktail-id="${cocktail.id}">Commander</button>
    `;
    cocktailList.appendChild(cocktailCard);
    updateCocktailCard(cocktailCard, cocktail);
  });
}

// Afficher les cocktails lors du chargement de la page
window.addEventListener('load', showCocktails);
``
