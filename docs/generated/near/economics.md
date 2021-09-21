### Economics.**accountBalance**

```grain
accountBalance : () -> Bytes
```

The current balance of the given account. This includes the attached_deposit that was
attached to the transaction.

Returns:

|type|description|
|----|-----------|
|`Bytes`|The current account balance (a 128-bit integer)|

Examples:

```grain
Economics.accountBalance()
```

### Economics.**accountLockedBalance**

```grain
accountLockedBalance : () -> Bytes
```

The current amount of tokens locked due to staking.

Returns:

|type|description|
|----|-----------|
|`Bytes`|The currently staked account balance (a 128-bit integer)|

Examples:

```grain
Economics.accountLockedBalance()
```

### Economics.**attachedDeposit**

```grain
attachedDeposit : () -> Bytes
```

The balance that was attached to the call that will be immediately deposited before the
contract execution starts.

Returns:

|type|description|
|----|-----------|
|`Bytes`|The attached deposit (a 128-bit integer)|

Examples:

```grain
Economics.accountLockedBalance()
```

### Economics.**prepaidGas**

```grain
prepaidGas : () -> Int64
```

The amount of gas attached to the call that can be used to pay for the gas fees.

Returns:

|type|description|
|----|-----------|
|`Int64`|The prepaid gas|

Examples:

```grain
Economics.prepaidGas()
```

### Economics.**usedGas**

```grain
usedGas : () -> Int64
```

The gas that was already burnt during the contract execution (cannot exceed `prepaidGas`)

Returns:

|type|description|
|----|-----------|
|`Int64`|The used gas|

Examples:

```grain
Economics.usedGas()
```

