import React from "react";
import Items from "./Items";

function MainList(props) {
  return (
    <>
      {props.todo.map((item) => (
        <Items
          key={item.srNo}
          sr={item.srNo}
          task={item.taskName}
          des={item.description}
          del1={props.del}
          // obj={item}-->by reference 
        />
      ))}
    </>
  );
}

export default MainList;
