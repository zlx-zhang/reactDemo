import React from "react";
import queryString from 'query-string';



const UCenter = (props)=>{
  // const params = new URLSearchParams(props.location.search)
  // console.log(params.get("name"));
  // console.log("mmmmm",params)
  const value = queryString.parse(props.location.search)
  console.log(value)
  return(
    <div>
      Hello UCenter: {props.match.params.id}
    </div>
  )
}

export default UCenter