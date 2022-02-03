import React, { useState } from "react";
import "./Items.css";

function Items(props) {
  return (
    <div key={props.text}  >
      <div className="items">
        <input
          type="checkbox"
          checked={props.checked}
          onClick={() => props.changeTaskStatus(props.id)}
        />
        <div data-testid="Item">{props.text}</div>
      </div>
      <div className="buttons">
        <button className="btn" onClick={() => props.deleteItem(props.id)}>
          Delete
        </button>
      </div>
      <hr />
    </div>
  );
}
export default Items;
