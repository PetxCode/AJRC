"use client";

import React, { Suspense, useEffect, useState } from "react";

import Body from "./Body";
import { getData } from "../components/_action";

const page = () => {
  const [state, setState] = useState<Array<{}>>([]);

  useEffect(() => {
    getData().then((res) => {
      setState(res);
    });
  }, []);

  return (
    <Suspense fallback={<p>Loading....</p>}>
      <Body />

      {/* {state?.map((props: any) => (
        <div>{props?.name}</div>
      ))} */}
    </Suspense>
  );
};

export default page;
