const fs = require('fs');
const path = require("path");
const { Worker } = require("near-workspaces");

module.exports.setupWorker = async (t, contractName, options) => {
  const worker = await Worker.init({network: 'sandbox'});
  const root = worker.rootAccount;
  const contract = await root.createAndDeploy(
    "grain-near-test-contract",
    path.join(__dirname, "..", "contracts", contractName),
    options,
  );
  return {worker, root, contract}
}

module.exports.teardownWorker = async t => {
  // Stop Sandbox server
  await t.context.worker.tearDown().catch(error => {
    console.log('Failed to tear down the worker:', error);
  });
  if (t.passed) {
    fs.rmSync(t.context.worker.server.config.homeDir, {recursive: true})
  } else {
    console.log(`Not deleting ${t.context.worker.server.config.homeDir}`)
  }
}

module.exports.resultToUInt8Array = res => {
  const buf = Buffer.from(res.status.SuccessValue, 'base64')
  // [TODO] determine if this is because of a bug in our readRegister or just the semantics of signerPublicKey
  return Uint8Array.of(...buf.toJSON()["data"].slice(1))
}
