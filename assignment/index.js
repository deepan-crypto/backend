const express = require("express");
const fs = require("fs");

const app = express();

app.use((req, res, next) => {
const now=new Date();
req.requestTimeOfHit=now.toLocaleString();
next();
}
);
app.use((req, res, next) => {
req.message="Hello";
  next();
});

// CONTROLLERS
const getAllEntry = (req, res) => {
  res.status(200).json({
    status: "Successful",
    length: jsonData.length,
    data: jsonData,
  });
};

const getOneEntry = (req, res) => {
  console.log(req.params.id);
  let entry = jsonData.find((el) => el.id === id);
  if (!entry) {
    res.status(404).json({
      status: "Fail",
      message: "Please check your entry id",
    });
  }
  res.status(200).json({
    status: "Successful",
    length: jsonData.length,
    data: entry,
  });
};

const createEntry = (req, res) => {
  const id = jsonData.length;
  const entry = OBject.assign({ id: id }, req.body);
  jsonData.push(entry);
  fs.writeFileSync("./Stats.json", JSON.stringify(jsonData), "utf-8", (err) => {
    if (err) {
      res.status(400).json({
        status: "Failed to write",
      });
    }
  });

  res.status(201).json({
    status: "True",
    data: entry,
  });
};

const updateEntry = (req, res) => {
  const entryId = req.params.id;
  const entry = jsonData.find((el) => el.id === entryId);

  if (!entry) {
    res.status(404).json({
      status: "Fail",
      message: "Please check your entry id",
    });
  }

  res.status(200).json({
    status: "Success",
    message: "Update Successful",
  });
};

const deleteEntry = (req, res) => {
  const entryId = req.params.id;
  const entry = jsonData.find((el) => el.id === entryId);

  if (!entry) {
    res.status(404).json({
      status: "Fail",
      message: "Please check your entry id",
    });
  }

  res.status(200).json({
    status: "Success",
    message: "Update Successful",
  });
};

const jsonData = JSON.parse(fs.readFileSync("./Stats.json", "utf-8"));
console.log(jsonData);
app.use(express.json());

const PORT_NO = 9000;
app.listen(PORT_NO, () => {
  console.log("Server Started at ", PORT_NO);
});


// ROUTES

app.get("/api/v1/entry", getAllEntry);

app.get("/api/v1/entry':id", getOneEntry);

app.post("/api/v1/entry", createEntry);

app.put("/api/v1/entry/:id", updateEntry);

app.delete("/api/v1/entry/:id", deleteEntry);