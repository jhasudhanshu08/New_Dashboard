const mongoose = require('mongoose');

const PlantProfile = new mongoose.Schema({

    plantId:{type:Number, required:true, min:1, max: 1000, index: true},
    plantName: {type:String},
   
});

module.exports = mongoose.model('PlantProfile', PlantProfile);