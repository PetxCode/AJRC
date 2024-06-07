"use client";

import React, { useState, useMemo, memo } from "react";

const TestScreen = () => {
  console.log("Testing this Comp");
  return <div>This is a new Screen</div>;
};

const Test = memo(TestScreen);

const page = () => {
  const [count, setCount] = useState<number>(0);

  const addCount = () => {
    setCount((el: number) => el + 1);
  };

  console.log(count);
  return (
    <div>
      <p>{count}</p>
      <button
        onClick={addCount}
        className="px-4 py-2 bg-blue-500 text-white rounded-md mt-5"
      >
        Push
      </button>

      <div>
        <Test />
      </div>
    </div>
  );
};

export default page;
