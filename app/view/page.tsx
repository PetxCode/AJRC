import React from "react";
import FormInput from "./FormInput";
import { deleteAction } from "./action";

interface iProps {
  id: string;
  name: string;
}
const page = async () => {
  const res = await fetch("http://localhost:6655/data", {
    cache: "no-cache",
    next: {
      tags: ["name"],
    },
  });

  const data = await res.json();

  return (
    <div>
      <p>This is it: Action</p>
      <br />
      <FormInput />
      <br />
      <br />

      <div>
        {data?.map((props: iProps) => {
          return (
            <div key={props?.id}>
              <p>{props?.name}</p>

              <form action={deleteAction}>
                <input type="hidden" name="id" value={props?.id} />
                <button className="text-[12px] text-red-500 " type="submit">
                  Delete
                </button>
              </form>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
