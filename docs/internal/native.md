### Native.**readRegister**

```grain
readRegister : (WasmI64, WasmI64) -> Void
```

### Native.**registerLen**

```grain
registerLen : WasmI64 -> WasmI64
```

### Native.**writeRegister**

```grain
writeRegister : (WasmI64, WasmI64, WasmI64) -> Void
```

### Native.**currentAccountId**

```grain
currentAccountId : WasmI64 -> Void
```

### Native.**signerAccountId**

```grain
signerAccountId : WasmI64 -> Void
```

### Native.**signerAccountPk**

```grain
signerAccountPk : WasmI64 -> Void
```

### Native.**predecessorAccountId**

```grain
predecessorAccountId : WasmI64 -> Void
```

### Native.**blockIndex**

```grain
blockIndex : () -> WasmI64
```

### Native.**blockTimestamp**

```grain
blockTimestamp : () -> WasmI64
```

### Native.**epochHeight**

```grain
epochHeight : () -> WasmI64
```

### Native.**storageUsage**

```grain
storageUsage : () -> WasmI64
```

### Native.**accountBalance**

```grain
accountBalance : WasmI64 -> Void
```

### Native.**accountLockedBalance**

```grain
accountLockedBalance : WasmI64 -> Void
```

### Native.**attachedDeposit**

```grain
attachedDeposit : WasmI64 -> Void
```

### Native.**prepaidGas**

```grain
prepaidGas : () -> WasmI64
```

### Native.**usedGas**

```grain
usedGas : () -> WasmI64
```

### Native.**randomSeed**

```grain
randomSeed : WasmI64 -> Void
```

### Native.**sha256**

```grain
sha256 : (WasmI64, WasmI64, WasmI64) -> Void
```

### Native.**keccak256**

```grain
keccak256 : (WasmI64, WasmI64, WasmI64) -> Void
```

### Native.**keccak512**

```grain
keccak512 : (WasmI64, WasmI64, WasmI64) -> Void
```

### Native.**ripemd160**

```grain
ripemd160 : (WasmI64, WasmI64, WasmI64) -> Void
```

### Native.**ecrecover**

```grain
ecrecover :
  (WasmI64, WasmI64, WasmI64, WasmI64, WasmI64, WasmI64, WasmI64) -> WasmI64
```

### Native.**valueReturn**

```grain
valueReturn : (WasmI64, WasmI64) -> Void
```

### Native.**panic**

```grain
panic : () -> Void
```

### Native.**panicUtf8**

```grain
panicUtf8 : (WasmI64, WasmI64) -> Void
```

### Native.**logUtf8**

```grain
logUtf8 : (WasmI64, WasmI64) -> Void
```

### Native.**logUtf16**

```grain
logUtf16 : (WasmI64, WasmI64) -> Void
```

### Native.**promiseCreate**

```grain
promiseCreate :
  (WasmI64, WasmI64, WasmI64, WasmI64, WasmI64, WasmI64, WasmI64, WasmI64) ->
   WasmI64
```

### Native.**promiseThen**

```grain
promiseThen :
  (WasmI64, WasmI64, WasmI64, WasmI64, WasmI64, WasmI64, WasmI64, WasmI64,
   WasmI64) -> WasmI64
```

### Native.**promiseAnd**

```grain
promiseAnd : (WasmI64, WasmI64) -> WasmI64
```

### Native.**promiseBatchCreate**

```grain
promiseBatchCreate : (WasmI64, WasmI64) -> WasmI64
```

### Native.**promiseBatchThen**

```grain
promiseBatchThen : (WasmI64, WasmI64, WasmI64) -> WasmI64
```

### Native.**promiseBatchActionCreateAccount**

```grain
promiseBatchActionCreateAccount : WasmI64 -> Void
```

### Native.**promiseBatchActionDeployContract**

```grain
promiseBatchActionDeployContract : (WasmI64, WasmI64, WasmI64) -> Void
```

### Native.**promiseBatchActionFunctionCall**

```grain
promiseBatchActionFunctionCall :
  (WasmI64, WasmI64, WasmI64, WasmI64, WasmI64, WasmI64, WasmI64) -> Void
```

### Native.**promiseBatchActionTransfer**

```grain
promiseBatchActionTransfer : (WasmI64, WasmI64) -> Void
```

### Native.**promiseBatchActionStake**

```grain
promiseBatchActionStake : (WasmI64, WasmI64, WasmI64, WasmI64) -> Void
```

### Native.**promiseBatchActionAddKeyWithFullAccess**

```grain
promiseBatchActionAddKeyWithFullAccess :
  (WasmI64, WasmI64, WasmI64, WasmI64) -> Void
```

### Native.**promiseBatchActionAddKeyWithFunctionCall**

```grain
promiseBatchActionAddKeyWithFunctionCall :
  (WasmI64, WasmI64, WasmI64, WasmI64, WasmI64, WasmI64, WasmI64, WasmI64,
   WasmI64) -> Void
```

### Native.**promiseBatchActionDeleteKey**

```grain
promiseBatchActionDeleteKey : (WasmI64, WasmI64, WasmI64) -> Void
```

### Native.**promiseBatchActionDeleteAccount**

```grain
promiseBatchActionDeleteAccount : (WasmI64, WasmI64, WasmI64) -> Void
```

### Native.**promiseResultsCount**

```grain
promiseResultsCount : () -> WasmI64
```

### Native.**promiseResult**

```grain
promiseResult : (WasmI64, WasmI64) -> WasmI64
```

### Native.**promiseReturn**

```grain
promiseReturn : WasmI64 -> Void
```

### Native.**storageWrite**

```grain
storageWrite : (WasmI64, WasmI64, WasmI64, WasmI64, WasmI64) -> WasmI64
```

### Native.**storageRead**

```grain
storageRead : (WasmI64, WasmI64, WasmI64) -> WasmI64
```

### Native.**storageRemove**

```grain
storageRemove : (WasmI64, WasmI64, WasmI64) -> WasmI64
```

### Native.**storageHasKey**

```grain
storageHasKey : (WasmI64, WasmI64) -> WasmI64
```

### Native.**storageIterPrefix**

```grain
storageIterPrefix : (WasmI64, WasmI64) -> WasmI64
```

### Native.**storageIterRange**

```grain
storageIterRange : (WasmI64, WasmI64, WasmI64, WasmI64) -> WasmI64
```

### Native.**storageIterNext**

```grain
storageIterNext : (WasmI64, WasmI64, WasmI64) -> WasmI64
```

### Native.**gas**

```grain
gas : WasmI32 -> Void
```

### Native.**validatorStake**

```grain
validatorStake : (WasmI64, WasmI64, WasmI64) -> Void
```

### Native.**validatorTotalStake**

```grain
validatorTotalStake : WasmI64 -> Void
```

