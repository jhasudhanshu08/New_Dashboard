const express = require("express");
const router = express.Router();
const { findSerialNo, sendDataToUser } = require("./routes/routeController");
const app = express();
require("./db/connection");

app.use(express.json());

router.use("/api/findSerialNo", findSerialNo);
router.use("/api/sendDataToUser", sendDataToUser);

app.listen(3000, () => {
    console.log("Listening on port 3000 !!");
})