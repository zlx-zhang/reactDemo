import React,{Component} from "react";
import {Button} from "antd"
import { withRouter } from "react-router";

class MainDemo extends Component{
  constructor(props){
    super()
    this.state = {

    }
  }

  render(){
    return(
      <div>
        <Button type="primary" onClick={this.clickHandle.bind(this)}>跳转</Button>
      </div>
    )
  }

  clickHandle = ()=>{
    console.log(this.props);
    this.props.history.push("/Main")
  }
}

export default withRouter(MainDemo)//高阶路由组件