const express=requie("express");
const app =express();

const jsonData=Json.parse( fs.readFileSync("./plant.json","utf-8"));
console.log(jsonData);

 app.get("/app/v1/")
app.listen(9000,()=>{
    console.log("Server Started Succesfully");
});

// //CRUD
// C: create
// R: read
// U: update
// D: delete

