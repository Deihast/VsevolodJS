import config from '../../configs/config.mjs';  // supplies import from config
import cashBox from '../CashBox/cashbox.mjs'; // import cash balance
let { balance } = cashBox; // better to put in index.js
const { supplies } = config;        

class Supplies {
    constructor(suppliesList){ // + cash
        this.suppliesList = Object.values(suppliesList);
    }

    showAllSupplies = () =>{
        console.log(this.suppliesList);
    };

    summaryPrice = () => {
        let summary = 0;
        this.suppliesList.forEach((product) => {
            console.log(product.deliveryPrice);
            // summary = summary + (amount * pricePerUnit + deliveryPrice)
        });
    };
//     buySupplies = () => {

//     };
}

const suppliesNeed = new Supplies(supplies);

suppliesNeed.showAllSupplies();
suppliesNeed.summaryPrice();

