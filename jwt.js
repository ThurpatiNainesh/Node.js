


const jwt=require("jsonwebtken")

const encoded = jwt.sign({name:"ramu"},process.env.SECRET,)
const decode = jw.verify(encoded,process.env.SECRET)
console.log(encode,decode)