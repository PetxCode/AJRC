import React, { use } from "react";
import { getData } from "../components/_action";

const Body = () => {
  const newState = use(getData());
  return (
    <div>
      <div>
        {newState?.map((props: any) => (
          <div>{props?.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Body;
