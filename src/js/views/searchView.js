import { elements, elementString } from './base'

const createButton = (page, type) => {
    const button = `
    <button class="btn-inline results__btn--${type}" data-goto="${ type === 'next' ? page + 1 : page - 1 }">
        <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-${ type === 'next' ? 'right' : 'left' }"></use>
        </svg>
        <span>Page ${ type === 'next' ? page + 1 : page - 1 }</span>
    </button>
    `;

    return button;
}

const renderButtons = (results, page, pages) => {
    let button, prev, next;

    if(page === 1 && page < pages) {
        button = createButton(page, 'next');
    } else if(page > 1 && page < pages) {
        prev = createButton(page, 'prev');
        next = createButton(page, 'next');

        elements.resutlPages.insertAdjacentHTML('afterbegin', prev);
        elements.resutlPages.insertAdjacentHTML('afterbegin', next);
    } else if(page === pages && page > 1) {
        button = createButton(page, 'prev');
    }

    if(button) {
        elements.resutlPages.insertAdjacentHTML('afterbegin', button);
    }
}

const renderResult = el => {
    const markup = `
    <li>
        <a class="results__link" href="#${el.id}">
            <figure class="results__fig">
                <img src="${el.image_url}" alt="${el.name}">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${el.name}</h4>
                <p class="results__author">${el.tagline}</p>
            </div>
        </a>
    </li>
    `;

    elements.resultList.insertAdjacentHTML('beforeend', markup);
}

export const renderResults = (results, page = 1, resPerPage = 15) => {
    const pages = Math.ceil(results.length / 15);

    let start = resPerPage * (page - 1);
    let end = resPerPage * page;

    renderButtons(results.length, page, pages);

    results.slice(start, end).forEach(renderResult);
}