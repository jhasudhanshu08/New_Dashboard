const mongoose = require("mongoose");

const Device = new mongoose.Schema({

    
    category: { type: String },
    manufacture: { type: String },
    model: { type: String },
    pairingVersion: { type: String },
    deviceType: { type: Number },
    description: { type: String },

    registerProfile: { 
        functionCode: { type: Number },
        length: { type: Number },
        reg16bit: { type: Number },
        reg32bit: { type: Number },
        
        info: [{
            parameter: { type: String },
            address: { type: Number },
            size: { type: String },
            scaleFactor: { type: Number },
            _id: false
        }],
        packet: [{
            address: { type: Number },
            length: { type: Number },
            _id: false
        }]

     },
    
    
})

module.exports = mongoose.model("Device", Device);