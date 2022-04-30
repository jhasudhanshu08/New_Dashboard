// const express = require("express");
// const mongoose = require("mongoose");

const DashBoard = require("../models/view");
const PlantProfile = require("../models/PlantProfile");
const Device = require("../models/Device");

exports.findSerialNo = async (req, res, next) => {
    DashBoard.find({
        serialNo: req.query.information.serialNo,
    })
    .then(data => {
        return res.send(data.information.serialNo);
    })
    .catch(err =>{
        return res.status(401).json({
            message: "View Details of Particular Logger is Failed !!"
        });
    });

}

exports.sendDataToUser = async (req, res, next) => {
    DashBoard.findOne({
        serialNo: req.query.information.serialNo
    })
    .then(data => {
        if(!data) {
            throw new Error("Data is undefined or not fetching !!")
        }
        else {

            Device.find({ 
                deviceType: req.query.deviceType
            })
            .then(deviceData => {
                if(!deviceData) {
                    throw new Error("Device data is undefined or not fetching !!")
                }
                else {
                    for(i=0; i<=data.deviceConnected.details.length; i++) {
                        if(data.deviceConnected.details.deviceType === Device.deviceType && data.deviceConnected.details.binCount === Device.registerProfile.packet.length) {
                                
                            PlantProfile.findOne({
                                plantId: req.query.plantId
                            })
                            .then(plantdata => {
                                if(!plantdata) {
                                    return res.send({
                                        plantName: null,
                                        result: { data, Device }
                                    })
                                }
                                else {
                                    return res.send({
                                        plantName: plantdata.plantName,
                                        result: { data, Device }
                                    })
                                }
                            })
                            .catch(err =>{
                                return res.status(401).json({
                                    message: "Plant Details is Failed !!"
                                });
                            });
                                    
                        } 
                    }
                }
            })
            .catch(err =>{
                return res.status(401).json({
                    message: "Device Details is Failed !!"
                });
            });
            
        } 
    })
    .catch(err =>{
        return res.status(401).json({
            message: "View Details of Particular Logger is Failed !!"
        });
    });
}