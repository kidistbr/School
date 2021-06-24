const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: {
        type:String,
        require : true
    },
    courseCode: {
        type:String
    }

});

const studentSchema = new mongoose.Schema({
    name:{
        type: String, 
        require:true
    },
    grade:{
        type:Number
    },
    course: [courseSchema]
});

mongoose.model("Student", studentSchema);