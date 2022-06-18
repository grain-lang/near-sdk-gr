const path = require("path");
const { Worker } = require("near-workspaces");

module.exports.setupWorker = async (t, contractName) => {
  const worker = await Worker.init({network: 'sandbox'});
  const root = worker.rootAccount;
  const contract = await root.createAndDeploy(
    "grain-near-test-contract",
    path.join(__dirname, "..", "contracts", contractName),
  );
  return {worker, root, contract}
}

module.exports.teardownWorker = async t => {
  // Stop Sandbox server
  await t.context.worker.tearDown().catch(error => {
    console.log('Failed to tear down the worker:', error);
  });
}
