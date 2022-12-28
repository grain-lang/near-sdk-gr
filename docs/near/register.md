### Register.**readString**

```grain
readString : Int64 -> Option<String>
```

Reads the contents of the given register, interpreting
the data as a string.

Will return `None` if the given register ID is not in use.

Parameters:

|param|type|description|
|-----|----|-----------|
|`id`|`Int64`|The register to read|

Returns:

|type|description|
|----|-----------|
|`Option<String>`|The contents of the given register|

Examples:

```grain
Register.readString(0L)
```

### Register.**readBytes**

```grain
readBytes : Int64 -> Option<Bytes>
```

Reads the contents of the given register, interpreting
the data as a byte sequence.

Will return `None` if the given register ID is not in use.

Parameters:

|param|type|description|
|-----|----|-----------|
|`id`|`Int64`|The register to read|

Returns:

|type|description|
|----|-----------|
|`Option<Bytes>`|The contents of the given register|

Examples:

```grain
Register.readBytes(0L)
```

### Register.**readInt32**

```grain
readInt32 : Int64 -> Option<Int32>
```

Reads the contents of the given register, interpreting
the data as a 32-bit integer.

Will return `None` if the given register ID is not in use.

Parameters:

|param|type|description|
|-----|----|-----------|
|`id`|`Int64`|The register to read|

Returns:

|type|description|
|----|-----------|
|`Option<Int32>`|The contents of the given register|

Examples:

```grain
Register.readInt32(0L)
```

### Register.**readInt64**

```grain
readInt64 : Int64 -> Option<Int64>
```

Reads the contents of the given register, interpreting
the data as a 64-bit integer.

Will return `None` if the given register ID is not in use.

Parameters:

|param|type|description|
|-----|----|-----------|
|`id`|`Int64`|The register to read|

Returns:

|type|description|
|----|-----------|
|`Option<Int64>`|The contents of the given register|

Examples:

```grain
Register.readInt64(0L)
```

### Register.**readInt128**

```grain
readInt128 : Int64 -> Option<Int128.Int128>
```

Reads the contents of the given register, interpreting
the data as a 128-bit integer.

Will return `None` if the given register ID is not in use.

Parameters:

|param|type|description|
|-----|----|-----------|
|`id`|`Int64`|The register to read|

Returns:

|type|description|
|----|-----------|
|`Option<Int128.Int128>`|The contents of the given register|

Examples:

```grain
Register.readInt128(0L)
```

### Register.**readInt256**

```grain
readInt256 : Int64 -> Option<Int256.Int256>
```

Reads the contents of the given register, interpreting
the data as a 256-bit integer.

Will return `None` if the given register ID is not in use.

Parameters:

|param|type|description|
|-----|----|-----------|
|`id`|`Int64`|The register to read|

Returns:

|type|description|
|----|-----------|
|`Option<Int256.Int256>`|The contents of the given register|

Examples:

```grain
Register.readInt256(0L)
```

### Register.**writeBytes**

```grain
writeBytes : (Int64, Bytes) -> Void
```

Writes the given byte sequence to the given register.

Parameters:

|param|type|description|
|-----|----|-----------|
|`id`|`Int64`|The register to write to|
|`data`|`Bytes`|The data to write to the given register|

Examples:

```grain
Register.writeBytes(0L, Bytes.fromString("foo bar"))
```

### Register.**writeString**

```grain
writeString : (Int64, String) -> Void
```

Writes the given string to the given register.

Parameters:

|param|type|description|
|-----|----|-----------|
|`id`|`Int64`|The register to write to|
|`data`|`String`|The data to write to the given register|

Examples:

```grain
Register.writeString(0L, "foo bar")
```

### Register.**writeInt32**

```grain
writeInt32 : (Int64, Int32) -> Void
```

Writes the given integer to the given register.

Parameters:

|param|type|description|
|-----|----|-----------|
|`id`|`Int64`|The register to write to|
|`data`|`Int32`|The data to write to the given register|

Examples:

```grain
Register.writeInt32(0L, 29l)
```

### Register.**writeInt64**

```grain
writeInt64 : (Int64, Int64) -> Void
```

Writes the given integer to the given register.

Parameters:

|param|type|description|
|-----|----|-----------|
|`id`|`Int64`|The register to write to|
|`data`|`Int64`|The data to write to the given register|

Examples:

```grain
Register.writeInt64(0L, 57L)
```

### Register.**writeInt128**

```grain
writeInt128 : (Int64, Int128.Int128) -> Void
```

Writes the given integer to the given register.

Parameters:

|param|type|description|
|-----|----|-----------|
|`id`|`Int64`|The register to write to|
|`data`|`Int128.Int128`|The data to write to the given register|

Examples:

```grain
Register.writeInt128(0L, myint)
```

### Register.**writeInt256**

```grain
writeInt256 : (Int64, Int256.Int256) -> Void
```

Writes the given integer to the given register.

Parameters:

|param|type|description|
|-----|----|-----------|
|`id`|`Int64`|The register to write to|
|`data`|`Int256.Int256`|The data to write to the given register|

Examples:

```grain
Register.writeInt256(0L, myint)
```

