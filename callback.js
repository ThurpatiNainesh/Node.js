// function
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

// callback function
function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
greet('Peter', callMe);

let arr1=[1,2,3,[3,4,5],6,6,6]
function flattenArr(arr){
    if(arr.length===0){
        return "finallay done"
    }
    let flate=[]
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])===false) flate.push(arr[i])
        else flate = flate.concat(flattenArr(arr[i]))
    }
    return flate
}
let u=flattenArr(arr1)
console.log(u)

for (let i = 0; i < 3; i++) {
    setTimeout(function() { console.log(i); }, 1000 +i);
}
function productOfAnArray(arr,index){
    if(arr.length==0){
        return "finally done"
    }
    console.log(arr[arr.length-1])
    
    return setTimeout(()=>productOfAnArray(arr[arr.length-1]),200)
}
console.log(productOfAnArray([1,3,4,5,2],5))
let x = 5/5  
console.log(x)