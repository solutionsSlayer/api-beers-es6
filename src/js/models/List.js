import uniqid from 'uniqid';

export default class List {
    constructor() {
        this.items = [];
        this.price = 0;
    }

    calcPrice() {
        this.price = 0;
        this.items.forEach(el => this.price += (el.count * el.price) / 10);
    }

    checkList(lastItem) {
        let boolean = false;
        this.items.forEach(el => {
            if(lastItem === el.name) {
                boolean = true;
            } 
        }); 
        return boolean;
    }

    additem(count, name) {
        const item = {
            id: uniqid(),
            count,
            name,
            price: (count * 5) / 10 //Assuming price is 5€ for 10 beers
        }

        this.items.push(item);
        return item;
    }

    deleteItem(id) {
        const index = this.items.findIndex(el => el.id === id);
        this.items.splice(index);
    }

    updateCount(id, newCount, mode = true) {
        if(mode) {
            this.items.find(el => el.id === id).count += newCount;
        } 
        else if(!mode) {
            let min = this.items.find(el => el.id === id).count;

            if(min > 0 && mode) {
                this.items.find(el => el.id === id).count += newCount;
            } 
            else if(min > 0 && !mode) {
                this.items.find(el => el.id === id).count -= newCount;
            }
            else if(min === 0 && !mode) {
                const el = this.items.find(el => el.id === id);
                this.deleteItem(el);
            }
        }
        
    }
}