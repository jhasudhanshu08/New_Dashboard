
let category = "Inverter"
let manufacture = "Sungrow"
let model = "All";
let parsingVersion = "V1.0";
let one = "one"
var result = [{Inverter1: [{ Sungrow: [{ All: { V1_0: parsingVersion}}]}]}]
var result1 = [{Inverter: { Delta: { All: { V1_0: parsingVersion}}}}]

// console.log(Object.keys(result[0]))
console.log("Full Array : ",result)

for(var i = 0; i < result.length; i++) {
    // console.log("hkfjhk")
    console.log("Inverter : ", result[i])
    if(Object.keys(result[i]) == "Inverter1") {
        // console.log("testing")
        // console.log(result[i].Inverter1[i])
        var result2 = result[i].Inverter1
        console.log("Sungrow : ", result2)
        for(var i = 0; i < result2.length; i++) {
            if(Object.keys(result2[i] == "Sungrow")) {
                // console.log("testing")
                var result3 = result2[i].Sungrow;
                result3.push({All: {V1_0: one}})
                // result3 = {}
                console.log("model : ", result3)
                for(var i = 0; i < result3.length; i++) {
                    if(Object.keys(result3[i] == "All")) {
                        var result4 = result3[i].All
                        result4 = {V1_0: one}
                        console.log("version : ", result4)
                    }
                }
            }
        }
    }
}
// console.log(result[0].Inverter1[0])

// result[0].Inverter1[0] = result.push("hello")
// console.log(result[0].Inverter1[0]);