// Model.deleteMany()
// Model.deleteOne()
// Model.find()
// Model.findById()
// Model.findByIdAndDelete()
// Model.findByIdAndRemove()
// Model.findByIdAndUpdate()
// Model.findOne()
// Model.findOneAndDelete()
// Model.findOneAndRemove()
// Model.findOneAndReplace()
// Model.findOneAndUpdate()
// Model.replaceOne()
// Model.updateMany()
// Model.updateOne()

// Model.deleteMany(): This query takes the parameters of any field that matches and then deletes all the entries in the database that matches.
// Model.deleteOne():  This query takes the parameters of any field that matches and then deletes any one of the entries in the database that matches.
// Model.find(): This query takes the parameters of one or more fields that match and then returns all the entries in the database that matches.
// Model.findById(): This query takes the id as the parameter and then returns the entry in the database if it exists matches.
// Model.findByIdAndDelete(): This query takes the id as the parameter and then deletes the entry in the database if it exists matches.
// Model.findByIdAndRemove(): This query takes the id as the parameter and then removes the entry in the database if it exists and then returns it to the callback function.
// Model.findByIdAndUpdate(): This query takes the id and the update parameters and values as the parameter and then updates the entry in the database if it exists.
// Model.findOne(): This query takes the parameters of any field that matches and then returns any one of the entries in the database that matches.
// Model.findOneAndDelete(): This query takes the parameters of any field that matches and then returns and deletes any one of the entries in the database that matches.
// Model.findOneAndRemove(): This query takes the parameters of any field that matches and then returns and removes any one of the entries in the database that matches.
// Model.findOneAndReplace(): This query takes the parameters of any field and the replace document and then replaces any one of the entries in the database that matches.
// Model.findOneAndUpdate(): This query takes the parameters of one or more fields and the updated fields and values and then updates any one of the entries in the database that matches.
// Model.replaceOne(): This query takes the parameters as a filter and the replacement document and then replaces any one of the entries in the database that matches.
// Model.updateMany(): This query takes the parameters as a filter and the updating fields and values and then updates all of the entries in the database that matches.
// Model.updateOne(): This query takes the parameters as a filter and the updating fields and values and then updates any one of the entries in the database that matches.
// Anywhere a callback is passed to a query in Mongoose, the callback follows the pattern callback(error, results). What results is depends on the operation: For findOne() it is a potentially-null single document, find() a list of documents, count() the number of documents, update() the number of documents affected, etc. The API docs for Models provide more detail on what is passed to the callbacks.

// Mongoose executed the query and passed the results to callback. All callbacks in Mongoose use the pattern: callback(error, result). If an error occurs executing the query, the error parameter will contain an error document, and result will be null. If the query is successful, the error parameter will be null, and the result will be populated with the results of the query.


Person.
  find({
    occupation: /host/,
    'name.last': 'Ghost',
    age: { $gt: 17, $lt: 66 },
    likes: { $in: ['vaporizing', 'talking'] }
  }).
  limit(10).
  sort({ occupation: -1 }).
  select({ name: 1, occupation: 1 }).
  exec(callback)

//   Don't mix using callbacks and promises with queries, or you may end up with duplicate operations. That's because passing a callback to a query function immediately executes the query, and calling then() executes the query again.

//   Mixing promises and callbacks can lead to duplicate entries in arrays. For example, the below code inserts 2 entries into the tags array, not just 1.

//   const BlogPost = mongoose.model('BlogPost', new Schema({
//     title: String,
//     tags: [String]
//   }));
  
//   // Because there's both `await` **and** a callback, this `updateOne()` executes twice
//   // and thus pushes the same string into `tags` twice.
//   const update = { $push: { tags: ['javascript'] } };
//   await BlogPost.updateOne({ title: 'Introduction to Promises' }, update, (err, res) => {
//     console.log(res);
//   });




  const personSchema = new mongoose.Schema({
    age: Number
  });
  
//   const Person = mongoose.model('Person', personSchema);
//   for (let i = 0; i < 10; i++) {
//     await Person.create({ age: i });
//   }
  
  await Person.find().sort({ age: -1 }); // returns age starting from 10 as the first entry
  await Person.find().sort({ age: 1 }); // returns age starting from 0 as the first entry

  // You also use a model to create queries:
const userFromDb = await UserModel.findOne({ name: 'Foo' });

// Find the max balance of all accounts
const res = await Users.aggregate([
    { $group: { _id: null, maxBalance: { $max: '$balance' }}},
    { $project: { _id: 0, maxBalance: 1 }}
  ]);
  
  console.log(res); // [ { maxBalance: 98000 } ]

  await Character.deleteMany({ name: /Stark/, age: { $gte: 18 } }); // returns {deletedCount: x} where x is the number of documents deleted.
  await Character.deleteMany({ name: /Stark/, age: { $gte: 18 } }); // returns {deletedCount: x} where x is the number of documents deleted.

 await Task.findOne({ _id: taskID })

 await Task.findOneAndDelete({ _id: taskID })

 await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  })
  const mongoose = require('mongoose')

// Database connection
mongoose.connect('mongodb://localhost:27017/query-helpers',
	{
		dbName: 'event_db',
		useNewUrlParser: true,
		useUnifiedTopology: true
	}, err => err ? console.log(err)
		: console.log('Connected to database'));

const personSchema1 = new mongoose.Schema({
	name: {
		type: String,
		select: false
	},
	age: {
		type: Number,
	}
});

const personsArray = [
	{
		name: 'Luffy',
		age: 22
	},
	{
		name: 'Nami',
		age: 30
	},
	{
		name: 'Zoro',
		age: 15
	}
]

const Person = mongoose.model('Person', personSchema);

(async () => {
	await Person.insertMany(personsArray);
	const res = await Person.replaceOne(
		{ name: 'Luffy' },
		{ name: 'Usurp', age: 23 }
	);
	console.log(res.matchedCount);
})()
// upser is for new field create
db.student.updateMany({age: 18}, {$set: {eligible: false}}, {upsert: true})
