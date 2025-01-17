const express = require("express")
const {connectDB} = require("./db")
const { UserModel } = require("./models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const {auth} = require("./middleware/auth.middleware")
const {rbac} = require("./middleware/rbac.middleware")

const app = express()
app.use(express.json())

app.post("/users", async (req,res)=>{
    const {name, email, pass, role} = req.body
    try {
        bcrypt.hash(pass, 6, async(err, hash) => {
            if(err) {
                res.json({err})
            }
            const newUser = new UserModel({
                name,
                email,
                role,
                pass: hash
            })
            await newUser.save()
            res.json({msg:"New user has been added"})
        });
    } catch(error) {
        res.json({error})
    }
})

app.post("/auth", async(req,res)=>{
    const {email, pass} = req.body
    try {
        const matchingUser = await UserModel.findOne({email})
        if(matchingUser){
            bcrypt.compare(pass, matchingUser.pass, (err, result) => {
                if(result) {
                    const token = jwt.sign({userId: matchingUser._id}, "masai")
                    res.json({msg:"Login Successfull!", token})
                } else {
                    res.json({msg:"Wrong Credentials"})
                }
            });
        }
    } catch(error){
        res.json({error})
    }
})

//provide access to admin and user
app.get("/movies",auth,rbac(["admin", "user"]), (req,res)=>{
    res.json({msg:"Watching a movie"}) 
})

//provide access to admin and user
app.get("/series",auth, rbac(["admin", "user"]), (req,res)=>{
    res.json({msg:"Watching a series"}) 
})

//provide access to admin
app.get("/userdata",auth,rbac(["admin"]), (req,res)=>{
    res.json({msg:"User data"}) 
})

app.listen(8080, ()=>{
    connectDB()
    console.log("Server is running at http://localhost:8080")
})