const express = require("express");
const router = express.Router();
const xyz = require("./routes/routeController");
const abc = require("./routes/routerDataReceiveController")
const app = express();
require("./db/connection");

app.use(express.json());
app.use(express.urlencoded({ limit: "16mb", extended: true, parameterLimit: 50000 }));

// app.use("/", (req, res) => {
//     res.send("sjfdjhgfdh");
// })
app.use("/api", xyz);
app.use("/api", abc);


app.listen(3000, () => {
    console.log("Listening on port 3000 !!");
})