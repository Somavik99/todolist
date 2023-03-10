import React from "react";

const Todo = (props) => {
  return (
    <div>
      <button
        className="bg-purple-600 box-border border-2 rounded-full outline-2 w-8 h-8 shadow-lg text-gray-50 shadow-slate-400 hover:bg-gradient-to-tr from-slate-500 to-slate-700"
        onClick={() => {
          props.Select(props.id);
        }}
      >
        x
      </button>
     
      <p className="inline-block font-sans text-4xl font-semibold text-gray-700">
        {props.prop}
      </p>

      
    </div>
  );
};

export default Todo;
