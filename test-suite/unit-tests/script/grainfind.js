#!/usr/bin/env node

const path = require("path");
const cp = require("child_process");
const which = require("which");

const grainBinaries = [
  "grain",
  "grain.cmd", // TODO: check this on windows
  "grain-mac-x64",
  "grain-linux-x64",
  "grain-win-x64.exe",
];

function findGrain() {
  for (const bin of grainBinaries) {
    try {
      const grain = which.sync(bin);
      // If it didn't throw, we found a grain binary
      return grain;
    } catch (err) {
      // Not found
    }
  }
  console.error("Unable to locate any Grain binary. Did you install it?");
  process.exit(1);
}

const grain = findGrain();
const NEAR_ARGS = [
  "--release",
  "--no-gc",
  "--wasi-polyfill",
  "../../wasi.gr",
  "-I",
  "../..",
  "--use-start-section",
  "--no-bulk-memory",
];
// `compile` has to go before the other arguments
const args = [process.argv[2]].concat(NEAR_ARGS.concat(process.argv.slice(3)));

// Make sure we run from test directory
process.chdir(path.join(__dirname, ".."));
const result = cp.spawnSync(grain, args, { stdio: "inherit" });
process.exit(result.status);
