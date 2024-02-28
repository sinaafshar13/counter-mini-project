import { useState } from "react";
import "./Counter.css";
import BtnItem from "./BtnItem";
function Counter() {
  let [count, setCounter] = useState(0);
  const incHandler = () => {
    setCounter(count + 1);
  };
  const decHandler = () => {
    setCounter(count - 1);
  };
  const resetHandler = () => {
    setCounter(0);
  };
  let btn = [
    {
      name: "decrease",
      clk: decHandler,
      text: "Decrease",
    },
    {
      name: "increase",
      clk: incHandler,
      text: "Increase",
    },
    {
      name: "reset",
      clk: resetHandler,
      text: "Reset",
    },
  ];
  return (
    <>
      <h1>{count}</h1>
      <div className="buttons">
        {count > 0 && <BtnItem {...btn[0]} />}
        <BtnItem {...btn[1]} />
        {count > 0 && <BtnItem {...btn[2]} />}
      </div>
    </>
  );
}
export default Counter;
