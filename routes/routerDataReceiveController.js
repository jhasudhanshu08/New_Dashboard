const express =require("express");
const router = express.Router();
const ReceiveDataService = require("./routerDataReceiveService");


router.use("/receiveDataFromUser", receiveDataFromUser = async (req, res, next) => {
    // console.log(req.query.information.serialNo);
    ReceiveDataService.receiveDataToUserService(req.body.serialNo, req.body.category, req.body.make, req.body.model, req.body.pairingVersion)
    
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