const anyTest = require("ava");
const { setupWorker, teardownWorker } = require("./testUtils");

const test = anyTest;

test.beforeEach(async t => {
  const {worker, root, contract} = await setupWorker(t, "storageTests.gr.wasm");
  t.context.worker = worker;
  t.context.accounts = {root, contract};
})

test.afterEach(teardownWorker)

test("hasKey", async t => {
  const {root, contract} = t.context.accounts
  const res = await root.call(contract, "doHasKey", {})
  t.deepEqual(res, [false, true])
})

test("getString", async t => {
  const {root, contract} = t.context.accounts
  const res = await root.call(contract, "doGetString", {})
  t.deepEqual(res, "Some(\"value\")")
})

test("getBytes", async t => {
  const {root, contract} = t.context.accounts
  const res = await root.call(contract, "doGetBytes", {})
  t.deepEqual(res, "Some(<bytes: 76 61 6c 75 65 >)")
})

test("getInt32", async t => {
  const {root, contract} = t.context.accounts
  const res = await root.call(contract, "doGetInt32", {})
  t.deepEqual(res, "Some(5)")
})

test("getInt64", async t => {
  const {root, contract} = t.context.accounts
  const res = await root.call(contract, "doGetInt64", {})
  t.deepEqual(res, "Some(5)")
})

test("getInt128", async t => {
  const {root, contract} = t.context.accounts
  const res = await root.call(contract, "doGetInt128", {})
  t.deepEqual(res, "Some(6325235235143255235423958942589134194)")
})

test("getInt256", async t => {
  const {root, contract} = t.context.accounts
  const res = await root.call(contract, "doGetInt256", {})
  t.deepEqual(res, "Some(632523523514325523542395894258913419489213)")
})


test("replaceString", async t => {
  const {root, contract} = t.context.accounts
  const res = await root.call(contract, "doReplaceString", {})
  t.deepEqual(res, "Some(\"othervalue\")")
})

test("replaceBytes", async t => {
  const {root, contract} = t.context.accounts
  const res = await root.call(contract, "doReplaceBytes", {})
  t.deepEqual(res, "Some(<bytes: 6f 74 68 65 72 76 61 6c 75 65 >)")
})

test("replaceInt32", async t => {
  const {root, contract} = t.context.accounts
  const res = await root.call(contract, "doReplaceInt32", {})
  t.deepEqual(res, "Some(27)")
})

test("replaceInt64", async t => {
  const {root, contract} = t.context.accounts
  const res = await root.call(contract, "doReplaceInt64", {})
  t.deepEqual(res, "Some(27)")
})

test("replaceInt128", async t => {
  const {root, contract} = t.context.accounts
  const res = await root.call(contract, "doReplaceInt128", {})
  t.deepEqual(res, "Some(632523523514325523542395894258913)")
})

test("replaceInt256", async t => {
  const {root, contract} = t.context.accounts
  const res = await root.call(contract, "doReplaceInt256", {})
  t.deepEqual(res, "Some(63252352351432552354239589425891341948921332)")
})


test("popString", async t => {
  const {root, contract} = t.context.accounts
  const res = await root.call(contract, "doPopString", {})
  t.deepEqual(res, "[Some(\"value\"), None]")
})

test("popBytes", async t => {
  const {root, contract} = t.context.accounts
  const res = await root.call(contract, "doPopBytes", {})
  t.deepEqual(res, "[Some(<bytes: 76 61 6c 75 65 >), None]")
})

test("popInt32", async t => {
  const {root, contract} = t.context.accounts
  const res = await root.call(contract, "doPopInt32", {})
  t.deepEqual(res, "[Some(5), None]")
})

test("popInt64", async t => {
  const {root, contract} = t.context.accounts
  const res = await root.call(contract, "doPopInt64", {})
  t.deepEqual(res, "[Some(5), None]")
})

test("popInt128", async t => {
  const {root, contract} = t.context.accounts
  const res = await root.call(contract, "doPopInt128", {})
  t.deepEqual(res, "[Some(6325235235143255235423958942589134194), None]")
})

test("popInt256", async t => {
  const {root, contract} = t.context.accounts
  const res = await root.call(contract, "doPopInt256", {})
  t.deepEqual(res, "[Some(632523523514325523542395894258913419489213), None]")
})

test("remove", async t => {
  const {root, contract} = t.context.accounts
  const res = await root.call(contract, "doRemove", {})
  t.deepEqual(res, [true, false])
})

