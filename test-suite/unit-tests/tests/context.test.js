const anyTest = require("ava");
const { setupWorker, teardownWorker, resultToUInt8Array } = require("./testUtils");

const test = anyTest;

test.beforeEach(async t => {
  const {worker, root, contract} = await setupWorker(t, "contextTests.gr.wasm");
  t.context.worker = worker;
  t.context.accounts = {root, contract};
})

test.afterEach(teardownWorker)

test("currentAccountId", async t => {
  const {root, contract} = t.context.accounts
  const res = await root.call(contract, "doCurrentAccountId", {})
  t.deepEqual(res, contract.accountId)
})

test("signerAccountId", async t => {
  const {root, contract} = t.context.accounts
  const res = await root.call(contract, "doSignerAccountId", {})
  t.deepEqual(res, root.accountId)
})

test("signerAccountPublicKey", async t => {
  const {root, contract} = t.context.accounts
  const res = await root.callRaw(contract, "doSignerAccountPublicKey", {})
  const pubkey = (await root.getKey()).getPublicKey().data
  // [TODO] determine if this slice is needed due to the semantics of signerPublicKey or if there's some type of bug
  const bufu8 = resultToUInt8Array(res.result).slice(1)
  t.deepEqual(bufu8, pubkey)
})

test("predecessorAccountId", async t => {
  const {root, contract} = t.context.accounts
  const res = await root.call(contract, "doPredecessorAccountId", {})
  t.deepEqual(res, root.accountId)
})

test("blockHeight", async t => {
  const {root, contract} = t.context.accounts
  const res = await root.callRaw(contract, "doBlockHeight", {})
  const block = await t.context.worker.provider.block({blockId: res.result.transaction_outcome.block_hash})
  const resParsed = res.parseResult()
  const expectedHeight = block.header.height + 1 // appears to be the correct semantics; TODO verify
  t.deepEqual(resParsed, expectedHeight)
})

test("blockTimestamp", async t => {
  const {root, contract} = t.context.accounts
  const ts = Date.now() * 1000000
  const res = await root.call(contract, "doBlockTimestamp", {})
  // Just test that it is something sensible (a timestamp after now)
  t.true(ts <= res)
})

test("epochHeight", async t => {
  const {root, contract} = t.context.accounts
  const res = await root.call(contract, "doEpochHeight", {})
  t.deepEqual(res, 1)
})

test("storageUsage", async t => {
  const {root, contract} = t.context.accounts
  const res = await root.call(contract, "doStorageUsage", {})
  const av = await contract.accountView()
  t.deepEqual(res, av.storage_usage)
})

test("inputBytes", async t => {
  const {root, contract} = t.context.accounts
  const res = await root.call(contract, "doInputBytes", {msg: "foobar input bytes"})
  t.deepEqual(res, {msg: "foobar input bytes"})
})

test("inputStringUnsafe", async t => {
  const {root, contract} = t.context.accounts
  const res = await root.call(contract, "doInputStringUnsafe", {msg: "foobar input"})
  t.deepEqual(res, {msg: "foobar input"})
})

