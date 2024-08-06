// Homework

// 1-task
// let arrList = []
// function findArr(a){
//     let ArrNumber =prompt("enter number !!!") - 0
//     arrList.push(ArrNumber)
//     let newSize = a -1
//     if(newSize > 0){
//         findArr(newSize)
//     }
// }
// findArr(5)
// console.log(arrList); 
// function findMax(array){
//     let max = array[0]
//     array.filter(item => {
//         if(max < item){
//             max = item
//         }
//     });
//     console.log(`Max: ${max}`);
// }
// findMax(arrList)

// 2-task
// const arr1 = [5,6,true,null,8]
// const arr2 = [0,2,5,false,6]
// const all = arr1.concat(arr2)
// const res = all.reduce((sum, item) => {
//     sum += item
//     return sum
// }, 0)
// console.log(all);
// console.log(`Yeg'indisi = ${res}`);

// 3-task
// let num = [3,2,15,65,1,5,8]
// let min = num.indexOf(Math.min(...num))
// console.log(`the small num of index = ${min}`);

// 5-task
// let arr1 = [5,4,3,6,3,7,1]
// let arr2 = [22,1,42,34,55,67,11,32]
// let all = arr1.concat(arr2)
// console.log(all.sort((a, b) => a - b));

// 6-task
// let carsArr = [
//     {
//         name: "Lasetti",
//         price: 9000
//     },
//     {
//         name: "Damas",
//         price: 7800
//     },
//     {
//         name: "Cobalt",
//         price: 12500
//     },
//     {
//         name: "Gentra",
//         price: 14000
//     },
//     {
//         name: "Onix",
//         price: 17000
//     }
// ]
// let carName = carsArr.sort((a , b) => a.name.localeCompare(b.name) )
// let carPrice = carsArr.sort((a, b) => a.price > b.price ? 1 : -1)
// console.log(carName.map(item => item.name));
// console.log(carPrice.map(item => item.price));

// 7-task
// let arr = ["Salom" , "Rahmat"]
// let first = arr[0]
// arr.shift()
// arr.splice(0,0, "Zor" ,"Yomon")
// arr.unshift(first)
// console.log(arr);

// 8-task
// function findArr(gap){
//     console.log(gap.split("").reverse().join(""));
    
// }
// findArr("salom")