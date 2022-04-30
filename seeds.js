const mongoose = require("mongoose");
const DashBoard = require("./models/view");
const PlantProfile = require("./models/PlantProfile");
const Device = require("./models/Device");
const viewData = require("./viewData");
const profiledata = require("./profileData")
const deviceData = require("./deviceData");

mongoose.connect("mongodb://localhost:27017/newDashboard", {
    useUnifiedTopology: true
}).then(() => {
    console.log("Database is connected !!")
}).catch(err => {
    console.log("Ohh no error ", err )
});

const seedDB = () => {

    // for(let i=0; i <= deviceData.length; i++) {
        new Device({
            category: deviceData.category,
            manufacture: deviceData.manufacture,
            model: deviceData.model,
            pairingVersion: deviceData.pairingVersion,
            deviceType: deviceData.deviceType,
            description: deviceData.description,

            registerProfile: { 
                functionCode: deviceData.registerProfile.functionCode,
                length: deviceData.registerProfile.lengthe,
                reg16bit: deviceData.registerProfile.reg16bit,
                reg32bit: deviceData.registerProfile.reg32bit,
                
                info: [{
                    parameter: deviceData.registerProfile.info.parameter,
                    address: deviceData.registerProfile.info.address,
                    size: deviceData.registerProfile.info.size,
                    scaleFactor: deviceData.registerProfile.info.scaleFactor
                }],
                packet: [{
                    address: deviceData.registerProfile.packet.address,
                    length: deviceData.registerProfile.packet.lengthe
                }]

            }
        });
    


    // for(let i=0; i <= viewData.length; i++) {
        new DashBoard({
            information : 
            {
                serialNo: viewData.information.serialNo,
                modelNo: viewData.information.modelNo,
                configuration: {
                    
                    timestamp: { 
                        Date: viewData.information.configuration.Date
                    } 
                },
                plantId: viewData.information.plantId,
                loggerNo: viewData.information.loggerNo,
                readInterval: viewData.information.readInterval,
            },

            flags: 
            {
                isConfiguration: viewData.flags.isConfiguration,
                isExtended: viewData.flags.isExtended,
                isActive: viewData.flags.isActive,
                solutionType: {
                    isMonitoring: viewData.flags.solutionType.isMonitoring,
                    isStorage: viewData.flags.solutionType.isStorage,
                    isDieselGenerator: viewData.flags.solutionType.isDieselGenerator,
                    isZeroExport: viewData.flags.solutionType.isZeroExport
                },
                extendedFlag: {
                    isResetEeprom: viewData.flags.extendedFlag.isResetEeprom,
                    isReboot: viewData.flags.extendedFlag.isReboot,
                    isUploadModbus: viewData.flags.extendedFlag.isUploadModbus,
                    isDownloadModbus: viewData.flags.extendedFlag.isDownloadModbus,
                    isUploadTracke: viewData.flags.extendedFlag.isUploadTracke,
                    isDownloadTracker: viewData.flags.extendedFlag.isDownloadTracker
                }

            },

            modbus: 
            [{
                baudRate: viewData.modbus.baudRate,
                parity: viewData.modbus.parity,
                pollRate: viewData.modbus.pollRate,
                timeout: viewData.modbus.timeout
            }],

            tracker: 
            [{
                lastUploadYear: viewData.tracker.lastUploadYear,
                lastUploadMonth: viewData.tracker.lastUploadMonth,
                lastUploadDay: viewData.tracker.lastUploadDay,
                lastUploadHour: viewData.tracker.lastUploadHour,
                lastUploadCount: viewData.tracker.lastUploadCount
            }],

            deviceConnected: 
            {
                deviceCount: viewData.deviceConnected.deviceCount,
                details: [
                    {
                        index: viewData.deviceConnected.details.index,
                        deviceNo: viewData.deviceConnected.details.deviceNo,
                        deviceType: viewData.deviceConnected.details.deviceType,
                        functionCode: viewData.deviceConnected.details.functionCode,
                        slaveId: viewData.deviceConnected.details.slaveId,
                        ipAddress: viewData.deviceConnected.details.ipAddress,
                        protocol: viewData.deviceConnected.details.protocol,
                        port: viewData.deviceConnected.details.port,
                        binCount: viewData.deviceConnected.details.binCount,
                        binDetails: [
                            {
                                address: viewData.deviceConnected.details.binDetails.address,
                                length: viewData.deviceConnected.details.binDetails.lengthe
                            }
                        ]
                    },
                ]
            }
        });
    


    // for(let i=0; i <= PlantProfile.length; i++) 
        new PlantProfile({
            plantId: profiledata.plantId,
            plantName: profiledata.plantName
        });
    

    
    
    
}

seedDB();

