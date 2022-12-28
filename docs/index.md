# NEAR Smart Contract SDK for Grain

This project allows you to author smart contracts on the NEAR blockchain using the Grain programming language.

## SDK documentation

View the individual pages for each SDK library:

- [Context](./near/context)
- [Economics](./near/economics)
- [Math](./near/math)
- [Promise](./near/promise)
- [Register](./near/register)
- [Storage](./near/storage)
- [Utils](./near/utils)
- [Validator](./near/validator)
- [Wasi](./near/wasi)

## Prerequsites

You'll need a v0.5.x version of the Grain compiler on your machine and general knowledge of the language. For more information about the language and how to install it, visit [grain-lang.org](https://grain-lang.org).

## Setting up your project

Create a directory for your project. For this example, we'll call it `example-contract`.

```sh
mkdir example-contract && cd example-contract
git init
```

Next, add `near-sdk-gr` to your project.

```sh
git submodule add https://github.com/grain-lang/near-sdk-gr.git
```

## Writing your first contract

We'll create a simple counter. Create a file called `counter.gr` with the following contents:

```grain
import Option from "option"
import Storage from "near/storage"

let key = "counter"

export let setCounter = val => {
  // Write the value to memory.
  Storage.setInt32(key, val)
}

export let loadCounter = () => {
  // Check if key is in storage
  if (!(Storage.hasKey(key))) {
    // Initialize to zero.
    setCounter(0l)
  }

  Option.expect("key should be set", Storage.getInt32(key))
}
```

`Option` is Grain's standard library for working with the `Option` type and `Storage` is the SDK for working with storage on the blockchain.

`key` is the name we'll use for the key-value pair in storage—in our case, it's called `"counter"`.

The `setCounter` function stores a counter value and `loadCounter` retrieves a counter value.

Next, we'll create the core of our contract in a file called `index.gr`:

```grain
import { add as (+), sub as (-) } from "int32"
import Utils from "near/utils"
import { setCounter, loadCounter } from "./counter"

export let increment = () => {
  setCounter(loadCounter() + 1l)
}

export let decrement = () => {
  setCounter(loadCounter() - 1l)
}

export let getCounter = () => {
  let value = toString(loadCounter())
  Utils.valueReturnString(value)
}
```

This is the interface of our contract. Our contract has two methods to change the contract state, `increment` and `decrement`, and one method to view the state of the contract, `getCounter`.
`getCounter` utilizes `Utils.valueReturnString` to return the counter value as a string back to the caller.

## Compiling the contract

There are a number of flags we'll need to pass to the compiler.

- `-I near-sdk-gr` to tell the compiler where the SDK is;
- `--wasi-polyfill near-sdk-gr/near/wasi.gr` to stub out WASI functionality;
- `--no-bulk-memory` to disable bulk memory operations until NEAR supports them;
- `--use-start-section` to ensure the NEAR blockchain loads all contract setup;
- `--no-gc` to save on gas and storage fees;
- `--elide-type-info` to save a bit more on storage fees;
- `--release` to ensure we have the smallest and most efficient contract to deploy

All together, that's

```sh
grain compile -I near-sdk-gr --wasi-polyfill near-sdk-gr/near/wasi.gr --no-bulk-memory --use-start-section --no-gc --elide-type-info --release index.gr
```

This can be made into a script to make compiling the contract easier.

## Testing the contract

Contracts can be tested before deploying them using `near-workspaces`. For an example, see [the counter contract tests](https://github.com/grain-lang/near-sdk-gr/blob/4eaeeb90a91e700a7a64fd83cad97946e19d99d3/test-suite/example-contracts/counter/tests/counter.test.js).

## Configuring VSCode

If you use VSCode to develop your contract, you can tell the language server where the NEAR SDK is by setting the `grain.cliFlags` setting to include `-I near-sdk-gr`.
