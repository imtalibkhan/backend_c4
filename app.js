const express = require('express');

const mongoose = require('mongoose');

const connect = () =>{
    return mongoose.connect("mongodb://127.0.0.1:27017/test1")
}
const userSchema = new mongoose.Schema({
    name: {type:String,required:true},
    email: {type:String, required:true},
    passwordd: {type:Number,required:true},
    profile_photo_url: {type:String,required:true},
    roles: {type:String,required:true}
});
const userSchema1 = new mongoose.Schema({
    name:{type:String,required:true},
    actor:{type:Array, required:true},
    language:{type:Array,required:true},
    director:{type:Array,required:true},
    poster_utl:{type:String,required:true}
});

const theaterSchema = new mongoose.Schema({
    name:{type:String,required:true},
    location: {type:String,required:true}
})
const screenSchema = new mongoose.Schema({
    name:{type:String,required:true},
    threater:{type:String,required:true}
})

const showSchema = new mongoose.Schema({
    timing:{type:Number,required:true},
    movie:{type:String,required:true},
    total_seats:{type:String,required:true},
    screen:{type:String,required:true}
});



const USER = mongoose.model("user",userSchema);

const USER1 = mongoose.model("user1",userSchema1)

const USER2 = mongoose.model("user2",theaterSchema)

const USER3 = mongoose.model("user3",screenSchema)

const USER4 = mongoose.model("user4",showSchema)

const app = express ();

app.use(express.json());

app.post("/users",async (req,res)=>{
    const user  = await USER.create(req.body);
    res.status(201).send(user);

});

app.post("/users1",async (req,res)=>{
    const user  = await USER1.create(req.body);
    res.status(201).send(user);

});

app.post("/users2",async (req,res)=>{
    const user  = await USER2.create(req.body);
    res.status(201).send(user);

});

// app.post("/users3",async (req,res)=>({

//     res.status(201).send(user);

// });

app.post("/users3",async (req,res)=>{
    const user  = await USER3.create(req.body);
    res.status(201).send(user);

});

app.post("/users4",async (req,res)=>{
    const user  = await USER4.create(req.body);
    res.status(201).send(user);

});
app.listen(4099, async function(){
    await connect();
    console.log("listen on port 4967")
})




