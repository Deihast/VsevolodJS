class CashBox {
    static instance;

    constructor(){
        if (CashBox.instance) {
            return CashBox.instance
        }
        this.balance = 0;
        CashBox.instance = this
    }

    moneyInput = (value) => {
        this.balance = this.balance + value;
        console.log(`You put ${value} to the cashbox`);
    };

    showBalance = () => {
        console.log(`Cash balance: ${this.balance}`);
    };

    moneyTake = (value) => {
        this.balance = this.balance - value;
        console.log(`You extracted ${value}`);
    };

}

const cashBox = new CashBox();
export default cashBox;

cashBox.moneyInput(500);
cashBox.moneyInput(900);
cashBox.showBalance();
cashBox.moneyTake(100);
cashBox.showBalance();
