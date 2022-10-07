import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

export const IcecreamView = () => {
  const noOfIcecream = useSelector((state) => state.icecream.numOfIceCream);
  const dispatch = useDispatch();

  const [value, setValue] = useState(1);

  return (
    <div>
      <h2>Number of Ice creams - {noOfIcecream}</h2>
      <button onClick={() => dispatch(ordered())}>Order Ice creams</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => dispatch(restocked(+value))}>
        Restock Ice creams
      </button>
    </div>
  );
};
