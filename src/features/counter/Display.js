import React from "react";
import { useSelector } from "react-redux";

const Display = () => {
  const count = useSelector((state) => state.counter.count);
  return (
    <div style={{ fontSize: "50px" }}>
      <h3>Display</h3>
      <p>{count}</p>
    </div>
  );
};

export default Display;
