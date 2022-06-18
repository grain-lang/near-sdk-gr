const anyTest = require("ava");
const { setupWorker, teardownWorker } = require("./testUtils");

const test = anyTest;

test.beforeEach(async t => {
  const {worker, root, contract} = await setupWorker(t, "utilsTests.gr.wasm");
  t.context.worker = worker;
  t.context.accounts = {root, contract};
})

test.afterEach(teardownWorker)

test("log", async t => {
  const {root, contract} = t.context.accounts
  const res = await root.callRaw(contract, "doLog", {})
  t.true(res.logsContain("foo bar"));
})

test("returnString", async t => {
  const {root, contract} = t.context.accounts
  const res = await root.call(contract, "doReturnString", {});
  t.deepEqual(res, "foo");
})

test("returnBytes", async t => {
  const {root, contract} = t.context.accounts
  const res = await root.call(contract, "doReturnBytes", {});
  t.deepEqual(res, "foobar");
})

test("panic", async t => {
  const {root, contract} = t.context.accounts
  const res = await root.callRaw(contract, "doPanic", {});
  t.true(res.failed)
})

test("panicString", async t => {
  const {root, contract} = t.context.accounts
  const res = await root.callRaw(contract, "doPanicString", {});
  t.true(res.failed)
  t.deepEqual(res.result.status.Failure.ActionError.kind.FunctionCallError.ExecutionError, "Smart contract panicked: aaaaah")
})

