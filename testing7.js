const DashBoard = require("../models/view");
const PlantProfile = require("../models/PlantProfile");
const Device = require("../models/Device");
// const { mapReduce } = require("../models/view");


exports.sendDataToUserService = async (serialNoone) => {
    // console.log(serialNoone);
    try{
        let response = {
            status: false
        };
    

    const serialNo = serialNoone;
        // console.log(serialNo);
    const dashboard = await DashBoard.findOne({
        'information.serialNo': serialNo
        
    })
 
        // console.log(dashboard);
        if(!dashboard) {
            throw new Error("DashBoard data is undefined or not fetching !!")
        }
        else {

            
            for await(const abc of dashboard.deviceConnected.details){
            // console.log(abc);

                const device = await Device.find({}).limit(1);
                // for(var i = 0; i < device.length; i++) {
                // console.log(device[i].pairingVersion)
                // }
                const responseArray = [ {"Inrter":[{"Sungrow":"bjhuij"}]},{"Inverter":[{"Sungrow":[{"All":[{"pairingVersion": {}}]}]}]}];

                // console.log(responseArray)

                // const plantdata = await PlantProfile({
                //     plantId: dashboard.information.plantId
                // })
                
                // const def = device;

                // console.log(def);


                device.forEach (async catArray => {

                    // console.log(catArray)

                   const catResponse =  await category1(catArray.category, responseArray)

                   if(!catResponse.status)
                   {
                        let key = catArray.category;
                        // console.log("key :", key)
                        let obj = {};

                        obj[key] = []
                        // console.log("obj :", obj)
                        responseArray.push(obj)
                   }

                   const catResponse1 =  await z(catArray.category, catArray.manufacture, responseArray)

                   if(!catResponse1.status)
                   {
                       console.log("+++++")
                        let key = catArray.category;
                        let key2 = catArray.manufacture;
                        // console.log("key :", key)
                        let obj = {};

                        obj[key2] = []
                        // console.log("obj :", obj)
                        responseArray[catResponse1.indexCat][key].push(obj)
                        responseArray[catResponse1.indexCat][key][catResponse.indexCat1].push(obj)
                   }
                //    console.log(catResponse1)
                //    console.log(responseArray[1].Inverter[0].Sungrow)


                   const catResponse2 =  await z1(catArray.category, catArray.manufacture, catArray.model, responseArray)
                        if(!catResponse2.status) {
                            let key = catArray.category;
                            let key1 = catArray.manufacture;
                            let key2 = catArray.model

                            let obj = {};
                            obj[key1] = [];
                            let obj1 = {};
                            obj[key2] = []
                            responseArray[catResponse2.indexCat][key].push(obj);
                            responseArray[catResponse1.indexCat][key][catResponse.indexCat1][key1].push(obj)

                            console.log(responseArray[1].Inverter[0].Sungrow[0].pairingVersion)
                            console.log("response : ", catResponse2)
                        }
                //    else {
                //        let key = catArray.manufacture;
                //        let obj = {}
                //        obj[key] = []
                //        console.log("key :", key)
                //    }
                  
                    //first loop
                    // for(var i = 0; i < responseArray.length; i++) {
                    //     //first if
                    //     if(Object.keys(responseArray[i]) == catArray.category) {
                    //         var result = responseArray[i].Inverter;
                    //         // console.log("one : ", responseArray[i])
                    //         //second loop
                    //         for(var i = 0; i < result.length; i++) {
                    //             //second if
                    //             if(Object.keys(result[i]) == catArray.manufacture) {
                    //                 var result2 = result[i].Sungrow;
                    //                 // console.log("manu : ", result[i])
                    //                 //third loop
                    //                 for(var i = 0; i < result2.length; i++) {
                    //                     //third if
                    //                     if(Object.keys(result2[i]) == catArray.model) {
                    //                         var finalResult = result2[i].All
                    //                         response.status = true;
                    //                         response.data = finalResult
                    //                     }
                    //                     //third else
                    //                     // else {
                                            
                    //                     //     response ={
                    //                     //         status: false,
                    //                     //         message: "Error in model or version"
                    //                     //     }
                    //                     //     return response;
                    //                     // }
                    //                 }
                    //             }
                    //             //second else
                    //             // else {
                                    
                    //             //     response ={
                    //             //         status: false,
                    //             //         message: "Error in manufacture"
                    //             //     }
                    //             //     return response;
                    //             // }
                    //         }
                    //     }
                    //     //first else
                    //     // else {
                            
                    //     //     response ={
                    //     //         status: false,
                    //     //         message: "Error in category"
                    //     //     }
                    //     //     return response;
                    //     // }
                    // }





                    // console.log(responseArray);
                    // for(var i = 0; i < responseArray.length; i++) {
                    //     //first if 
                    //     if(Object.keys(responseArray[i]) == catArray.category) {
                    //         var result = responseArray[i].Inverter
                    //         // console.log("result :::::::", result)
                    //         for(var i = 0; i < result.length; i++) {
                    //             //second if
                    //             if(Object.keys(result[i]) == catArray.manufacture) {
                    //                 var result2 = result[i].Sungrow
                    //                 for(var i = 0; i < result2.length; i++) {
                    //                     //third if
                    //                     if(Object.keys(result2[i]) == catArray.model) {
                    //                         var result3 = result2[i].All
                    //                         for(var i = 0; i < result3.length; i++) {
                    //                             //fouth if
                    //                             console.log(result3[i].Version)
                    //                             if(Object.keys(result3[i]) == catArray.parsingVersion) {
                                                    
                    //                                 response.status = ture;
                    //                                 response.data = result3[i].Version
                    //                             }
                    //                             //forth else]
                    //                             // else {
                    //                             //     result3.push({ parsingVersion: device.parsingVersion})
                    //                             //     response.status = true;
                    //                             //     response.data = result3[i].Version
                    //                             // }
                    //                         }
                    //                     }
                    //                     //third else
                    //                     // else {
                    //                     //     result2.push({ userModel: [{ userVersion: device.parsingVersion}]})
                    //                     //     var result3 = result2[i].userModel
                    //                     //     for(var i =0; i < result3.length; i++) {
                    //                     //         result3.push({ userVersion: device.parsingVersion})
                    //                     //         response.status = ture;
                    //                     //         response.data = result3[i].Version
                    //                     //     }
                    //                     // }
                    //                 }
                    //             }
                    //             //second else
                    //             // else {
                    //             //     result.push({ userManufacture: [{ userModel: [{ userVersion: device.parsingVersion}]}]})
                    //             //     var result2 = result[i].userManufacture
                    //             //     for(var i = 0; i < result2.length; i++) {
                    //             //         result2.push({ userModel: [{ userVersion: device.parsingVersion}]})
                    //             //         var result3 = result2[i].userModel
                    //             //         for(var i =0; i < result3.length; i++) {
                    //             //             result3.push({ userVersion: device.parsingVersion})
                    //             //             response.status = ture;
                    //             //             response.data = result3[i].Version
                    //             //         }
                    //             //     }
                    //             // }
                    //         }
                    //     }
                    //     //first else
                    //     // else {
                    //     //     // var result1 = responseArray.userCategory;
                    //     //     responseArray.push({userCategory: [{ userManufacture: [{ userModel: [{ userVersion: device.parsingVersion}]}]}]})
                    //     //     var result1 = responseArray[i+1].userCategory;
                    //     //     // console.log("jkdfinb vikrgh vkgh : ", responseArray)
                    //     //     console.log("jkdfinb vikrgh vkgh : ", result1 )
                    //     //     for(var i = 0; i < result1.length; i++) {
                    //     //         result1.push({ userManufacture: [{ All: [{ Version: device.parsingVersion}]}]});
                    //     //         var result2 = result1[i].userManufacture;
                    //     //         console.log("fffffffffffffff", result2)
                    //     //         for(var i = 0; i < result2.length; i++) {
                    //     //             result2.push({ userModel: [{ Version: device.parsingVersion}]})
                    //     //             var result3 = result2[i].userModel
                    //     //             console.log("aaaaaaaaaaaaaaaaa", result3)
                    //     //             for(var i =0; i < result3.length; i++) {
                    //     //                 result3.push({ userVersion: device.parsingVersion})
                    //     //                 response.status = true;
                    //     //                 response.data = result3[i].Version
                    //     //             }
                    //     //         }
                    //     //     }
                    //     // }
                    // }
                    

                    // if(catArray.category !== responseArray.category) {
                        
                    //     responseArray.push(catArray.category)
                    //     // console.log(responseArray)

                    //     if(catArray.manufacture !== responseArray.manufacture) {
                    //         responseArray.push(catArray.manufacture)
                    //         if(catArray.model !== responseArray.model) {
                    //             responseArray.category.manufacture.model.push(catArray.model)
                    //             if(catArray.parsingVersion !== responseArray.parsingVersion) {
                    //                 responseArray.category.manufacture.model.parsingVersion.push(catArray.parsingVersion)
                    //                 // console.log(responseArray)
                    //                 response.status = true;
                    //                 response.data = responseArray;
                    //             }
                    //             else {
                    //                 // console.log(responseArray)
                    //                 response.status = true;
                    //                 response.data = responseArray;
                    //             }
                    //         }
                    //         else {
                    //             if(catArray.parsingVersion !== responseArray.parsingVersion) {
                    //                 responseArray.category.manufacture.model.parsingVersion.push(catArray.parsingVersion)
                    //                 // console.log(responseArray)
                    //                 response.status = true;
                    //                 response.data = responseArray;
                    //             }
                    //             else {
                    //                 // console.log(responseArray)
                    //                 response.status = true;
                    //                 response.data = responseArray;
                    //             }
                    //         }
                    //     }
                    //     else {
                    //         if(catArray.model !== responseArray.model) {
                    //             responseArray.category.manufacture.model.push(catArray.model)
                    //             if(catArray.parsingVersion !== responseArray.parsingVersion) {
                    //                 responseArray.category.manufacture.model.parsingVersion.push(catArray.parsingVersion)
                    //                 // console.log(responseArray)
                    //                 response.status = true;
                    //                 response.data = responseArray;
                    //             }
                    //             else {
                    //                 // console.log(responseArray)
                    //                 response.status = true;
                    //                 response.data = responseArray;
                    //             }
                    //         }
                    //         else {
                    //             if(catArray.parsingVersion !== responseArray.parsingVersion) {
                    //                 responseArray.category.manufacture.model.parsingVersion.push(catArray.parsingVersion)
                    //                 // console.log(responseArray)
                    //                 response.status = true;
                    //                 response.data = responseArray;
                    //             }
                    //             else {
                    //                 // console.log(responseArray)
                    //                 response.status = true;
                    //                 response.data = responseArray;
                    //             }
                    //         }
                    //     }
                    // }
                    // else {
                    //     if(catArray.manufacture !== responseArray.manufacture) {
                    //         responseArray.category.manufacture.push(catArray.manufacture)
                    //         if(catArray.model !== responseArray.model) {
                    //             responseArray.category.manufacture.model.push(catArray.model)
                    //             if(catArray.parsingVersion !== responseArray.parsingVersion) {
                    //                 responseArray.category.manufacture.model.parsingVersion.push(catArray.parsingVersion)
                    //                 // console.log(responseArray)
                    //                 response.status = true;
                    //                 response.data = responseArray;
                    //             }
                    //             else {
                    //                 // console.log(responseArray)
                    //                 response.status = true;
                    //                 response.data = responseArray;
                    //             }
                    //         }
                    //         else {
                    //             if(catArray.parsingVersion !== responseArray.parsingVersion) {
                    //                 responseArray.category.manufacture.model.parsingVersion.push(catArray.parsingVersion)
                    //                 // console.log(responseArray)
                    //                 response.status = true;
                    //                 response.data = responseArray;
                    //             }
                    //             else {
                    //                 // console.log(responseArray)
                    //                 response.status = true;
                    //                 response.data = responseArray;
                    //             }
                    //         }
                    //     }
                    //     else {
                    //         if(catArray.model !== responseArray.model) {
                    //             responseArray.category.manufacture.model.push(catArray.model)
                    //             if(catArray.parsingVersion !== responseArray.parsingVersion) {
                    //                 responseArray.category.manufacture.model.parsingVersion.push(catArray.parsingVersion)
                    //                 // console.log(responseArray)
                    //                 response.status = true;
                    //                 response.data = responseArray;
                    //             }
                    //             else {
                    //                 // console.log(responseArray)
                    //                 response.status = true;
                    //                 response.data = responseArray;
                    //             }
                    //         }
                    //         else {
                    //             if(catArray.parsingVersion !== responseArray.parsingVersion) {
                    //                 responseArray.category.manufacture.model.parsingVersion.push(catArray.parsingVersion)
                    //                 // console.log(responseArray)
                    //                 response.status = true;
                    //                 response.data = responseArray;
                    //             }
                    //             else {
                    //                 // console.log(responseArray)
                    //                 response.status = true;
                    //                 response.data = responseArray;
                    //             }
                    //         }
                    //     }
                    // } 
                    // var def1 = [def]
                // console.log(def1);
                // console.log("***********************");
                // const catArray = def1;
                // console.log(catArray);
                // console.log(def.category);
                // console.log(catArray);
                // def.category = "Inverter";
                // catArray.category = "Inverter";
                // const def2 = def1;
                // console.log(def2);
                // if(!catArray) {

                //     throw new Error("Device data is undefined or not fetching !!")
                // }
                
                // else if(catArray.category == "Inverter") {
                //     // console.log(def);
                //     // response.status = true;
                //     // response.data = def;
                //     const catArray1 = [catArray];
                //     catArray1.forEach(manufactureArray => {
                //         if(manufactureArray.manufacture == "Delta") {
                //             // console.log(catArray);
                //             // response.status = true;
                //             // response.data = catArray;
                //             const model1 = [manufactureArray];
                //             // console.log(model1);
                //             model1.forEach(model => {
                //                 if(model.model == "Not") {
                //                     console.log(model);
                //                     response.status = true;
                //                     response.data = model;
                //                     const parsingVersion1 = [model];
                //                     // console.log(parsingVersion1);
                //                     // parsingVersionArray1.forEach(parshingVersionArray => {
                //                     //     if(parshingVersionArray.parshingVersion == "V1.6") {
                //                     //         console.log(parshingVersion);
                //                     //         response.status = true;
                //                     //         response.data = parshingVersionArray;
                //                     //     }
                //                     // })
                //                 }
                //             })
                //         }
                //     })
                //     // catArray.forEach(catArray => {
                        
                //     // //    console.log(catArray);
                    
                //     //     if(catArray.manufacture == catArray.manufacture) {
                //     //         const manuArray = [catArray]
                //     //         manuArray.forEach (manuArray => {
                //     //             if(manuArray.model == manuArray.model) {
                //     //                 const modelArray = [manuArray]
                //     //                 modelArray.forEach (modelArray => {
                                       
                //     //                     if(!plantdata) {
                //     //                         const arr1 = [def];
                //     //                         if(modelArray.pairingVersion == modelArray.pairingVersion) {
                //     //                             response.status = true;
                //     //                             response.data = {
                //     //                                 result: { abc, arr1, plantName: null }
                //     //                             }
                //     //                         }
                //     //                     } 
                //     //                     else {
                //     //                         const arr1 = [def];
                //     //                         if(modelArray.pairingVersion == modelArray.pairingVersion) {
                //     //                             response.status = true;
                //     //                             response.data = {
                //     //                                 result: { abc, arr1, plantName: PlantProfile.plantName }
                //     //                             }
                //     //                         }
                //     //                     }
                //     //                     // console.log(modelArray);
                                        
                //     //                 })
                //     //             }
                //     //         })
                //     //     }             
                //     // })
                    
                // }
            })
            
            
        } 
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

// module.exports = router;

const category1 = async(category, responseArray)=>{

    const response = {
        status: false,
        key: null
    }
   
loop1:
    for (const i of responseArray) 
    {
    loop2:
        for (const j in i) 
        {
            if(category ==  j )
            {
                response.status= true;
                response.key =category;
                break loop1;
            }
            else
            {
                response.status= false;
                response.key = category;
            }
        }
    }

return response;
}

const z = async(category, make, responseArray)=>{

    const response = {
        status: false,
        key: null,
        indexCat: null
    }

loop1:
    for (const i of responseArray) {
        // console.log(i)
    loop2:
        for (const j in i) {
    //     console.log(j)
    //     console.log( "index")
    //    console.log( responseArray.indexOf(i))
       response.indexCat = responseArray.indexOf(i);
        if(category ==  j )
        { 
            loop3:
                for (const a of i[j]) {
                    // console.log(a)
                loop4:
                    for (const b in a) {
                    // console.log(b)
                    // console.log(make ==  b)
                    
                    if(make ==  b)
                    {
                        // console.log("make", make)
                        response.status= true;
                        response.key =make;
                        break loop1;
                    }
                    else
                    {
                        response.status= false;
                        response.key =make;
                    }   
                }   
            }
        }
        else
        {
            response.status= false;
            response.key =make;
        }
    }
}

return response;
}

const z1 = async(category, make, model, responseArray) => {
    
    const response = {
        status: false,
        key: null,
        indexCat: null
    }

loop1:
    for (const i of responseArray) {
    
    loop2:
        for (const j in i) {
        
    //    console.log( responseArray.indexOf(i))
    
        if(category ==  j )
        { 
            loop3:
                for (const a of i[j]) {
                loop4:
                    for (const b in a) {
                    response.indexCat =i[j].indexOf(a);
                    if(make ==  b)
                    {
                        
                        loop5:
                            for(const c of a[b]) {
                                console.log("c : ", c)
                                loop6: 
                                for(const d in c) {
                                    console.log("d :", d);
                                    console.log("ture false", model == b)
                                    if(model == d) {
                                        
                                        response.status= true;
                                        console.log("++++++++++++++++", model)
                                        console.log(response.status)
                                        response.key =model;
                                        break loop1;
                                    }
                                    else {
                                        response.status= false;
                                        response.key =model;
                                    }
                                }
                            }
                    }
                    else
                    {
                        response.status= false;
                        response.key =make;
                    }   
                }   
            }
        }
        else
        {
            response.status= false;
            response.key =make;
        }
    }
    }
}