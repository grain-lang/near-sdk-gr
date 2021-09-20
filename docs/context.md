### Context.**currentAccountId**

```grain
currentAccountId : () -> AccountId.AccountId
```

Gets the account ID of the current contract that we are executing.
This function will overwrite the contents of register 0.

Returns:

|type|description|
|----|-----------|
|`AccountId.AccountId`|The account ID|

Examples:

```grain
Context.currentAccountId()
```

### Context.**signerAccountId**

```grain
signerAccountId : () -> AccountId.AccountId
```

All contract calls are a result of some transaction that was signed by some account using
some access key and submitted into a memory pool (either through the wallet using RPC or by
a node itself). This function returns the ID of that account.
This function will overwrite the contents of register 0.

Returns:

|type|description|
|----|-----------|
|`AccountId.AccountId`|The account ID|

Examples:

```grain
Context.signerAccountId()
```

### Context.**signerAccountPublicKey**

```grain
signerAccountPublicKey : () -> Bytes
```

Saves the public key of the access key that was used by the signer into the register. In
rare situations smart contract might want to know the exact access key that was used to send
the original transaction, e.g. to increase the allowance or manipulate with the public key.
This function will overwrite the contents of register 0.

Returns:

|type|description|
|----|-----------|
|`Bytes`|The account public key|

Examples:

```grain
Context.signerAccountPublicKey()
```

### Context.**predecessorAccountId**

```grain
predecessorAccountId : () -> AccountId.AccountId
```

All contract calls are a result of a receipt, this receipt might be created by a transaction
that does function invocation on the contract or another contract as a result of
cross-contract call.
This function will overwrite the contents of register 0.

Returns:

|type|description|
|----|-----------|
|`AccountId.AccountId`|The account ID|

Examples:

```grain
Context.predecessorAccountId()
```

### Context.**blockHeight**

```grain
blockHeight : () -> Int64
```

Returns the current block height.

Returns:

|type|description|
|----|-----------|
|`Int64`|The current block height|

Examples:

```grain
Context.blockHeight()
```

### Context.**blockTimestamp**

```grain
blockTimestamp : () -> Int64
```

Returns the current block timestamp (number of
non-leap-nanoseconds since January 1, 1970 0:00:00 UTC).

Returns:

|type|description|
|----|-----------|
|`Int64`|The current block timestamp|

Examples:

```grain
Context.blockTimestamp()
```

### Context.**epochHeight**

```grain
epochHeight : () -> Int64
```

Returns the current epoch height.

Returns:

|type|description|
|----|-----------|
|`Int64`|The current epoch height|

Examples:

```grain
Context.epochHeight()
```

### Context.**storageUsage**

```grain
storageUsage : () -> Int64
```

Returns the number of bytes used by the contract if it was saved to the trie as of the
invocation. This includes:
- The data written with storage* functions during current and previous execution
- The bytes needed to store the access keys of the given account.
- The contract code size
- A small fixed overhead for account metadata.

Returns:

|type|description|
|----|-----------|
|`Int64`|The current storage usage|

Examples:

```grain
Context.storageUsage()
```

### Context.**inputBytes**

```grain
inputBytes : () -> Bytes
```

Reads the input to the contract call, formatted as a byte sequence.
This function overwrites the contents of register 0.

Returns:

|type|description|
|----|-----------|
|`Bytes`|The input to the contract|

Examples:

```grain
Context.inputBytes()
```

### Context.**inputString**

```grain
inputString : () -> Bytes
```

Reads the input to the contract call, formatted as a string.
This function overwrites the contents of register 0.

Returns:

|type|description|
|----|-----------|
|`Bytes`|The input to the contract|

Examples:

```grain
Context.inputString()
```

