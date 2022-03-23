//Q1
function fiveToOneHundred(){
    for (let i = 5; i <= 100; i++){
        console.log(i)
    }
}
console.log("Q1---")
fiveToOneHundred()

function MultiplesOfThree(){
    for(let i = 1; i < 100; i++){
        if(i % 3 === 0){
            console.log(i)
        }
    }
}
console.log("Q2---")
MultiplesOfThree();

// 3 or 5 mutlipes

function MultiplesOfThreeOrFive (){
    for (let i = 1; i < 100; i++){
        if (i % 3 ===0 || i % 5 === 0) {
            console.log(i);
        }
    }
}
console.log("Q3---")
MultiplesOfThreeOrFive ()


// q 4
function untilNum(n){ 
    for (let i = 1 ; i <= n; i++){
        console.log(i)
    }
}
console.log ("Q4---")
untilNum(42)

function multiply(num1, num2) {

 return num1 * num2

}
console.log("Q5---")
console.log(multiply(3, 2))


function add(num1, num2){
    if(num1 === num2) {
    return (num1 + num2) * 3; 
    } else {
     return num1 + num2;
    }
}
console.log("Q6---")
console.log(add(2, 4))

function isNegative(n){
    if (n < 0){
        return true;
    } else {
        return false;
    }
   }
        
console.log ("Q7---")
console.log(isNegative(3));

function triangleArea(b, h){
    return (b * h)/ 2;
}
console.log("Q8 ---")
console.log(triangleArea(5, 7))

function betweenTwentyAndFourty(n){
  if (19 < n < 101) {
    return true;
  } else {
    return false;
  }
}
console.log("Q9 ---")
console.log (betweenTwentyAndFourty(21))


function largest(num1, num2, num3){
  if (num1 > num2 && num1 > num3){
    return num1;
  } else if (num2 > num1 && num2 > num3){
    return num2;
  } else if (num3 > num1 && num3 > num2){
    return num3;
  }
}
console.log("Q10 ---")
console.log ((largest(3, 6, 9)))

    