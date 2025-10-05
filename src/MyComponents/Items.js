import React from "react"

function Items(props){

  return (

    <div className="p-5">
      <h1>  {props.task}</h1>
      <h3>Description:  {props.des}</h3>
      <button className="btn btn-primary" onClick={()=>{props.del1(props.sr)}}>Delete </button>
    </div>


  );


}

export default Items;