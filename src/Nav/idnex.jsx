import React,{Component} from "react";
import {Link,NavLink} from "react-router-dom"

export default class Index extends Component{
  constructor(){
    super()
    this.state = {
      name:''
    }
  }

  render(){
    return (
      <div>
        <ul>
          <li>
            <NavLink exact to="/">Home页面</NavLink>
          </li>
          <li>
            <NavLink exact to="/main">Main页面</NavLink>
          </li>
          <li>
            <NavLink exact to="/notfound">UCenter页面</NavLink>
          </li>
        </ul>
      </div>
    )
  }
}