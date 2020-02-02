import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';
import * as SearchView from './views/searchView';
import * as RecipeView from './views/recipe';
import * as clearView from './views/clear';
import * as shoppingView from './views/shopping';
import { elements, loader } from './views/base';

var state = {};

/*
SEARCH CONTROLLER 
*/

const controlSearch = async () => {
    // Cancel default reloading event
    event.preventDefault();

    // 1-Get input value
    const query = elements.serchInput.value;

    if(query) {
        // Instance search
        state.search = new Search(query);
        // Clear Result
        clearView.clearResult();
        // Loader
        loader(elements.res);
        // Get data from API
        await state.search.getResult(query); 
        // Clear loader
        clearView.clearLoader();
        // Render result
        SearchView.renderResults(state.search.result);
    }
}

elements.searchBtn.addEventListener('click', controlSearch);
elements.resutlPages.addEventListener('click', event => {
    const btn = event.target.closest('.btn-inline');

    if(btn) {
        clearView.clearResult();
        SearchView.renderResults(state.search.result, parseInt(btn.dataset.goto))
    }
});

/*
RECIPE CONTROLLER 
*/

const recipeControl = async () => {
    const id = window.location.hash.replace('#', '');
    
    if(id) {
        state.recipe = new Recipe(id);
        // Clear renderRecipe
        clearView.clearRecipe();
        // Get recipe data
        await state.recipe.getResults();
        // Render Recipe data
        RecipeView.renderRecipe(state.recipe.result, elements.recipe);
    }
}

window.addEventListener('hashchange', recipeControl);

/*
SHOPPING CONTROLLER 
*/

state.shopping = new List();

const shoppingControl = () => {
    const recipeName = state.recipe.result[0].name;
    const data = event.target.closest('.btn-tiny');

    if(data.dataset.min) {
        const obj = state.shopping.checkList(recipeName);
        clearView.clearList();
        if(obj) {
            let id = state.shopping.items.find(el => el.name === recipeName).id;
            state.shopping.updateCount(id, 10, false);
        }
    } else if(data.dataset.add) {
        const obj = state.shopping.checkList(recipeName);
        clearView.clearList();
        if(!obj) {
            // Assuming all prices is 5 for 10
            state.shopping.additem(10, recipeName);
        } else if(obj) {
            let id = state.shopping.items.find(el => el.name === recipeName).id;
            state.shopping.updateCount(id, 10);
        }

        console.log(state.shopping)
    }

    state.shopping.calcPrice();
    elements.shoppingCount.innerHTML = `${state.shopping.price} €`;
    shoppingView.renderShoppingList(state.shopping.items, false);
}

elements.recipe.addEventListener('click', shoppingControl);

// Suppr shop el from ui & dataModel
elements.shoppingList.addEventListener('click', event => {
    const el = event.target.closest('.shopping__item').dataset.itemid;
    state.shopping.deleteItem(el);
    shoppingView.deleteItem(el);
    state.shopping.calcPrice();
    elements.shoppingCount.innerHTML = `${state.shopping.price} €`;
});
