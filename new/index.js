const express = require("express");
const fs = require("fs");

const app = express();

const jsonData = JSON.parse(fs.readFileSync("./Menu.json", "utf-8"));
console.log(jsonData);

app.use(express.json());

const PORT_NO = 9000;
app.listen(PORT_NO, () => {
  console.log("Server Started at ", PORT_NO);
});

app.get("/api/v1/menu", (req, res) => {
  res.status(200).json({
    status: "Successful",
    length: jsonData.length,
    data: jsonData,
  });
});

app.get("/api/v1/menu/:id", (req, res) => {
  const id = req.params.id;
  console.log("Requested ID:", id);

  let foundItem;

  jsonData.forEach((section) => {
    section.card.card.itemCards.forEach((item) => {
      if (item.card.info.id === id) {
        foundItem = item.card.info;
      }
    });
  });

  if (!foundItem) {
    return res.status(404).json({
      status: "Fail",
      message: "Please check your menu id",
    });
  }

  res.status(200).json({
    status: "Successful",
    data: foundItem,
  });
});