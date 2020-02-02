import { elements } from './base';

export const clearResult = () => {
    elements.resutlPages.innerHTML = "";
    elements.resultList.innerHTML = "";
    elements.recipe.innerHTML = "";
}

export const clearList = () => {
    elements.shoppingList.innerHTML = "";
}

export const clearRecipe = () => {
    elements.recipe.innerHTML = "";
}

export const clearLoader = () => {
    const el = elements.res;
    const loader = document.querySelector('.loader');
    el.removeChild(loader);
}