// insertmany
db.person.insertmany()
// act a find without any aggregation stages
db.person.aggregate([])

// group
db.person.aggregate([
    {$group:{_id:"$age"}}
    //       _id:"$gender"
    //       _id:"$name"
    //       _id:"$eyecolor"
    // {$group:{_id:"$company.location.country"}}
    // {$group:{_id:"$name",total:{$sum:"$price"}}}
]);
db.person.aggregate([
    {$group:{_id:"$age"}}
]);
// {_id:27}
// {_id:30}
// {_id:26}
// {_id:31}
db.person.aggregate([
    // stage1
    {$match:{favFruit:"banana"}},
    // stage2
    {$group:{_id:{age:"$age", eyeColor:"$eyeColor"}}}
]);
// {_id{"age":67,eyeColor:"blue"}}
// {_id{"age":64,eyeColor:"red"}}
// {_id{"age":57,eyeColor:"green"}}
// {_id{"age":37,eyeColor:"yellow"}}

db.person.aggregate([
    {$group:{_id:{age:"$age", gender:"$gender"}}}
]);
// {_id{"age":67,gender:"male"}}
// {_id{"age":45,gender:"male"}}
// {_id{"age":69,gender:"female"}}

db.person.aggregate([
    {$group:{_id:"$company.location.country"}}
]);
// {_id:"germany"}
// {_id:"france"}
// {_id:"Italy"}
db.person.aggregate([
    {$group:{_id:"$tags"}}
]);
// {"id":["sometjhin","something"]}
//  .......




// MATCH
db.person.aggregate([
    {$match:{city:"new york"}}
])
db.person.aggregate([
    {$match:{age:{$gt:25}}}
])
db.person.aggregate([
    {$match:{isActive:true}}
])
db.person.aggregate([
    {$match:{tags:{$size:3}}}
])
db.person.aggregate([
    {$match:{$and:[{gender:"female"},{age:{$gt:25}}]}}
])
db.getcollection("person").find({tags:{$size:3}})

// $group an $match

db.person.aggregate([
    // stage 1
    {$group:{_id:{age:"$age", eyeColor:"$eyeColor"}}},
    // stage2
    {$match:{"id.age":{$get:30}}}
]);


// $sort
// -1 desending
//  1 ascending
db.person.aggregate([
    {$sort:{score:-1}}
 // {$sort:{age:1,country:1}}
])
db.person.aggregate([
    {$sort:{age:1,country:1}}
])
db.person.aggregate([
    {$sort:{age:-1,gender:-1,eyeColor:1}}
])
// $group and $sort
db.person.aggregate([
    {$group:{_id:"favFruite"}},
    {$sort:{_id:1}}
])
db.person.aggregate([
    {$group:{_id:"$age"}},
    {$sort:{_id:1}}
])
db.person.aggregate([
    {$group:{_id:"$eyeColor"}},
    {$sort:{_id:1}}
])
db.person.aggregate([
    {$group:{_id:{eyeColor:"$eyeColor",favourite:"$favourite"}}},
    {$sort:{_id:1}}
])




// $count
// client side
db.person.aggregate([]).toArray().length
db.person.aggregate([]).count()
// mongoose side
db.person.aggregate([{$count:"total"}])
// {"total":1000}

// $project
db.person.aggregate([
    {$project:{name:1,"company.title":1}}
])
// {
//     id:{ 
//         name: "somethinf",
//         company:{
//             location:{
//                 country:"USA"
//             }
//         }
//     }
// }
db.person.aggregate([
    {$project:{_id:0,name:1,age:1}}
])
db.person.aggregate([
    {$project:{eyeColor:0,age:0}}
])
db.person.aggregate([
    {$project:{isActive:1,name:1,gender:1}}
])
db.person.aggregate([
    {$project:{
        _id:0,
        index:1,
        name:1,
        info:{
            eyes:"$eyeColor",
            company:"$company.title",
            country:"$company.location.country"
        }
    }}
])
// $limit
// after sort

db.person.aggregate([
    {$limit:1000},
    {$match:{age:{$get:27}}},
    {$group:{_id:"$company.location.country"}}
])
// {"id":"germany"}
// {"id":"france"}
//   .....
db.person.aggregate([
    {$limit:100},
    {$match:{eyeColor:{$ne:"blue"}}},
    {$group:{_id:{eyeColor:"$eyeColor"}}},
    {$sort:{"_id.eyeColor":1,"_id.favouriteFood":-1}}
])

// $unwind
// split the document 
{$unwind:"$tags"}
{$unwind:"$hobbies"}
db.person.aggregate([
    {$unwind:"$tags"},
    {$project:{
        name:1,
        gender:1,
        tags:1
    }}
])
db.person.aggregate([
    {$unwind:"$tags"},
    {$project:{
        name:1,
        index:1,
        tags:1
    }}
])
db.person.aggregate([
    {$unwind:"$tags"},
     {$group:{_id:"$tags"}}
])
// {id:"nuyll"}
// {id:"sofggh"}
// .....


// objectId
// 12 Bit 
// 4 bit - timeStamp
// 5- randomValue
// 3-counter

// Student
// Name, email, standard, subjects
// subjects: [phy, chem, maths]
// Phy and chem are there in subjects,
// All the students maths in the subjects.


























