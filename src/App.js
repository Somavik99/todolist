import React from "react";
import UI from "./Components/UI/UI";
import "./App.css";
function App() {
  return (
    <>
      <p className="flex justify-center text-7xl text-fuchsia-900 font-bold ">
        ✍ Add Todo's List ! ✍
      </p>
      <div className="flex justify-center m-44 ">
        <div className="App  justify-center box-border border-1 rounded-3xl bg-gradient-to-b from-gray-100 to-slate-200 border-gray-100 shadow-lg max-w-fit h-96 overflow-y-auto">
          <UI />
        </div>
        {/* <button className="bg-blue-600 box-border border-2 rounded-full outline-2 w-16 h-10 shadow-lg text-gray-50 shadow-slate-400 hover:bg-gradient-to-tr from-slate-500 to-slate-700">
          Save
        </button> */}
      </div>
    </>
  );
}

export default App;
