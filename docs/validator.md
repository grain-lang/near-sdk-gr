### Validator.**stake**

```grain
stake : AccountId.AccountId -> Bytes
```

Get the stake of an account, if the account is currently a validator. Otherwise returns 0.

Parameters:

|param|type|description|
|-----|----|-----------|
|`accountId`|`AccountId.AccountId`|The account to look up|

Returns:

|type|description|
|----|-----------|
|`Bytes`|The stake of `accountId` (a 128-bit integer)|

Examples:

```grain
Validator.stake(address)
```

### Validator.**totalStake**

```grain
totalStake : () -> Bytes
```

Get the total validator stake of the current epoch.

Returns:

|type|description|
|----|-----------|
|`Bytes`|The total validator stake (a 128-bit integer)|

Examples:

```grain
Validator.totalStake()
```

