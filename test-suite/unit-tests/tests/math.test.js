const anyTest = require("ava");
const { setupWorker, teardownWorker, resultToUInt8Array } = require("./testUtils");

const test = anyTest;

test.beforeEach(async t => {
  const {worker, root, contract} = await setupWorker(t, "mathTests.gr.wasm");
  t.context.worker = worker;
  t.context.accounts = {root, contract};
})

test.afterEach(teardownWorker)

// expected results generated offline from:
// https://emn178.github.io/online-tools/keccak_512.html
// and
// https://bfotool.com/ripemd160-hash-generator

test("hashBytesSHA256", async t => {
  const {root, contract} = t.context.accounts
  const res = await root.callRaw(contract, "doHashBytesSHA256", {})
  const checksum = Buffer.from(resultToUInt8Array(res.result)).toString('hex')
  t.deepEqual(checksum, "fbc1a9f858ea9e177916964bd88c3d37b91a1e84412765e29950777f265c4b75")
})

test("hashBytesKECCAK256", async t => {
  const {root, contract} = t.context.accounts
  const res = await root.callRaw(contract, "doHashBytesKECCAK256", {})
  const checksum = Buffer.from(resultToUInt8Array(res.result)).toString('hex')
  t.deepEqual(checksum, "737fe0cb366697912e27136f93dfb531c58bab1b09c40842d999110387c86b54")
})

test("hashBytesKECCAK512", async t => {
  const {root, contract} = t.context.accounts
  const res = await root.callRaw(contract, "doHashBytesKECCAK512", {})
  const checksum = Buffer.from(resultToUInt8Array(res.result)).toString('hex')
  t.deepEqual(checksum, "4da2a486c0aab413ce048556c5315d68d165cceb4ebb17b25c282757d38877482a59dd4ec0cc97991b73beef720b6bab902ce0f30c988a29af7e47599f168869")
})

test("hashBytesRIPEMD160", async t => {
  const {root, contract} = t.context.accounts
  const res = await root.callRaw(contract, "doHashBytesRIPEMD160", {})
  const checksum = Buffer.from(resultToUInt8Array(res.result)).toString('hex')
  t.deepEqual(checksum, "daba326b8e276af34297f879f6234bcef2528efa")
})

test("hashStringSHA256", async t => {
  const {root, contract} = t.context.accounts
  const res = await root.callRaw(contract, "doHashStringSHA256", {})
  const checksum = Buffer.from(resultToUInt8Array(res.result)).toString('hex')
  t.deepEqual(checksum, "fbc1a9f858ea9e177916964bd88c3d37b91a1e84412765e29950777f265c4b75")
})

test("hashStringKECCAK256", async t => {
  const {root, contract} = t.context.accounts
  const res = await root.callRaw(contract, "doHashStringKECCAK256", {})
  const checksum = Buffer.from(resultToUInt8Array(res.result)).toString('hex')
  t.deepEqual(checksum, "737fe0cb366697912e27136f93dfb531c58bab1b09c40842d999110387c86b54")
})

test("hashStringKECCAK512", async t => {
  const {root, contract} = t.context.accounts
  const res = await root.callRaw(contract, "doHashStringKECCAK512", {})
  const checksum = Buffer.from(resultToUInt8Array(res.result)).toString('hex')
  t.deepEqual(checksum, "4da2a486c0aab413ce048556c5315d68d165cceb4ebb17b25c282757d38877482a59dd4ec0cc97991b73beef720b6bab902ce0f30c988a29af7e47599f168869")
})

test("hashStringRIPEMD160", async t => {
  const {root, contract} = t.context.accounts
  const res = await root.callRaw(contract, "doHashStringRIPEMD160", {})
  const checksum = Buffer.from(resultToUInt8Array(res.result)).toString('hex')
  t.deepEqual(checksum, "daba326b8e276af34297f879f6234bcef2528efa")
})
