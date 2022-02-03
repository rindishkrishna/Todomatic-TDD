import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Items from "./Components/Items";
function App() {
  const [text, setText] = useState("");
  const [items, setItem] = useState([
    { text: "Task 1", id: uuidv4(), active: true },
    { text: "Task 2", id: uuidv4(), active: true },
  ]);
  const [activeFilter, setFilter] = useState("all");
  function addItem(txt) {
    let newElement = {
      text: txt,
      id: uuidv4(),
      active: true,
    };
    setItem((oldArray) => [...oldArray, newElement]);
  }
  function changeTaskStatus(id) {
    let item = items.map((x) => {
      if (x.id === id) {
        return { ...x, active: !x.active };
      }
      return x;
    });
    setItem(item);
  }
  function deleteItem(id) {
    setItem(items.filter((x) => x.id !== id));
  }
  function activeItems() {
    setFilter("active");
  }
  function completedItems() {
    setFilter("completed");
  }
  function allItems() {
    setFilter("all");
  }
  return (
    <div className="container">
      <div className="inner-container">
        <div className="heading">Todomatic</div>
        <div>
          <textarea
            data-testid="Input"
            className="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
        <button  data-testid="add-button" className="btn" onClick={() => addItem(text)}>
          Add
        </button>
        <div className="categories">
          <button data-testid="all-button" className="box" onClick={() => allItems(text)}>
            All
          </button>
          <button  data-testid="active-button" className="box" onClick={() => activeItems()}>
            Active
          </button>
          <button data-testid="completed-button" className="box" onClick={() => completedItems()}>
            Completed
          </button>
        </div>
        <div className="todo">
          {items
            .filter((x) => {
              if (activeFilter === "all") {
                return true;
              } else if (activeFilter === "active") {
                return x.active;
              } else if (activeFilter === "completed") {
                return !x.active;
              }
            })
            .map((x) => {
              return (
                <Items

                  key={x.id}
                  id={x.id}
                  text={x.text}
                  checked={!x.active}
                  changeTaskStatus={changeTaskStatus}
                  deleteItem={deleteItem}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
