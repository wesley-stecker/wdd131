import recipes from './recipes.mjs';

const mainContent = document.getElementById('maincontent');

function getRandomNumber(num) {
    return Math.floor(Math.random() * num);
}


function getRandomRecipe() {
    const randomIndex = getRandomNumber(recipes.length);
    return recipes[randomIndex];
}


// Function to create a recipe card
function createRecipeCard(recipe) {
    return `
        <div class="recipe">
            <img class="foodimg" src="${recipe.image}" alt="${recipe.name}">
            <div class="flexbox">
                <h3 class="tag">${recipe.tags.join(' ')}</h3>
                <h2 class="name">${recipe.name}</h2>
                <span role="img" class="rating" aria-label="Rating: ${recipe.rating} out of 5 stars">
                    ${'⭐'.repeat(Math.floor(recipe.rating))}${'☆'.repeat(5 - Math.floor(recipe.rating))}
                </span>
                <p class="description">${recipe.description}</p>
            </div>
        </div>
    `;
}

// Populate the main content with recipes
function loadRandomRecipe() {
    const randomRecipe = getRandomRecipe();
    mainContent.innerHTML = createRecipeCard(randomRecipe);
}
// Load recipes when the script runs
loadRandomRecipe();
