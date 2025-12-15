const express = require("express");
const fs = require("fs");

const app = express();

const jsonData = JSON.parse(fs.readFileSync("./Data.json", "utf-8"));
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
  console.log(id);

  let entry = jsonData.find((el) => el.card.card.title === id);

  if (!entry) {
    res.status(404).json({
      status: "Fail",
      message: "Please check your menu id",
    });
  }

  res.status(200).json({
    status: "Successful",
    data: entry,
  });
});

app.post("/api/v1/menu", (req, res) => {
  const id = jsonData.length;
  const entry = Object.assign({ id: id }, req.body);

  jsonData.push(entry);

  fs.writeFileSync(
    "./Menu.json",
    JSON.stringify(jsonData),
    "utf-8",
    (err) => {
      if (err) {
        res.status(400).json({
          status: "Failed to write",
        });
      }
    }
  );

  res.status(201).json({
    status: "True",
    data: entry,
  });
});

app.put("/api/v1/menu/:id", (req, res) => {
  const entryId = req.params.id;
  const entry = jsonData.find((el) => el.id === entryId);

  if (!entry) {
    res.status(404).json({
      status: "Fail",
      message: "Please check your menu id",
    });
  }

  res.status(200).json({
    status: "Success",
    message: "Update Successful",
  });
});

app.delete("/api/v1/menu/:id", (req, res) => {
  const entryId = req.params.id;
  const entry = jsonData.find((el) => el.id === entryId);

  if (!entry) {
    res.status(404).json({
      status: "Fail",
      message: "Please check your menu id",
    });
  }

  res.status(200).json({
    status: "Success",
    message: "Delete Successful",
  });
});