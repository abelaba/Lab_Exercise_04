
let Bank = {
  total:600,
  deposit:function(amount) {
    this.total = this.total + amount
      console.log("Success. Your balance is "+ (this.total));
      leavstay()

  },
  balance:function () {
      console.log("Your balance is " + this.total);
      leavstay()

  },
  transfer:function(amount){
      let x = (this.total-amount);
      if(x > 0){
        this.total = this.total - amount;
          console.log("Transfer successful. Your remanining balance is "+ x);
      }
      else{
          console.log("Insufficent Balance.");
      }
      leavstay()


  },
  withdrawal:function(amount,total) {
      if (this.total<50){
          console.log(" Access denied you have reached the minimum for withdawal request")
      }
      else if (amount>this.total){
          console.log("Access denied insufficent funds.")
      }
      else if (amount>10000){
          console.log("Maximum withdraw limit reached.");
      }
      else if(this.total>=50 | amount<=this.total){
        this.total = this.total - amount


            console.log("Access granted your remanin balance is " + (this.total));
      }
      leavstay()

  }



}


function leavstay() {
  var question = prompt("Do you want to leave or stay?\n 1 = leave\n 2 = Stay ")
  if (question == "1") {

    console.log("End.");

  }else if(question == "2") {
    main()

  }

}

function main() {
    let x = eval(prompt("Choose\n 1 = Deposit \n 2 = Withdrawal \n 3 = Transfer \n 4 = Balance" ));


    if (x==1 | x==2 |x==3 |x==5){
        let amount = eval(prompt("Enter the Amount"));
        if (x == 1) {
            Bank.deposit(amount);
                    }
        else if (x == 2) {
            Bank.withdrawal(amount);
            }
        else if (x == 3) {
            Bank.transfer(amount);
        }

    }
    else if(x==4){
        Bank.balance();
    }
}




(function(){
  main()
})()
