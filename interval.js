console.log(1);
console.log(2);
// const myVar = setTimeout(() => {
//     console.log(3)
// }, 2000)
// clearTimeout(myVar);
console.log(3)
console.log(4);
console.log(5);
console.log(6);

// let sum = 0;
// const clockId = setInterval(() => {
//     sum++;
//     if(sum > 6){
//         clearInterval(clockId)
//     }
//     console.log(clockId, sum)
    
// }, 2000)


// interval---------->
let num = 0;
const clockId = setInterval(() => {
    num++;
    if(num >= 5){
        clearInterval(clockId)
    }
    
    console.log(clockId, num)
}, 2000)