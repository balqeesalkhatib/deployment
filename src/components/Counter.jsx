import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
  decrementByAmount,
} from "../redux/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");

  const handleAmount = () => {
    const value = Number(amount);
    if (!isNaN(value)) {
      if (value >= 0) {
        dispatch(incrementByAmount(value));
      } else {
        dispatch(decrementByAmount(Math.abs(value)));
      }
      setAmount("");
    }
  };

  return (
    <div className="ContentClass">
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button disabled={count === 0} onClick={() => dispatch(decrement())}>
        -
      </button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <input
        value={amount}
        type="number"
        placeholder="Enter amount"
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleAmount}>Apply Amount</button>
    </div>
  );
};

export default Counter;
