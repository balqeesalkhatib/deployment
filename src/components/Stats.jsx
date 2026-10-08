import React, { useState } from "react";
import { useSelector } from "react-redux";
import { increment, decrement } from "../redux/counterSlice";

const Stats = () => {
  const totalIncrements = useSelector((state) => state.counter.totalIncrements);
  const totalDecrements = useSelector((state) => state.counter.totalDecrements);

  return (
    <div className="ContentClass">
      <h1>Stats: </h1>
      <p>Total Increments: {totalIncrements}</p>
      <p>Total Decrements: {totalDecrements}</p>
    </div>
  );
};

export default Stats;
