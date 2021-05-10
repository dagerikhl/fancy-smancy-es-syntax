require("core-js/stable");
require("regenerator-runtime/runtime");

const runTask = (title, executor) => {
  console.log(`\n=== ${title} ===\n`);
  executor();
  console.log();
};

const nullishCoalescingOperator = require("./lib/nullish-coalescing-operator")
  .main;
const optionalChainingOperator = require("./lib/optional-chaining-operator")
  .main;

const main = async () => {
  runTask("Nullish coalescing operator", nullishCoalescingOperator);
  runTask("Optional chaining operator", optionalChainingOperator);
};

main().catch((error) => {
  console.log("Application crashed.");
  console.error(error);
});
