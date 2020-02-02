import axios from 'axios';

export default class Search {
    constructor(id) {
        this.id = id;
    }

    async getResult() {
        const res = await axios(`https://api.punkapi.com/v2/beers/?page=2&per_page=80`);
        this.result = res.data;
    }
} 