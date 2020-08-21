const express = require("express");
const server = express();

server.get("/", function(req, res) {
    return res.send("SERVIDOR FUNCIONANDO!");
});

server.listen(5000, () => {
    console.log("SERVIDOR STARTADO!");
})