

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




function withdrawal(amount,total) {
    if (total<50){
        console.log(" Access denied you have reached the minimum for withdawal request")
    }
    else if (amount>total){
        console.log("Access denied insufficent funds.")
    }
    else if (amount>10000){
        console.log("Maximum withdraw limit reached.");
    }
    else if(total>=50 | amount<=total){
          console.log("Access granted your remanin balance is " + (total - amount));
    }
}
