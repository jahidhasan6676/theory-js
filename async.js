// console.log(1);
// console.log(2);

// setTimeout(() => {
//     console.log('lazy logged')
// }, 4000)
// console.log(4);
// console.log(5);
// console.log(6);

// function doSomething(){
//     console.log(3)
// }

// function one(){
//     console.log('A');
//     two();
//     console.log('C');
// }
// function two(){
//     console.log('B');
//     four();
    
// }
// function four(){
//     console.log('d')
// }
// one();

// console.log('i');
// console.log('eat');
// console.log('ice cream');

// console.log('i');
// setTimeout(() => {
//     console.log('eat')
// },2000)

// console.log('ice cream')

// const myLoader = () => {
//     return new Promise((resolve, reject) => {
//         const success = Math.random();
//         if(success <= 0.5){
//             resolve(success)
//         }
//         else{
//             reject(success)
//         }
//     })
// }
// myLoader()
// .then(data => console.log('resolved data', data))
// .catch(err => console.log('rejected with value', err))


// const myLoading = () =>{
//    return new Promise((resolve, reject) => {
//     const bangla = 'failed';
//     if(bangla === 'pass'){
//         resolve('misty khao')
//     }
//     else{
//         reject('mara khao')
//     }
//    }) 
// }
// myLoading()
// .then(data => console.log('resolved data:', data))
// .catch(error => console.log('reject data:', error))