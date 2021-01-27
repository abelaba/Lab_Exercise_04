

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




(function () {
    let x = eval(prompt("Choose\n 1 = Deposit \n 2 = Withdrawal \n 3 = Transfer \n 4 = Balance" ));

    var total = 600;
    if (x==1 | x==2 |x==3 |x==5){
        let amount = eval(prompt("Enter the Amount"));
        if (x == 1) {
            Deposit(amount,total);
                    }
        else if (x == 2) {
            withdrawal(amount,total);
            }
        else if (x == 3) {
            Transfer(amount,total);
        }

    }
    else if(x==4){
        balance(total);
    }
})()
