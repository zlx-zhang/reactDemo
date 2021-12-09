import React,{Component} from "react";
import { Redirect } from "react-router";//重定向Redirect

export default class Shop extends Component{
  constructor(){
    super()
    this.state = {
      isLogin:true
    }
  }
  render(){
    const {isLogin} = this.state;
    return(
      <div>
        {
          isLogin?
          <div>shop</div>
          :<Redirect to="/home"/>
        }
      </div>
    )
  }
}