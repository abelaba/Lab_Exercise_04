

function Deposit(amount,total) {
    console.log("Success. Your balance is "+ (total + amount));

}
function balance(total) {
    console.log("Your balance is " + total);

}

function Transfer(amount,total){
    let x = (total-amount);
    if(x > 0){
        console.log("Transfer successful. Your remanining balance is "+ x);
    }
    else{
        console.log("Insufficent Balance.");
    }


}
