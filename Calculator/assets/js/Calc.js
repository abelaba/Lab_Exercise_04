function Add(x,y){
    console.log(x+y);
}
function sub(x,y){
    console.log(x-y);
}
function mult(x,y){
    console.log(x*y);
}
function div(x,y){
    if (y>0){
        console.log(x/y)
    }
    else{
        console.log("division by zero")
    }
}

function sum(array){

  var a = 0;
  array.forEach(function(member) {
     a = parseInt(member) + a;
  });

  console.log(a);;

}

function product(array){

  var a = 1;
  array.forEach(function(member) {
     a = parseInt(member) * a;
  });

  console.log(a);;

}

(function () {
    let choice = eval(prompt("Choose an operation\n 1 for addition by array \n 2 for by array multiplication \n 3 for subtraction \n 4 for division \n 5 for simple add \n 6 for simple mult"))
    if (choice == 1 | choice == 2) {
      let par = new Array();

      let numbers;

      numbers = prompt("Size of array ? ");
      for (let i = 0; i < parseInt(numbers); i++) {
          par[i] = prompt("Your Numbers " + (i + 1));
      };

        if (choice == 1) {
            sum(par);
        } else {
            product(par);
        }
    } else {
        let x = eval(prompt("Enter the first number"))
        let y = eval(prompt("Enter the second number"))
        if (choice == 3) {
            sub(x, y);}
        else if( choice==4) {
            div(x, y);
        }
        else if (choice == 5) {
            Add(x, y);
        }
        else if (choice == 6) {
            mult(x, y);
        }
        else {
            console.log("Wrong choice");
        }


    }
})()
