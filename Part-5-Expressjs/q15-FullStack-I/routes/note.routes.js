const express = require("express")
const {auth} = require("../middlewares/auth.middleware")
const {NoteModel} = require("../models/note.model")
const noteRouter = express.Router()

noteRouter.post("/", auth,async (req,res)=>{
    try {
        const newNote = new NoteModel(req.body)
        await newNote.save()
        res.status(200).json({msg:"Note created Successfully!"})
    } catch(error) {
        res.status(500).json({msg:"Internal server error", error})
    }
})

noteRouter.get("/",auth, async (req,res)=>{
    try {
        const notes = await NoteModel.find({userId: req.body.userId})
        res.status(200).json({notes})
    } catch(error) {
        res.status(500).json({msg:"Internal server error", error})
    }
})

noteRouter.patch("/:noteId",auth, (req,res)=>{
    //logic
    //1. Get the note fron DB that needs to be updated
    //2. Get the stuff that you want to update from req body
    //3. if(userId in note === user who is making the req){update}else{you are not authorised}
})

noteRouter.delete("/:noteId",auth, (req,res)=>{
    //logic
})

module.exports = {noteRouter}