import React,{Component} from "react";

export default class Book extends Component{
  constructor(){
    super()
    this.state = {

    }
  }

  render(){
    return(
      <div>
        Book
        {this.props.children}
      </div>
    )
  }
}