import React, { useState } from "react";
import Todo from "../TodoList/Todo";

const UI = () => {
  const [InputChange, setInputChange] = useState("");
  const [Click, setClick] = useState([]);
  const changeHandler = (e) => {
    setInputChange(e.target.value);
  };
  const clickHandler = () => {
    setClick((items) => {
      return [...items, InputChange];
    });
    setInputChange("");
    console.log("Item Entered");
  };
  const deleteHandler = (id) => {
    setClick((items) => {
      return items.filter((ItemsToDelete, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="h-32 m-4">
        <input
          type="text"
          placeholder="Add Items"
          className="box-border bg-inherit outline-none border-b-4 border-b-fuchsia-600"
          value={InputChange}
          onChange={changeHandler}
        />

        <button
          className="w-16 h-16 p-2 text-center align-sub  text-4xl box-border border-1 rounded-full  bg-fuchsia-600 text-gray-50 shadow-lg shadow-fuchsia-400  hover:bg-gradient-to-r from-cyan-500 to-slate-500  "
          onClick={clickHandler}
        >
          +
        </button>

        {Click.map((oldItems, index) => {
          return (
            <Todo
              key={oldItems}
              id={index}
              prop={oldItems}
              Select={deleteHandler}
            />
          );
        })}
      </div>
    </>
  );
};

export default UI;
