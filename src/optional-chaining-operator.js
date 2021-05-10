export const main = async () => {
  const nestedStructure = {
    level1: {
      nestedInnerLevel: {
        values: {
          value: 22,
        },
      },
    },
  };

  try {
    console.log("Accessing level 2...");

    const level2Value = nestedStructure.level2.nestedInnerLevel.values.value;

    console.log("Level 2 value:", level2Value);
  } catch (error) {
    console.error("I will crash because of a null reference :O");
    console.error(error);
  }

  try {
    console.log("Accessing level 2 safely...");

    const level2Value = nestedStructure.level2?.nestedInnerLevel?.values?.value;

    console.log("Level 2 value:", level2Value);
  } catch (error) {
    console.error("But I will not :D");
    console.error(error);
  }
};
