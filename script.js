function toggleContent(recipeId) {
    var details = document.getElementById('recipe-details' + recipeId.slice(-1)); 
    var ingredients = document.getElementById('ingredients' + recipeId.slice(-1)); 
    var button = document.querySelector('#' + recipeId + ' button');

    if (ingredients.style.display === 'none') {
        ingredients.style.display = 'block';
        details.style.display = 'none';
        button.textContent = 'Show Recipe';
    } else {
        ingredients.style.display = 'none';
        details.style.display = 'block';
        button.textContent = 'Show Ingredients';
    }
}
