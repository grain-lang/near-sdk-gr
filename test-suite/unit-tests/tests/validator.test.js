const anyTest = require("ava");
const { NEAR } = require("near-workspaces");
const { setupWorker, teardownWorker } = require("./testUtils");

const test = anyTest;

test.beforeEach(async t => {
  const {worker, root, contract} = await setupWorker(t, "validatorTests.gr.wasm");
  t.context.worker = worker;
  t.context.accounts = {root, contract};
})

test.afterEach(teardownWorker)

test("stake", async t => {
  const {root, contract} = t.context.accounts
  const res = await root.call(contract, "doStake", contract.accountId)
  t.deepEqual(res, (await t.context.worker.provider.accountBalance(contract.accountId)).staked.toNumber())
})

test("totalStake", async t => {
  const {root, contract} = t.context.accounts
  const res = await root.call(contract, "doTotalStake", {})
  const validators = (await t.context.worker.provider.validators()).current_validators
  let totalStake = validators.slice(1).reduce((prev, cur) => NEAR.parse(cur.stake).add(prev), NEAR.parse(validators[0].stake))
  t.deepEqual(NEAR.parse(res), totalStake)
})

