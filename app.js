const express = require("express");
const router = require("./routes/routeController");
const app = express();

app.use(express.json());

app.use("/api", router);

app.listen(3000, () => {
    console.log("Listening on port 3000 !!");
})