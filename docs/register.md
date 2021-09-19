### Register.**readRegisterString**

```grain
readRegisterString : Int64 -> String
```

Reads the contents of the given register, interpreting
the data as a string.

Will throw an error if the given register ID is not in use.

Parameters:

|param|type|description|
|-----|----|-----------|
|`id`|`Int64`|The register to read|

Returns:

|type|description|
|----|-----------|
|`String`|The contents of the given register|

Examples:

```grain
Register.readRegisterString(0L)
```

### Register.**readRegisterBytes**

```grain
readRegisterBytes : Int64 -> Bytes
```

Reads the contents of the given register, interpreting
the data as a byte sequence.

Will throw an error if the given register ID is not in use.

Parameters:

|param|type|description|
|-----|----|-----------|
|`id`|`Int64`|The register to read|

Returns:

|type|description|
|----|-----------|
|`Bytes`|The contents of the given register|

Examples:

```grain
Register.readRegisterBytes(0L)
```

### Register.**readRegisterInt32**

```grain
readRegisterInt32 : Int64 -> Int32
```

Reads the contents of the given register, interpreting
the data as a 32-bit integer.

Will throw an error if the given register ID is not in use.

Parameters:

|param|type|description|
|-----|----|-----------|
|`id`|`Int64`|The register to read|

Returns:

|type|description|
|----|-----------|
|`Int32`|The contents of the given register|

Examples:

```grain
Register.readRegisterInt32(0L)
```

### Register.**readRegisterInt64**

```grain
readRegisterInt64 : Int64 -> Int64
```

Reads the contents of the given register, interpreting
the data as a 64-bit integer.

Will throw an error if the given register ID is not in use.

Parameters:

|param|type|description|
|-----|----|-----------|
|`id`|`Int64`|The register to read|

Returns:

|type|description|
|----|-----------|
|`Int64`|The contents of the given register|

Examples:

```grain
Register.readRegisterInt64(0L)
```

### Register.**readRegisterInt128**

```grain
readRegisterInt128 : Int64 -> Bytes
```

Reads the contents of the given register, interpreting
the data as a 128-bit integer.

Will throw an error if the given register ID is not in use.

Parameters:

|param|type|description|
|-----|----|-----------|
|`id`|`Int64`|The register to read|

Returns:

|type|description|
|----|-----------|
|`Bytes`|The contents of the given register|

Examples:

```grain
Register.readRegisterInt128(0L)
```

### Register.**readRegisterInt256**

```grain
readRegisterInt256 : Int64 -> Bytes
```

Reads the contents of the given register, interpreting
the data as a 256-bit integer.

Will throw an error if the given register ID is not in use.

Parameters:

|param|type|description|
|-----|----|-----------|
|`id`|`Int64`|The register to read|

Returns:

|type|description|
|----|-----------|
|`Bytes`|The contents of the given register|

Examples:

```grain
Register.readRegisterInt256(0L)
```

### Register.**readRegisterAccountId**

```grain
readRegisterAccountId : Int64 -> AccountId.AccountId
```

Reads the contents of the given register, interpreting
the data as an address.

Will throw an error if the given register ID is not in use.

Parameters:

|param|type|description|
|-----|----|-----------|
|`id`|`Int64`|The register to read|

Returns:

|type|description|
|----|-----------|
|`AccountId.AccountId`|The contents of the given register|

Examples:

```grain
Register.readRegisterAccountId(0L)
```

