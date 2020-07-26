//slice method
const foods = ["pizza","burger", "ingerChips", "donuts", "springRoll"];
var modifiedFood=foods.slice(1,4);
console.log(modifiedFood);

//splice method
const newFoods = ["pizza", "burger", "fingerShips", "donuts", "springRoll"];
newFoods.splice(2,0,"noodles", "icecream");
console.log(newFoods);

//Even number
let number=[12,324,213,4,2,3,45,42,34];
let EvenNumber=number.filter(function(num){
       number=num % 2 === 0;
       num=Math.floor(num / 10);
    return number;
});
console.log("Even Number:" ,EvenNumber);


//prime number
let newnumber=[12,324,213,4,2,3,45,42,34];
let PrimeNumber=newnumber.filter(function(num){
    newnumber=num%10;
    num=Math.floor(num / num);
    return newnumber;    
});

console.log("Prime Number:",PrimeNumber);
