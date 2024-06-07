export const getData = async () => {
  const res = await fetch("http://localhost:6655/data", {
    cache: "no-cache",
    next: {
      tags: ["name"],
    },
  });

  return await res.json();
};
