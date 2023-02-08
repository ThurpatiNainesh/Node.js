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

let x=getMoneyBack(1234).then((money)=>{
  console.log(money)
}).catch(()=>{
  console.log(console.log("pease provide Number!"))
})
console.log(x)

// // find each person with a last name matching 'Ghost'
// const query = Person.findOne({ 'name.last': 'Ghost' });

// // selecting the `name` and `occupation` fields
// query.select('name occupation');

// // execute the query at a later time
// query.exec(function (err, person) {
//   if (err) return handleError(err);
//   // Prints "Space Ghost is a talk show host."
//   console.log('%s %s is a %s.', person.name.first, person.name.last,
//     person.occupation);
// });

 