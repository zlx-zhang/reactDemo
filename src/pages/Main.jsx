import React from "react";
import { Button } from "antd";

const Main = (props) => {
  console.log("=======", props.image);
  const clickhandle = ()=>{
    console.log(props)
    props.history.replace("/shop") //相等于props.history.push
  }
  return (
    <div>
      <Button type="primary" onClick={clickhandle}>跳转</Button>
    </div>
  )
};

export default Main;
