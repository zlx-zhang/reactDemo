import React,{Component} from "react";

export default class Api extends Component{
  constructor(){
    super()
    this.state = {
      music:[]
    }
  }
  
  async componentDidMount(){
    try{
    const url = "/api/list"
    const res = await fetch(url,{
      method:"GET"
    })

    const data = await res.json();
    console.log("数据",data)
    }catch(err){
      console.log("请求失败",err)
    }
  }

  render(){
    return (
      <div>hello</div>
    )
  }
}