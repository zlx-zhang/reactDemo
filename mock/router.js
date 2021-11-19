const express = require("express");
const router = express.Router();

router.get("/api/list",(req,res)=>{
  res.send([
    {
      name:"anbi",
      age:18
    },
    {
      name:"zhangsan",
      age:30
    }
  ])
})
router.post("/api/info",(req,res)=>{
  res.send([
    {
      name:"anbi",
      age:18
    },
    {
      name:"zhangsan",
      age:30
    },
    {
      name:"lisi",
      age:30
    }
  ])
})

module.exports = router;