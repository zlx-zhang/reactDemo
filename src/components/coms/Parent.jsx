import React,{Component} from "react";
import Child from "./Child";

export default class Parent extends Component{
  constructor(){
    super()
    this.state = {
      value:''
    }
  }

  render(){
    const {value} = this.state;
    return(
      <div>
        Parent:{value}
        <Child title="标题" onMyEvent={this.clickhandle}></Child>
      </div>
    )
  }
  ///父级onMyEvent调用子级的点击事件并接受子级传过来的值
  clickhandle = (e)=>{
    this.setState({
      value:e
    })
    console.log("e",e)
  }
}