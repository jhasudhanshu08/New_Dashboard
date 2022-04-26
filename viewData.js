module.exports = [
    {
        information : 
        {
            serialNo: "HO-DL212-033",
            modelNo: "DLOG 21x",
            configuration: {
                
                timestamp: { 
                    Date: "2022-03-23T09:55:43.090Z", 
                } 
            },
            plantId: "172",
            loggerNo: "14",
            readInterval: 300,
        },

        flags: 
        {
            isConfiguration: false,
            isExtended: false,
            isActive: true,
            solutionType: {
                isMonitoring: true,
                isStorage: true,
                isDieselGenerator: false,
                isZeroExport: false
            },
            extendedFlag: {
                isResetEeprom: false,
                isReboot: false,
                isUploadModbus: false,
                isDownloadModbus: false,
                isUploadTracke: false,
                isDownloadTracker: false
            }

        },

        modbus: 
        {
            baudRate: 9600,
            parity: "Even",
            pollRate: 200,
            timeout: 500
        },

        tracker: 
        {
            lastUploadYear: 2022,
            lastUploadMonth: 4,
            lastUploadDay: 21,
            lastUploadHour: 0,
            lastUploadCount: 1
        },

        deviceConnected: 
        {
            deviceCount: 2,
            details: [
                {
                    index: 0,
                    deviceNo: 33,
                    deviceType: 3,
                    functionCode: 4,
                    slaveId: 2,
                    ipAddress: "192.168.10.1",
                    protocol: "serial",
                    port: "usb2485",
                    binCount: 13,
                    binDetails: [
                        {
                            address: 5002,
                            length: 1
                        },
                        {
                            address: 5007,
                            length: 1
                        },
                        {
                            address: 5010,
                            length: 6
                        },
                        {
                            address: 5018,
                            length: 6
                        },
                        {
                            address: 5034,
                            length: 4
                        },
                        {
                            address: 5044,
                            length: 1
                        },
                        {
                            address: 5112,
                            length: 1
                        },
                        {
                            address: 5114,
                            length: 10
                        },
                        {
                            address: 5129,
                            length: 8
                        },
                        {
                            address: 5003,
                            length: 4
                        },
                        {
                            address: 5016,
                            length: 2
                        },
                        {
                            address: 5030,
                            length: 2
                        },
                        {
                            address: 7012,
                            length: 24
                        },
                    ]
                }
            ]
        }

}
]

