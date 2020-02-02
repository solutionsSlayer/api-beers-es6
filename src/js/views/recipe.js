
const createRecipe = result => {
    const recipe = `
        <figure class="recipe__fig">
            <img src="${result.image_url}" alt="${result.name}" class="recipe__img">
            <h1 class="recipe__title">
                <span>${result.name}</span>
            </h1>
        </figure>
        <div class="recipe__details">
            <div class="recipe__info">
                <span class="recipe__info-data recipe__info-data--minutes">Description</span>
                <span class="recipe__info-text">${result.description}</span>
            </div>
        </div>
        <div class="recipe__info-buttons">
            <button title="Enlever du panier" data-min="false" class="btn-tiny">
                <svg>
                    <use href="img/icons.svg#icon-circle-with-minus"></use>
                </svg>
            </button>
            <button title="Ajouter au panier" data-add="true" class="btn-tiny">
                <svg>
                    <use href="img/icons.svg#icon-circle-with-plus"></use>
                </svg>
            </button>
        </div>
    `;
    return recipe;
}

export const renderRecipe = (result, parent) => {   
    result = result[0];
    const recipe = createRecipe(result);

    parent.insertAdjacentHTML('afterbegin', recipe);
}