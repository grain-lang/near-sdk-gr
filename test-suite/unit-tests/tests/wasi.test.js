const anyTest = require("ava");
const { setupWorker, teardownWorker } = require("./testUtils");

const test = anyTest;

test.beforeEach(async t => {
  const {worker, root, contract} = await setupWorker(t, "wasiTests.gr.wasm");
  t.context.worker = worker;
  t.context.accounts = {root, contract};
})

test.afterEach(teardownWorker)

test("random", async t => {
  const {contract} = t.context.accounts
  // we can't set the seed, so we just check that the results are different.
  // also, since the PRNG state is reset for each `view` invocation, we
  // return two numbers (from two calls to `Random.random()`)
  const rands = await contract.view("getRandom")
  const [rand1, rand2] = rands.split(" ")
  t.notDeepEqual(rand1, rand2)
})
