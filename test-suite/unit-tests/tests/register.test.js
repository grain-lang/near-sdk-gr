const anyTest = require("ava");
const { setupWorker, teardownWorker } = require("./testUtils");

const test = anyTest;

test.beforeEach(async t => {
  const {worker, root, contract} = await setupWorker(t, "registerTests.gr.wasm");
  t.context.worker = worker;
  t.context.accounts = {root, contract};
})

test.afterEach(teardownWorker)

test("readString", async t => {
  const {root, contract} = t.context.accounts
  const res = await root.call(contract, "doReadString", {})
  t.deepEqual(res, "foo bar")
})

test("readBytes", async t => {
  const {root, contract} = t.context.accounts
  const res = await root.call(contract, "doReadBytes", {})
  t.deepEqual(res, "foo bar")
})

test("readInt32", async t => {
  const {root, contract} = t.context.accounts
  const res = await root.call(contract, "doReadInt32", {})
  t.deepEqual(res, 643255235)
})

test("readInt64", async t => {
  const {root, contract} = t.context.accounts
  const res = await root.call(contract, "doReadInt64", {})
  t.deepEqual(res, 6325235235143255235)
})

test("readInt128", async t => {
  const {root, contract} = t.context.accounts
  const res = await root.call(contract, "doReadInt128", {})
  t.deepEqual(res, 6325235235143255235423958942589134194)
})

test("readInt256", async t => {
  const {root, contract} = t.context.accounts
  const res = await root.call(contract, "doReadInt256", {})
  t.deepEqual(res, 632523523514325523542395894258913419489213)
})
