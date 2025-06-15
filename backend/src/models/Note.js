 import mongoose from "mongoose";

// 1 - schema
// 2 - model from schema

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },

}, { timestamps: true, } // createdAt, updatedAt
); 

const Note = mongoose.model("Note", noteSchema);

export default Note;