const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.json());

const jsonData = JSON.parse(fs.readFileSync("./Menu.json", "utf-8"));
console.log(JSON.stringify(jsonData, null, 2));


app.get("/api/v1/menu", (req, res) => {
  res.status(200).json({
    status: "Successful",
    length: jsonData.length,
    data: {
      jsonData,
    },
  });
});

app.get("/api/v1/menu/:id", (req, res) => {
  const id = Number(req.params.id);

  const menu = jsonData.find((el) => el.id === id);

  if (!menu) {
    return res.status(404).json({
      status: "Fail",
      message: "Menu item not found",
    });
  }

  res.status(200).json({
    status: "Successful",
    data: menu,
  });
});

//Routes
app.get("/api/v1/menu",getAllMenu);
app.get("/api/v1/menu/:id",getMenuById);

