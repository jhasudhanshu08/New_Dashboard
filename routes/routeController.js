// const express = require("express");
// const mongoose = require("mongoose");
// const { response } = require("express");
const express =require("express");
const router = express.Router();
const RouterService = require("./routerService");

// router.use("/findserialno", findSerialNo = async (req, res, next) => {
//     // console.log(req.body);
    
//     const { serialNo } = req.body;
//     DashBoard.findOne({
//         'information.serialNo': serialNo
//     })
//     .then(data => {
//         // console.log(data.information.serialNo);
//         return res.send(data.information.serialNo);
//     })
//     .catch(err =>{
//         return res.status(401).json({
//             message: "View Details of Particular Logger is Failed !!"
//         });
//     });

// })

router.use("/senddatatouser", sendDataToUser = async (req, res, next) => {
    // console.log(req.query.information.serialNo);
    RouterService.sendDataToUserService(req.body.serialNo)
    
    .then((response)=>{
        // console.log(response)
        if(!response.status){
            throw new Error(response.message); 
        }     
        res.status(200).json({
            message: true,
            response: response.response
        })
    })
    .catch((err)=>{
        console.log(err);
        res.status(401).json({
            status: false,
            message: err.message
        });
    });
})

module.exports = router;