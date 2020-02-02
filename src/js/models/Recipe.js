import axios from 'axios';

export default class Recipe {
    constructor(id) {
        this.id = id;
    }

    async getResults() {
        try {
            const res = await axios(`https://api.punkapi.com/v2/beers/${this.id}`);
            this.result = res.data;
        } catch (err) {
            console.log(err);
        }
    }

    calcBeer() { 
        this.number = 10;
        this.price = 5;
        this.total = this.number * this.price;
     }
}