const express = require("express");
const mongoose = require("mongoose");

const DashBoard = require("../models/view");
const PlantProfile = require("../models/")

exports.findSerialNo = async (req, res, next) => {
    DashBoard.find({
        serialNo: req.query.information.serialNo,
    })
    .then(data => {
        // if(!data) {
        //     throw new Error("That D Log with the given model no. or serial no. Doesn't exist !!")
        // }
        return res.send(data.information.serialNo);
    })
    .catch(err =>{
        return res.status(401).json({
            message: "View Details of Particular Logger is Failed !!"
        });
    });

}

exposts.sendDataToUser = async (req, res, next) => {
    DashBoard.findOne({
        serialNo: req.query.information.serialNo
    })
    // PlantProfile.findOne({
    //     plantId: req.query.plantId
    // })
    .then(data => {
        PlantProfile.findOne({
            plantId: req.query.plantId
        })
        if(PlantProfile.plantId && !PlantProfile.plantName) {
            return res.send({
                plantName: null,
                result: data
            })
        }
        else {
            return res.send( data );
        }
    })
    .catch(err =>{
        return res.status(401).json({
            message: "View Details of Particular Logger is Failed !!"
        });
    });
}