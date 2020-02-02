import { elements } from './base'

export const deleteItem = id => {
    const item = document.querySelector(`[data-itemid="${id}"]`);
    if(item) item.parentNode.removeChild(item);
}

const createLastShoppingItem = el => {
    const item = `
    <li class="shopping__item" data-itemid="${el.id}">
        <div class="shopping__count">
            <input type="number" value="${el.count}">
            <p style="padding-right: 15px;">X</p>
        </div>
        <p class="shopping__description">${el.name}</p>
        <button class="shopping__delete btn-tiny">
            <svg>
                <use href="img/icons.svg#icon-circle-with-cross"></use>
            </svg>
        </button>
    </li>
    `;

    elements.shoppingList.insertAdjacentHTML('afterbegin', item);
}

const createListItem = el => {
    const item = `
    <li class="shopping__item" data-itemid="${el.id}">
        <div class="shopping__count">
            <input type="number" value="${el.count}">
            <p style="padding-right: 15px;">X</p>
        </div>
        <p class="shopping__description">${el.name}</p>
        <button class="shopping__delete btn-tiny">
            <svg>
                <use href="img/icons.svg#icon-circle-with-cross"></use>
            </svg>
        </button>
    </li>
    `;

    elements.shoppingList.insertAdjacentHTML('afterbegin', item);
}

export const renderShoppingList = (list, allItems = true) => {
    let item;

    if(list.length === 1 && allItems) {
        item = list[0];
        createLastShoppingItem(item);
    } 
    else if(list.length > 1 && allItems) {
        item = list[list.length -1];
        createLastShoppingItem(item);
    } 
    else if(!allItems) {
        list.forEach(el => createListItem(el));
    }
}