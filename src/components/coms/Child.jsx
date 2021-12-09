import React,{Component} from "react";

export default class Child extends Component{
  constructor(){
    super()
    this.state = {

    }
  }

  render(){
    return(
      <div>
        Child:{this.props.title}<br />
        <button onClick={ this.clickhandle }>传递数据</button>
      </div>
    )
  }

  clickhandle = (e)=>{
    this.props.onMyEvent("子传父");//读取父级的一个事件onMyEvent,传值给父级
  }
}