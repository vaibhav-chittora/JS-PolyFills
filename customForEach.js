// let arr = [1, 2, 3, 4, 5]

// const result = arr.forEach((element)=>{
//     console.log("Elements are ",element)
// })

// function customForEach(array, fn) {

//     for (let i = 0; i < array.length; i++) {
//         fn(array[i], i)
//     }

// }

// const result = customForEach([1, 2, 3], (element, i) => {
//     console.log("square of ", element, "is", element*element*element)
// })


// customForEach([1, 2, 3, 4, 5], function fn(i) {
//     console.log("square of ", i , "is", i * i)
// })

const array = [1,2,3,4,5]

function normalForEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i)
    }
}
normalForEach(array, function cb(ele) {
    console.log("element is", array[ele], "and index is ", ele);
})