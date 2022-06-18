### Economics.**accountBalance**

```grain
accountBalance : () -> Int128.Int128
```

The current balance of the given account. This includes the attached_deposit that was
attached to the transaction.

Returns:

|type|description|
|----|-----------|
|`Int128.Int128`|The current account balance (a 128-bit integer)|

Examples:

```grain
Economics.accountBalance()
```

### Economics.**accountLockedBalance**

```grain
accountLockedBalance : () -> Int128.Int128
```

The current amount of tokens locked due to staking.

Returns:

|type|description|
|----|-----------|
|`Int128.Int128`|The currently staked account balance (a 128-bit integer)|

Examples:

```grain
Economics.accountLockedBalance()
```

### Economics.**attachedDeposit**

```grain
attachedDeposit : () -> Int128.Int128
```

The balance that was attached to the call that will be immediately deposited before the
contract execution starts.

Returns:

|type|description|
|----|-----------|
|`Int128.Int128`|The attached deposit (a 128-bit integer)|

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

