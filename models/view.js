const mongoose = require("mongoose");

const DashBoard = new mongoose.Schema({

    information : 
    {
        serialNo: { type: String, unique: true },
        modelNo: { type: String },
        configuration: {
            
            timestamp: { 
                Date: Date
            } 
        },
        plantId: { type: Number },
        loggerNo: { type: Number },
        readInterval: { type: Number },
    },

    flags: 
    {
        isConfiguration: Boolean,
        isExtended: Boolean,
        isActive: Boolean,
        solutionType: {
            isMonitoring: Boolean,
            isStorage: Boolean,
            isDieselGenerator: Boolean,
            isZeroExport: Boolean
        },
        extendedFlag: {
            isResetEeprom: Boolean,
            isReboot: Boolean,
            isUploadModbus: Boolean,
            isDownloadModbus: Boolean,
            isUploadTracke: Boolean,
            isDownloadTracker: Boolean
        }

    },

    modbus: 
    [{
        baudRate: Number,
        parity: String,
        pollRate: Number,
        timeout: Number
    }],

    tracker: 
    [{
        lastUploadYear: Number,
        lastUploadMonth: Number,
        lastUploadDay: Number,
        lastUploadHour: Number,
        lastUploadCount: Number
    }],

    deviceConnected: 
    {
        deviceCount: Number,
        details: [
            {
                index: Number,
                deviceNo: Number,
                deviceType: Number,
                functionCode: Number,
                slaveId: Number,
                ipAddress: String,
                protocol: String,
                port: String,
                binCount: Number,
                binDetails: [
                    {
                        address: Number,
                        length: Number
                    }
                ]
            },
        ]
    }

})



module.exports = mongoose.model("DashBoard", DashBoard);