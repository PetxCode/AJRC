import { revalidateTag } from "next/cache";

export const deleteAction: any = async (formData: FormData) => {
  "use server";
  const id = formData.get("id");
  console.log(id);
  await fetch(`http://localhost:6655/data/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  });

  revalidateTag("name");
};
