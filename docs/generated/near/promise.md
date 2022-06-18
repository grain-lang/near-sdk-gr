## Batched Actions

For more information, see https://github.com/nearprotocol/NEPs/pull/8/files#diff-15b6752ec7d78e7b85b8c7de4a19cbd4R48

### Promise.**batchActionCreateAccount**

```grain
batchActionCreateAccount : Promise -> Void
```

Appends a `CreateAccount` action to the batch of actions for the given promise.

- Creates an account with `id` == `receiverId`
- Sets Account `storage_usage` to `account_cost` (genesis config)

https://nomicon.io/RuntimeSpec/Actions.html#createaccountaction

Parameters:

|param|type|description|
|-----|----|-----------|
|`promise`|`Promise`|The promise to append the action to|

### Promise.**batchActionDeployContract**

```grain
batchActionDeployContract : (Promise, Bytes) -> Void
```

Appends a `DeployContract` action to the batch of actions for the given promise.

Sets the contract code for the account.

https://nomicon.io/RuntimeSpec/Actions.html#deploycontractaction

Parameters:

|param|type|description|
|-----|----|-----------|
|`promise`|`Promise`|The promise to append the action to|
|`code`|`Bytes`|The contract to deploy|

### Promise.**batchActionFunctionCall**

```grain
batchActionFunctionCall :
  (Promise, String, Bytes, Int128.Int128, Int64) -> Void
```

Appends a `FunctionCall` action to the batch of actions for the given promise.

https://nomicon.io/RuntimeSpec/Actions.html#functioncallaction

Parameters:

|param|type|description|
|-----|----|-----------|
|`promise`|`Promise`|The promise to append the action to|
|`methodName`|`String`|The name of the method to call|
|`arguments`|`Bytes`|The arguments for the function call|
|`amount`|`Int128.Int128`|The amount to attach to the function call (a 128-bit integer)|
|`gas`|`Int64`|The amount of gas to attach to the function call|

### Promise.**batchActionTransfer**

```grain
batchActionTransfer : (Promise, Int128.Int128) -> Void
```

Appends a `Transfer` action to the batch of actions for the given promise.

This will transfer the amount specified in `amount` from `predecessorId` to a `receiverId` account.

https://nomicon.io/RuntimeSpec/Actions.html#transferaction

Parameters:

|param|type|description|
|-----|----|-----------|
|`promise`|`Promise`|The promise to append the action to|
|`amount`|`Int128.Int128`|The amount to transfer (a 128-bit integer)|

### Promise.**batchActionStake**

```grain
batchActionStake : (Promise, Int128.Int128, Bytes) -> Void
```

Appends a `Stake` action to the batch of actions for the given promise.

A validator proposal that contains the staking public key and the staking
amount will be generated and will be included in the next block.

https://nomicon.io/RuntimeSpec/Actions.html#stakeaction

Parameters:

|param|type|description|
|-----|----|-----------|
|`promise`|`Promise`|The promise to append the action to|
|`amount`|`Int128.Int128`|The amount of tokens to stake (a 128-bit integer)|
|`publicKey`|`Bytes`|A public key of the validator node|

### Promise.**FunctionCallPermission**

```grain
record FunctionCallPermission {
  allowance: Option<Int128.Int128>,
  receiverId: String,
  methodNames: Array<String>,
}
```

Permission structure which allows FunctionCalls to a specified receiverId.

Source: https://nomicon.io/DataStructures/AccessKey.html#accesskeypermissionfunctioncall

This record has the following fields:
- `allowance`: The balance limit (a 128-bit integer) to use by this access key to pay for function call gas and
  transaction fees. When this access key is used, both account balance and the allowance is
  decreased by the same value. `None` means unlimited allowance.
  NOTE: To change or increase the allowance, the old access key needs to be deleted and a new
  access key should be created.
- `receiverId`: The access key only allows transactions with the given receiver's account id.
- A list of method names that can be used. The access key only allows transactions with the
  function call of one of the given method names. Empty list means any method name can be used.

### Promise.**AccessKeyPermission**

```grain
enum AccessKeyPermission {
  FullAccess,
  FunctionCallAccess(FunctionCallPermission),
}
```

Types of permissions which can be associated with an AccessKey.

Source: https://nomicon.io/DataStructures/AccessKey.html#access-keys

### Promise.**AccessKey**

```grain
record AccessKey {
  nonce: Bytes,
  permission: AccessKeyPermission,
}
```

An access key which provides an access for a particular account.

Source: https://nomicon.io/DataStructures/AccessKey.html#access-keys

This record has the following fields:
- `nonce`: The nonce for this access key. NOTE: In some cases the access key needs to be recreated. If the new access key reuses the
  same public key, the nonce of the new access key should be equal to the nonce of the old
  access key. It's required to avoid replaying old transactions again.
- `permission`: Defines the permissions for this access key

### Promise.**batchActionAddKey**

```grain
batchActionAddKey : (Promise, Bytes, AccessKey) -> Void
```

Appends a `AddKey` action to the batch of actions for the given promise.

Adds a new `AccessKey` to the receiver's account and associates it with a `publicKey` provided.

https://nomicon.io/RuntimeSpec/Actions.html#addkeyaction

Parameters:

|param|type|description|
|-----|----|-----------|
|`promise`|`Promise`|The promise to append the action to|
|`publicKey`|`Bytes`|A public key to associate the access key with|
|`accessKey`|`AccessKey`|The access key to add|

### Promise.**batchActionDeleteKey**

```grain
batchActionDeleteKey : (Promise, Bytes) -> Void
```

Appends a `DeleteKey` action to the batch of actions for the given promise.

Deletes the `AccessKey` from the receiver's account associed with the `publicKey` provided.

https://nomicon.io/RuntimeSpec/Actions.html#deletekeyaction

Parameters:

|param|type|description|
|-----|----|-----------|
|`promise`|`Promise`|The promise to append the action to|
|`publicKey`|`Bytes`|A public key to delete the associated access key from|

### Promise.**batchActionDeleteAccount**

```grain
batchActionDeleteAccount : (Promise, String) -> Void
```

Appends a `DeleteAccount` action to the batch of actions for the given promise.

The account, as well as all the data stored under the account, is deleted
and the tokens are transferred to beneficiaryId.

https://nomicon.io/RuntimeSpec/Actions.html#deleteaccountaction

Parameters:

|param|type|description|
|-----|----|-----------|
|`promise`|`Promise`|The promise to append the action to|
|`publicKey`|`String`|The account ID to transfer the remaining balance to|

## Promise Results

Results

### Promise.**resultsCount**

```grain
resultsCount : () -> Int64
```

If the current execution is invoked by a callback we can access the execution results of the
promises that caused the callback. This function returns the number of complete and
incomplete callbacks.

Note, there will only be incomplete callbacks once there is an `or` combinator.

- If there is only one callback returns `1`;
- If there are multiple callbacks (e.g. created through `promise_and`) returns their number;
- If the function was called not through the callback returns `0`.

### Promise.**checkResult**

```grain
checkResult : Int64 -> Option<Bool>
```

If the current function is invoked by a callback we can access the execution results of the
promises that caused the callback. This function returns the result in blob format and
places it into register 0.

- If promise result is complete and successful copies its blob into register 0;
- If promise result is complete and failed or incomplete keeps register 0 unused;

Parameters:

|param|type|description|
|-----|----|-----------|
|`resultIdx`|`Int64`|The callback whose result to load|

Returns:

|type|description|
|----|-----------|
|`Option<Bool>`|`None` if the promise has not completed, or `Some(flag)` if it has (where `flag` is `true` if the promise succeeded)|

### Promise.**getResultBytes**

```grain
getResultBytes : Int64 -> Option<Result<Bytes, String>>
```

If the current function is invoked by a callback we can access the execution results of the
promises that caused the callback. This function returns the result as a byte sequence.
If the promise result is complete and successful, register 0 will be overwritten.

- If promise result is complete and successful copies its blob into the register;
- If promise result is complete and failed or incomplete keeps register unused;

Parameters:

|param|type|description|
|-----|----|-----------|
|`resultIdx`|`Int64`|The callback whose result to load|

Returns:

|type|description|
|----|-----------|
|`Option<Result<Bytes, String>>`|`None` if the promise has not completed, or `Some(Ok(result))` if it has successfully, or `Some(Err(msg))` if it has failed|

### Promise.**getResultString**

```grain
getResultString : Int64 -> Option<Result<String, String>>
```

If the current function is invoked by a callback we can access the execution results of the
promises that caused the callback. This function returns the result as a string.
If the promise result is complete and successful, register 0 will be overwritten.

- If promise result is complete and successful copies its blob into the register;
- If promise result is complete and failed or incomplete keeps register unused;

Parameters:

|param|type|description|
|-----|----|-----------|
|`resultIdx`|`Int64`|The callback whose result to load|

Returns:

|type|description|
|----|-----------|
|`Option<Result<String, String>>`|`None` if the promise has not completed, or `Some(Ok(result))` if it has successfully, or `Some(Err(msg))` if it has failed|

### Promise.**getResultInt32**

```grain
getResultInt32 : Int64 -> Option<Result<Int32, String>>
```

If the current function is invoked by a callback we can access the execution results of the
promises that caused the callback. This function returns the result as a 32-bit integer.
If the promise result is complete and successful, register 0 will be overwritten.

- If promise result is complete and successful copies its blob into the register;
- If promise result is complete and failed or incomplete keeps register unused;

Parameters:

|param|type|description|
|-----|----|-----------|
|`resultIdx`|`Int64`|The callback whose result to load|

Returns:

|type|description|
|----|-----------|
|`Option<Result<Int32, String>>`|`None` if the promise has not completed, or `Some(Ok(result))` if it has successfully, or `Some(Err(msg))` if it has failed|

### Promise.**getResultInt64**

```grain
getResultInt64 : Int64 -> Option<Result<Int64, String>>
```

If the current function is invoked by a callback we can access the execution results of the
promises that caused the callback. This function returns the result as a 64-bit integer.
If the promise result is complete and successful, register 0 will be overwritten.

- If promise result is complete and successful copies its blob into the register;
- If promise result is complete and failed or incomplete keeps register unused;

Parameters:

|param|type|description|
|-----|----|-----------|
|`resultIdx`|`Int64`|The callback whose result to load|

Returns:

|type|description|
|----|-----------|
|`Option<Result<Int64, String>>`|`None` if the promise has not completed, or `Some(Ok(result))` if it has successfully, or `Some(Err(msg))` if it has failed|

### Promise.**getResultInt128**

```grain
getResultInt128 : Int64 -> Option<Result<Int128.Int128, String>>
```

If the current function is invoked by a callback we can access the execution results of the
promises that caused the callback. This function returns the result as a 128-bit integer.
If the promise result is complete and successful, register 0 will be overwritten.

- If promise result is complete and successful copies its blob into the register;
- If promise result is complete and failed or incomplete keeps register unused;

Parameters:

|param|type|description|
|-----|----|-----------|
|`resultIdx`|`Int64`|The callback whose result to load|

Returns:

|type|description|
|----|-----------|
|`Option<Result<Int128.Int128, String>>`|`None` if the promise has not completed, or `Some(Ok(result))` if it has successfully, or `Some(Err(msg))` if it has failed|

### Promise.**getResultInt256**

```grain
getResultInt256 : Int64 -> Option<Result<Int256.Int256, String>>
```

If the current function is invoked by a callback we can access the execution results of the
promises that caused the callback. This function returns the result as a 256-bit integer.
If the promise result is complete and successful, register 0 will be overwritten.

- If promise result is complete and successful copies its blob into the register;
- If promise result is complete and failed or incomplete keeps register unused;

Parameters:

|param|type|description|
|-----|----|-----------|
|`resultIdx`|`Int64`|The callback whose result to load|

Returns:

|type|description|
|----|-----------|
|`Option<Result<Int256.Int256, String>>`|`None` if the promise has not completed, or `Some(Ok(result))` if it has successfully, or `Some(Err(msg))` if it has failed|

