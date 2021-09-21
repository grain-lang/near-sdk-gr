### Register.**readString**

```grain
readString : Int64 -> String
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
Register.readString(0L)
```

### Register.**readBytes**

```grain
readBytes : Int64 -> Bytes
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
Register.readBytes(0L)
```

### Register.**readInt32**

```grain
readInt32 : Int64 -> Int32
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
Register.readInt32(0L)
```

### Register.**readInt64**

```grain
readInt64 : Int64 -> Int64
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
Register.readInt64(0L)
```

### Register.**readInt128**

```grain
readInt128 : Int64 -> Bytes
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
Register.readInt128(0L)
```

### Register.**readInt256**

```grain
readInt256 : Int64 -> Bytes
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
Register.readInt256(0L)
```

