// In JavaScript, a promise is a good way to handle asynchronous operations. It is used to find out if the asynchronous operation is successfully completed or not.

const count = true;

let countValue = new Promise(function (resolve, reject) {
    if (count) {
        resolve("There is a count value.");
    } else {
        reject("There is no count value");
    }
});

console.log(countValue);


function getMoneyBack(money){
  return new Promise((resolve,reject)=>{
    if(typeof money !== "number"){
      reject(new Error("MONEY IS NOT NUMBER"))
    }else{
      resolve(money)
    }
  })
}

let x=getMoneyBack(1200).then((money)=>{
  console.log(money)
})
console.log(x)
