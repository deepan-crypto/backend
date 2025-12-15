const express=require("express");
const app=express();
const fs=require("fs");

const jsonData=JSON.parse(fs.readFileSync("./plant.json","utf-8"));
console.log(jsonData);

app.get("/api/v1/entry",(req, res)=>{
    res.status(200).json({
        status:"Successful",
        length : jsonData.length,
        data : {
            jsonData,
        }
    });
});
app.get("/api/v1/entry/:id",(req,res)=>{
   let id=req.params.id;
   let entry=jsonData.find((el)=>el.id == id);
   if(!gym){
    res.status(404).json({
        status:"Fail",
        message:"Please check your entry id",
    })
   }
   res.status(200).json({
    status:"Successful",
    gym,
   })
});




app.post("/api/v1/entry", (req, res) => {});

app.put("/api/v1/entry/:id", (req, res) => {});

app.delete("/api/v1/entry/:od", (req, res) => {});


//crud operation
//c=creation post
//r=read get
//u=update put=>update single attribute and patch=>update everything in database
//d=delete 

const PORT_NO=9000;
app.listen(PORT_NO,()=>{
    console.log("Server started successfully",PORT_NO);
})