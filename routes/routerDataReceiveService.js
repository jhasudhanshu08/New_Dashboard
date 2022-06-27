const DashBoard = require("../models/view");
const PlantProfile = require("../models/PlantProfile");
const Device = require("../models/Device");
const ResponseArray = require("./routerService");



exports.receiveDataToUserService = async (serialNo1, category, manufacture, model, version) => {
    try {
        let response = {
            status: false
        };
        
        const serialNo = serialNo1;
        const dashboard = DashBoard.find({
            'information.serialNo': serialNo
        })
        // console.log("testing : ", ResponseArray.responseArray)
        if(!dashboard) {
            throw new Error("DashBoard data is undefined or not fetching !!")
        }
        else {
            const device = await Device.find({})

            // var responseArray =[{Category: "Inverter1", Details: [{Make: "Sungrow12", Details: [{Model: "All1", Version: ["v1_9", "v2"]}]}]},
            //     {Category: "Inverter0", Details: [{Make: "Sungrow12", Details: [{Model: "All1", Version: ["v1_9", "v2"]}]}]}
            //     ]
                // console.log("responseArray : ", responseArray[0]);
            
            device.forEach (async catArray => {
                // console.log("+++++++++", catArray)
                if(category != catArray.category) {
                    console.log("Category not matched with the database");
                    response.status = false,
                    console.log("+++++++++", response.status)
                    console.log("+++++++++", catArray.category)
                    
                }   
                else {
                    if(manufacture != catArray.manufacture) {
                        console.log("Manufacture not matched with the database")
                        response.status = false
                        console.log("-----------", response.status)
                    }
                    else {
                        if(model != catArray.model) {
                            console.log("Model not matched with the database")
                            response.status = false
                        }
                        else {
                            if(version != catArray.pairingVersion) {
                                console.log("Version not matched with the database")
                                response.status = false
                            }
                            else {
                                response.status = true
                            }
                        }
                    }
                }
                
            })
        }
        return response;
    }
    catch(err){
        console.log(err);
        const response ={
            status: false,
            message: err.message
        }
        return response;
    }
}

// const category1 = async(category, responseArray)=>{

//     const response = {
//         status: false,
//         key: null
//     }
   
// loop1:
//     for (const i of responseArray) 
//     {
//         // console.log("Full :", i.Details);
//         if(category == i.Category) {
//             // console.log("Full :", i.Details);
//             response.status= true;
//             response.key =category;
//             // console.log("status :", response.status)
//             // console.log("key : ", response.key)
//             break loop1;
//         }
//         else {
//             response.status= false;
//             response.key = category;
//             // console.log("status :", response.status)
//             // console.log("key : ", response.key)
//             break loop1;
//         }
//     }

// return response;
// }

// const z = async(category, make, responseArray)=>{

//     const response = {
//         status: false,
//         key: null,
//         indexCat: null
//     }

// loop1:
//     for (let i of responseArray) {
//         // console.log(i)
        
//         if(category == i.Category) {
//             console.log("==============")
//             for(let a of i.Details) {
                
               
//                 if(make == a.Make) {
//                     response.status= true;
//                     response.key = make;
//                     // console.log("status : ", response.status)
//                     // console.log("key : ", response.key)
//                     break loop1;
//                 }
//                 else {
//                     response.indexCat = responseArray.indexOf(a);
//                     // console.log("222222222222222222", response.indexCat)
//                     response.status= false;
//                     response.key = make;
//                     // console.log("status false : ", response.status)
//                     // console.log("key false : ", response.key)
//                     break loop1;
//                 }
            
//             }
//         }
// }

// return response;
// }

// const z1 = async(category, make, model, responseArray) => {
    
//     const response = {
//         status: false,
//         key: null,
//         indexCat: null,
//         indexCat1: null
//     }

// loop1:
//     for (const i of responseArray) {
    
//         if(category == i.Category) {
//             // console.log("++++++++")
//             for(let a of i.Details) {
//                 // console.log("-----------")
//                 if(make == a.Make) {
//                     // console.log("---+++++")
//                     for(let b of a.Details) {
//                         // console.log("---______", b)
//                         if(model == b.Model) {
//                             // console.log("model : ", model)
//                             response.status = true;
//                             response.key = model
//                             console.log("status : ", response.status)
//                             console.log("key : ", response.key)
//                             break loop1;
//                         }
//                         else {
//                             response.status = false;
//                             response.key = model
//                             console.log("status fail : ", response.status)
//                             console.log("key fail : ", response.key)
//                             break loop1;
//                         }
//                     }
//                 }
//             }
//         }
    
//     }
//     return response;
// }

// const final = async(category, make, model, version, responseArray) => {
//     const response = {
//         status: false,
//         key: null,
//         indexCat: null,
//         indexCat1: null
//     }

// loop1:
//     for (const i of responseArray) {
    
//         if(category == i.Category) {
//             // console.log("++++++++")
//             for(let a of i.Details) {
//                 // console.log("-----------")
//                 if(make == a.Make) {
//                     // console.log("---+++++")
//                     for(let b of a.Details) {
//                         // console.log("---______", b)
//                         if(model == b.Model) {
//                             // console.log("model : ", model)
//                             for(let c of b.Version) {
//                                 if(version == c.Version) {
//                                     response.status = true;
//                                     response.key = version
//                                     console.log("status : ", response.status)
//                                     console.log("key : ", response.key)
//                                     break loop1;
//                                 }
//                                 else {
//                                     response.status = false;
//                                     response.key = version
//                                     console.log("status fail : ", response.status)
//                                     console.log("key fail : ", response.key)
//                                     break loop1;
//                                 }
//                             }
                            
//                         }
                        
//                     }
//                 }
//             }
//         }
    
//     }
//     return response;
// }