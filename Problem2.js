let balance = 0;

function deposit(amount) {
    balance += amount;
    console.log(`Deposited: $${amount}`);
}

function withdraw(amount) {
    if (amount > balance) {
        console.log("Insufficient funds!");

    } else {
        balance -= amount;
        console.log(`Withdrew: $${amount}`);
        return balance;
    }
}

function getBalance() {
    console.log(`Current balance: $${balance}`);
    return balance;
}

deposit(150);
withdraw(200);
getBalance();
