const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/gameDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
const fruitSchema = new mongoose.Schema({
  name : String,
  review : String
})
const personalSchema = new mongoose.Schema({
  name: {
    type : String,
    required : true
  },
  age: {
    type : Number,
    min : 10,
    max : 16
  },
  favoriteFruit : fruitSchema
})

const Person = new mongoose.model("Person",personalSchema)
const Fruite = new mongoose.model("Fruit",fruitSchema)

const papaya = new Fruite({
  name : "papaya",
  review : "verygood"
})
papaya.save()

const bisofy = new Person({
  name : "mama",
  age : 15,
  favoriteFruit : papaya
})

bisofy.save()

// Person.find((err, person) => {
//   if (err) console.console.log(err);
//   else {
//     mongoose.connection.close()
//     person.forEach((item) => {
//       console.log(item.name)
//
//     });
//
//   }
// })

// Person.updateOne({_id:"5f1028d63e2641284c8535a0"},{name : "nyanya"},err=>{
//   if(err){
//     console.log(err);
//   }else{
//     mongoose.connection.close()
//     console.log("sucessfully Updated")
//   }
// })


// Person.deleteOne({_id : "5f1023c16cc6ab43e0e7c2c1"},err=>{
//   if(err){
//     console.log(err);
//   }else {
//     console.log("sucessfully deleted");
//   }
// })

Person.deleteMany({name : /imagine/},err=>{
  if (err) {
    console.log(err);
  } else {
    console.log("sucessfully delete all the field");
  }
})
