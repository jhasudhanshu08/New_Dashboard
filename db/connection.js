const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/newDashboard", {
    useUnifiedTopology: true
}).then(() => {
    console.log("Database is connected !!")
}).catch(err => {
    console.log("Ohh no error ", err )
}) 