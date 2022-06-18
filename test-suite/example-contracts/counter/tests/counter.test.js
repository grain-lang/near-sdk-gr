const path = require("path");
const { Worker } = require("near-workspaces");
const anyTest = require("ava");

const test = anyTest;

test.before(async t => {
  const worker = await Worker.init({network: 'sandbox'});
  const root = worker.rootAccount;
  const contract = await root.createAndDeploy(
    "grain-near-simple-counter",
    path.join(__dirname, "..", "src", "index.gr.wasm"),
  );
  t.context.worker = worker;
  t.context.accounts = {root, contract};
})

test.after(async t => {
  // Stop Sandbox server
  await t.context.worker.tearDown().catch(error => {
    console.log('Failed to tear down the worker:', error);
  });
})

test("increments & decrements", async t => {
  const {root, contract} = t.context.accounts
  await root.call(contract, "increment", {});
  await root.call(contract, "increment", {});
  await root.call(contract, "decrement", {});
  await root.call(contract, "increment", {});
  await root.call(contract, "increment", {});
  await root.call(contract, "increment", {});
  t.deepEqual(await contract.view("getCounter"), 4);
})

