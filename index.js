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
