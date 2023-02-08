import express from "express"
import mongoose from "mongoose"

const app= express();
app.use(express.json());
app.use(express.urlencoded());

mongoose.connect('mongodb://localhost:27017/myLoginRegisterDB',{
    useNewUrlParser:true
},()=>{
  console.log("DB connected")
});
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})
const User = new mongoose.model("User",userSchema)
// Routes
app.post("/create",async function (req, res) {
    const newUser = new User({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
    })
    try{
        const saveCustomer = await newUser.save();
        res.status(201).Json(saveCustomer)
    }catch(err){
        res.status(500).json(err)
    }
})

app.patch("/update/:id", async function (req, res){
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(500).json(error)
    }
})

app.delete("/delete/:id",async function(req,res){
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).Json("User has been deleted..")
    } catch (error) {
        res.status(500).Json(error)
    }
})

app.get("/create/:id",async function(req,res){
    try {
        await User.findById(req.params.id);
        const{password,...others}= user._doc;
        res.status(200).json(others)

    } catch (error) {
        res.status(500).Json(error)
    }
})

app.listen(9002,()=>{
    console.log("Be started at port 9002")
})