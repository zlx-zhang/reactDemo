const express = require("express");
const app = express();
const router = require("./router");

app.use("/",router);

app.listen(8000,function(){
  console.log("serve running at port 8080")
})