
export const elements = {
    searchBtn: document.querySelector('.search__btn'),
    serchInput: document.querySelector('.search__field'),
    resultList: document.querySelector('.results__list'),
    resutlPages: document.querySelector('.results__pages'),
    btnInline: document.querySelector('.btn-inline'),
    res: document.querySelector('.results'),
    recipe: document.querySelector('.recipe'),
    btnTiny: document.querySelector('.btn-tiny'),
    shoppingList: document.querySelector('.shopping__list'),
    shoppingCount: document.querySelector('.shopping__count-total'),
    shoppingDelete: document.querySelector('.shopping__delete')
}

export const elementString = {
    loader : 'loader'
}

export const loader = parent => {
    const loader = `
        <div class="${elementString.loader}">
            <svg>
                <use href="img/icons.svg#icon-cw"></use>
            </svg>
        </div>
    `;

    parent.insertAdjacentHTML('afterbegin', loader);
}