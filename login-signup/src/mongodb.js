const mongoose =  require("mongoose")
mongoose.connect("mongodb+srv://arupmaiti2003:arup1096@cluster0.88rknad.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("mongodb connected");

})
.catch(()=>{
    console.log("faild to connected");
})

const LogInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


const collection=mongoose.model("Collection1",LogInSchema)
module.exports = collection

