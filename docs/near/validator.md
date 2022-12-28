### Validator.**stake**

```grain
stake : String -> Int128.Int128
```

Get the stake of an account, if the account is currently a validator. Otherwise returns 0.

Parameters:

|param|type|description|
|-----|----|-----------|
|`accountId`|`String`|The account to look up|

Returns:

|type|description|
|----|-----------|
|`Int128.Int128`|The stake of `accountId` (a 128-bit integer)|

Examples:

```grain
Validator.stake(address)
```

### Validator.**totalStake**

```grain
totalStake : () -> Int128.Int128
```

Get the total validator stake of the current epoch.

Returns:

|type|description|
|----|-----------|
|`Int128.Int128`|The total validator stake (a 128-bit integer)|

Examples:

```grain
Validator.totalStake()
```

