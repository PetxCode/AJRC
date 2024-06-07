// "use client";

"use client";

import { revalidateTag } from "next/cache";
import React, { useRef } from "react";

const FormInput = async () => {
  const ref: any = useRef(null);

  const inputAction: any = async (formData: FormData) => {
    // "use server";
    const name = formData.get("name");
    console.log(name);

    await fetch("http://localhost:6655/data", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        id: Math.floor(Math.random() * Date.now()).toString(),
        name,
      }),
    });

    revalidateTag("name");

    // ref.current.reset();
  };

  return (
    <div className="mt-10 w-[300px]">
      <div>Input form</div>

      <form ref={ref} action={inputAction} className="flex mt-5 flex-col">
        <label className="font-semibold text-[12px]">Name</label>
        <input
          name="name"
          type="text"
          placeholder="name"
          className="border h-[45px] rounded-md px-2"
        />

        <button
          type="submit"
          className=" mt-10 bg-blue-500 text-white py-3 rounded-md "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormInput;
