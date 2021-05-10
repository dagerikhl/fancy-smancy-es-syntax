export const main = async () => {
  let variable = "";

  const falsyOr = variable || "new value";

  const nullishOr = variable ?? "another new value?";

  console.log("variable: ", JSON.stringify(variable));
  console.log("falsyOr:  ", JSON.stringify(falsyOr));
  console.log("nullishOr:", JSON.stringify(nullishOr));
};
