document.addEventListener('DOMContentLoaded', () => {
    const recipesContainer = document.getElementById('recipes-container');
    const API_URL = 'http://localhost:3000/api/recipes'; // This is the URL for your backend

    fetch(API_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.recipes && Array.isArray(data.recipes)) {
                data.recipes.forEach(recipe => {
                    const recipeCard = document.createElement('div');
                    recipeCard.classList.add('recipe-card');

                    const tagsHtml = recipe.tags.map(tag => `<span>${tag}</span>`).join('');
                    
                    recipeCard.innerHTML = `
                        <img src="${recipe.image}" alt="${recipe.name}">
                        <div class="recipe-content">
                            <h2>${recipe.name}</h2>
                            <p class="recipe-details"><strong>Cuisine:</strong> ${recipe.cuisine}</p>
                            <p class="recipe-details"><strong>Difficulty:</strong> ${recipe.difficulty}</p>
                            <div class="recipe-tags">${tagsHtml}</div>
                        </div>
                    `;
                    recipesContainer.appendChild(recipeCard);
                });
            } else {
                recipesContainer.innerHTML = '<p>No recipes found.</p>';
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            recipesContainer.innerHTML = `<p>Error loading recipes. Please make sure the server is running.</p>`;
        });
});
