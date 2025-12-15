const express = require("express");
const fs = require("fs");

const app = express();

// CRUD Operations
// C: Creation POST
// R: Read GET
// U: Update Put & PATCH
// D: Delete DELETE

const PORT_NO = 9000;
app.listen(PORT_NO, () => {
  console.log("Server Started at ", PORT_NO);
});

app.get("/api/v1/entry", (req, res) => {
  res.status(200).json({
    status: "Successful",
    length: jsonData.length,
    data: jsonData,
  });
});

app.get("/api/v1/entry':id", (req, res) => {
    let id=req.params.id;
    let plant = jsonData.find((el)=> el.id==id);

    res.status(200).json
});

app.post("/api/v1/entry", (req, res) => {});

app.put("/api/v1/entry/:id", (req, res) => {});

app.delete("/api/v1/entry/:od", (req, res) => {});

const jsonData = JSON.parse(fs.readFileSync("./plant.json", "utf-8"));
console.log(jsonData);