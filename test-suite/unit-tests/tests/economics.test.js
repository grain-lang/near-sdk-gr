const anyTest = require("ava");
const { setupWorker, teardownWorker } = require("./testUtils");

const test = anyTest;

test.beforeEach(async t => {
  const {worker, root, contract} = await setupWorker(t, "economicsTests.gr.wasm");
  t.context.worker = worker;
  t.context.accounts = {root, contract};
})

test.afterEach(teardownWorker)

test("accountBalance", async t => {
  const {root, contract} = t.context.accounts
  const res = await root.call(contract, "doAccountBalance", {})
  t.deepEqual(res, Number.parseInt(contract.manager.config.initialBalance))
})

test("accountLockedBalance", async t => {
  const {root, contract} = t.context.accounts
  const res = await root.call(contract, "doAccountLockedBalance", {})
  t.deepEqual(res, 0)
})


test("attachedDeposit", async t => {
  const {root, contract} = t.context.accounts
  const res = await root.call(contract, "doAttachedDeposit", {})
  t.deepEqual(res, 0)
})

test("prepaidGas", async t => {
  const {root, contract} = t.context.accounts
  const res = await root.call(contract, "doPrepaidGas", {})
  t.deepEqual(res, 30000000000000)
})

test("usedGas", async t => {
  const {root, contract} = t.context.accounts
  const res = await root.call(contract, "doUsedGas", {})
  t.deepEqual(res, 232964313567)
})
