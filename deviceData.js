module.exports.deviveData = [
    {
        category: "Inverter",
        manufacture: "Sungrow",
        model: "All",
        parsingVersion: "V1.3",
        deviceType: 3,
        description: "description",

        registerProfile: {
            functionCode: 4,
            lengthe: 70,
            reg16bit: 38,
            reg32bit: 16,
           
        info: [{
            parameter: "Daily Energy",
            address: 5002,
            size: "unsigned16bit",
            scaleFactor: 0.1
        },
        {
            parameter: "Internal Temp",
            address: 5007,
            size: "unsigned16bit",
            scaleFactor: 0.1
        },
        {
            parameter: "DC Voltage1",
            address: 5010,
            size: "unsigned16bit",
            scaleFactor: 0.1
        },
        {
            parameter: "DC Current1",
            address: 5011,
            size: "unsigned16bit",
            scaleFactor: 0.1
        },
        {
            parameter: "DC Voltage2",
            address: 5012,
            size: "unsigned16bit",
            scaleFactor: 0.1
        },
        {
            parameter: "DC Current2",
            address: 5013,
            size: "unsigned16bit",
            scaleFactor: 0.1
        },
        {
            parameter: "DC Voltage3",
            address: 5014,
            size: "unsigned16bit",
            scaleFactor: 0.1
        },
        {
            parameter: "DC Current3",
            address: 5015,
            size: "unsigned16bit",
            scaleFactor: 0.1
        },
        {
            parameter: "A-B line Voltage/Phase A Voltage",
            address: 5018,
            size: "unsigned16bit",
            scaleFactor: 0.1
        },
        {
            parameter: "B-C line Voltage/Phase B Voltage",
            address: 5019,
            size: "unsigned16bit",
            scaleFactor: 0.1
        },
        {
            parameter: "C-A line Voltage/Phase C Voltage",
            address: 5020,
            size: "unsigned16bit",
            scaleFactor: 0.1
        },
        {
            parameter: "Phase L1 Current",
            address: 5021,
            size: "unsigned16bit",
            scaleFactor: 0.1
        },
        {
            parameter: "Phase L2 Current",
            address: 5022,
            size: "unsigned16bit",
            scaleFactor: 0.1
        },
        {
            parameter: "Phase L3 Current",
            address: 5023,
            size: "unsigned16bit",
            scaleFactor: 0.1
        },
        {
            parameter: "Power Factor",
            address: 5034,
            size: "signed16bit",
            scaleFactor: 0.001
        },
        {
            parameter: "AC Frequency",
            address: 5035,
            size: "unsigned16bit",
            scaleFactor: 0.1
        },
        {
            parameter: "Inverter Efficiency",
            address: 5036,
            size: "unsigned16bit",
            scaleFactor: 0.1
        },
        {
            parameter: "Inverter State",
            address: 5037,
            size: "unsigned16bit",
            scaleFactor: 1
        },
        {
            parameter: "Fault/Alarm Code1",
            address: 5044,
            size: "unsigned16bit",
            scaleFactor: null
        },
        {
            parameter: "Daily RunTime",
            address: 5112,
            size: "unsigned16bit",
            scaleFactor: 1
        },
        {
            parameter: "DC Voltage 4",
            address: 5114,
            size: "unsigned16bit",
            scaleFactor: 0.1
        },
        {
            parameter: "DC Current 4",
            address: 5115,
            size: "unsigned16bit",
            scaleFactor: 0.1
        },
        {
            parameter: "DC Voltage 5",
            address: 5116,
            size: "unsigned16bit",
            scaleFactor: 0.1
        },
        {
            parameter: "DC Current 5",
            address: 5117,
            size: "unsigned16bit",
            scaleFactor: 0.1
        },
        {
            parameter: "DC Voltage 6",
            address: 5118,
            size: "unsigned16bit",
            scaleFactor: 0.1
        },
        {
            parameter: "DC Current 6",
            address: 5119,
            size: "unsigned16bit",
            scaleFactor: 0.1
        },
        {
            parameter: "DC Voltage 7",
            address: 5120,
            size: "unsigned16bit",
            scaleFactor: 0.1
        },
        {
            parameter: "DC Current 7",
            address: 5121,
            size: "unsigned16bit",
            scaleFactor: 0.1
        },
        {
            parameter: "DC Voltage 8",
            address: 5122,
            size: "unsigned16bit",
            scaleFactor: 0.1
        },
        {
            parameter: "DC Current 8",
            address: 5123,
            size: "unsigned16bit",
            scaleFactor: 0.1
        },
        {
            parameter: "DC Voltage 9",
            address: 5129,
            size: "unsigned16bit",
            scaleFactor: 0.1
        },
        {
            parameter: "DC Current 9",
            address: 5130,
            size: "unsigned16bit",
            scaleFactor: 0.1
        },
        {
            parameter: "DC Voltage 10",
            address: 5131,
            size: "unsigned16bit",
            scaleFactor: 0.1
        },
        {
            parameter: "DC Current 10",
            address: 5132,
            size: "unsigned16bit",
            scaleFactor: 0.1
        },
        {
            parameter: "DC Voltage 11",
            address: 5133,
            size: "unsigned16bit",
            scaleFactor: 0.1
        },
        {
            parameter: "DC Current 11",
            address: 5134,
            size: "unsigned16bit",
            scaleFactor: 0.1
        },
        {
            parameter: "DC Voltage 12",
            address: 5135,
            size: "unsigned16bit",
            scaleFactor: 0.1
        },
        {
            parameter: "DC Current 12",
            address: 5136,
            size: "unsigned16bit",
            scaleFactor: 0.1
        },
        {
            parameter: "Total Energy",
            address: 5003,
            size: "unsigned32bit",
            scaleFactor: 1
        },
        {
            parameter: "Total Operation",
            address: 5005,
            size: "unsigned32bit",
            scaleFactor: 1
        },
        {
            parameter: "DC Power",
            address: 5016,
            size: "unsigned32bit",
            scaleFactor: 1
        },
        {
            parameter: "AC Active Power",
            address: 5030,
            size: "unsigned32bit",
            scaleFactor: 1
        },
        {
            parameter: "Current of String 1 - 2",
            address: 7012,
            size: "unsigned32bit",
            scaleFactor: 0.01
        },
        {
            parameter: "Current of String 3 - 4",
            address: 7014,
            size: "unsigned32bit",
            scaleFactor: 0.01
        },
        {
            parameter: "Current of String 5 - 6",
            address: 7016,
            size: "unsigned32bit",
            scaleFactor: 0.01
        },
        {
            parameter: "Current of String 7 - 8",
            address: 7018,
            size: "unsigned32bit",
            scaleFactor: 0.01
        },
        {
            parameter: "Current of String 9 - 10",
            address: 7020,
            size: "unsigned32bit",
            scaleFactor: 0.01
        },
        {
            parameter: "Current of String 11 - 12",
            address: 7022,
            size: "unsigned32bit",
            scaleFactor: 0.01
        },
        {
            parameter: "Current of String 13 - 14",
            address: 7024,
            size: "unsigned32bit",
            scaleFactor: 0.01
        },
        {
            parameter: "Current of String 15 - 16",
            address: 7026,
            size: "unsigned32bit",
            scaleFactor: 0.01
        },
        {
            parameter: "Current of String 17 - 18",
            address: 7028,
            size: "unsigned32bit",
            scaleFactor: 0.01
        },
        {
            parameter: "Current of String 19 - 20",
            address: 7030,
            size: "unsigned32bit",
            scaleFactor: 0.01
        },
        {
            parameter: "Current of String 21 - 22",
            address: 7032,
            size: "unsigned32bit",
            scaleFactor: 0.01
        },
        {
            parameter: "Current of String 23 - 24",
            address: 7034,
            size: "unsigned32bit",
            scaleFactor: 0.01
        },


    ],
        packet: [
        {
            address: 5002,
            lengthe: 1
        },
        {
            address: 5007,
            lengthe: 1
        },
        {
            address: 5010,
            lengthe: 6
        },
        {
            address: 5018,
            lengthe: 6
        },
        {
            address: 5034,
            lengthe: 4
        },
        {
            address: 5044,
            lengthe: 1
        },
        {
            address: 5112,
            lengthe: 1
        },
        {
            address: 5114,
            lengthe: 10
        },
        {
            address: 5129,
            lengthe: 8
        },
        {
            address: 5003,
            lengthe: 4
        },
        {
            address: 5016,
            lengthe: 2
        },
        {
            address: 5030,
            lengthe: 2
        },
        {
            address: 7012,
            lengthe: 24
        },


    ]
    }
    },

    

]