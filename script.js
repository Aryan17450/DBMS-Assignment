document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/recipes')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('recipes-container');
            data.recipes.forEach(recipe => {
                const card = document.createElement('div');
                card.classList.add('recipe-card');
                card.innerHTML = `
                    <h2>${recipe.name}</h2>
                    <p>Cuisine: ${recipe.cuisine}</p>
                    <p>Prep Time: ${recipe.prepTimeMinutes} mins</p>
                `;
                container.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching recipes:', error));
});
