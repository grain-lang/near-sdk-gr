### Storage.**hasKey**

```grain
hasKey : String -> Bool
```

Checks whether the given key exists in storage.

Parameters:

|param|type|description|
|-----|----|-----------|
|`key`|`String`|The key to check for|

Returns:

|type|description|
|----|-----------|
|`Bool`|Whether the key exists in storage|

Examples:

```grain
Storage.hasKey(Storage.StringKey("foo"))
```

### Storage.**getString**

```grain
getString : String -> Option<String>
```

Looks up the given key in storage, returning any associated data
interpreted as a UTF-8 string. If the lookup is successful,
the contents of register 0 will be overwritten.

Parameters:

|param|type|description|
|-----|----|-----------|
|`key`|`String`|The key to check for|

Returns:

|type|description|
|----|-----------|
|`Option<String>`|The associated string data, if it exists|

Examples:

```grain
Storage.getString(Storage.StringKey("foo"))
```

### Storage.**getBytes**

```grain
getBytes : String -> Option<Bytes>
```

Looks up the given key in storage, returning any associated data
interpreted as a sequence of bytes. If the lookup is successful,
the contents of register 0 will be overwritten.

Parameters:

|param|type|description|
|-----|----|-----------|
|`key`|`String`|The key to check for|

Returns:

|type|description|
|----|-----------|
|`Option<Bytes>`|The associated data, if it exists|

Examples:

```grain
Storage.getBytes(Storage.StringKey("foo"))
```

### Storage.**getInt32**

```grain
getInt32 : String -> Option<Int32>
```

Looks up the given key in storage, returning any associated data
interpreted as a 32-bit integer. If the lookup is successful,
the contents of register 0 will be overwritten.

Parameters:

|param|type|description|
|-----|----|-----------|
|`key`|`String`|The key to check for|

Returns:

|type|description|
|----|-----------|
|`Option<Int32>`|The associated int32 data, if it exists|

Examples:

```grain
Storage.getInt32(Storage.StringKey("foo"))
```

### Storage.**getInt64**

```grain
getInt64 : String -> Option<Int64>
```

Looks up the given key in storage, returning any associated data
interpreted as a 64-bit integer. If the lookup is successful,
the contents of register 0 will be overwritten.

Parameters:

|param|type|description|
|-----|----|-----------|
|`key`|`String`|The key to check for|

Returns:

|type|description|
|----|-----------|
|`Option<Int64>`|The associated int64 data, if it exists|

Examples:

```grain
Storage.getInt64(Storage.StringKey("foo"))
```

### Storage.**getInt128**

```grain
getInt128 : String -> Option<Int128.Int128>
```

Looks up the given key in storage, returning any associated data
interpreted as a 128-bit integer. If the lookup is successful,
the contents of register 0 will be overwritten.

Parameters:

|param|type|description|
|-----|----|-----------|
|`key`|`String`|The key to check for|

Returns:

|type|description|
|----|-----------|
|`Option<Int128.Int128>`|The associated int128 data, if it exists|

Examples:

```grain
Storage.getInt128(Storage.StringKey("foo"))
```

### Storage.**getInt256**

```grain
getInt256 : String -> Option<Int256.Int256>
```

Looks up the given key in storage, returning any associated data
interpreted as a 256-bit integer. If the lookup is successful,
the contents of register 0 will be overwritten.

Parameters:

|param|type|description|
|-----|----|-----------|
|`key`|`String`|The key to check for|

Returns:

|type|description|
|----|-----------|
|`Option<Int256.Int256>`|The associated int256 data, if it exists|

Examples:

```grain
Storage.getInt256(Storage.StringKey("foo"))
```

### Storage.**setString**

```grain
setString : (String, String) -> Void
```

Associates the given key in storage with the given string.
If there is already a value associated with the given key,
the contents of register 0 will be overwritten.

Parameters:

|param|type|description|
|-----|----|-----------|
|`key`|`String`|The key to store|
|`value`|`String`|The value to store|

Returns:

|type|description|
|----|-----------|
|`Void`|`true` if the operation overwrites an existing value, otherwise `false`.|

Examples:

```grain
Storage.setString(Storage.StringKey("foo"), "bar")
```

### Storage.**setBytes**

```grain
setBytes : (String, Bytes) -> Void
```

Associates the given key in storage with the given byte data.
If there is already a value associated with the given key,
the contents of register 0 will be overwritten.

Parameters:

|param|type|description|
|-----|----|-----------|
|`key`|`String`|The key to store|
|`value`|`Bytes`|The value to store|

Returns:

|type|description|
|----|-----------|
|`Void`|`true` if the operation overwrites an existing value, otherwise `false`.|

Examples:

```grain
Storage.setBytes(Storage.StringKey("foo"), Bytes.fromString("bar"))
```

### Storage.**setInt32**

```grain
setInt32 : (String, Int32) -> Void
```

Associates the given key in storage with the given 32-bit integer.
If there is already a value associated with the given key,
the contents of register 0 will be overwritten.

Parameters:

|param|type|description|
|-----|----|-----------|
|`key`|`String`|The key to store|
|`value`|`Int32`|The value to store|

Returns:

|type|description|
|----|-----------|
|`Void`|`true` if the operation overwrites an existing value, otherwise `false`.|

Examples:

```grain
Storage.setInt32(Storage.StringKey("foo"), 42l)
```

### Storage.**setInt64**

```grain
setInt64 : (String, Int64) -> Void
```

Associates the given key in storage with the given 64-bit integer.
If there is already a value associated with the given key,
the contents of register 0 will be overwritten.

Parameters:

|param|type|description|
|-----|----|-----------|
|`key`|`String`|The key to store|
|`value`|`Int64`|The value to store|

Returns:

|type|description|
|----|-----------|
|`Void`|`true` if the operation overwrites an existing value, otherwise `false`.|

Examples:

```grain
Storage.setInt64(Storage.StringKey("foo"), 42L)
```

### Storage.**setInt128**

```grain
setInt128 : (String, Bytes) -> Void
```

Associates the given key in storage with the given 128-bit integer.
If there is already a value associated with the given key,
the contents of register 0 will be overwritten.

Parameters:

|param|type|description|
|-----|----|-----------|
|`key`|`String`|The key to store|
|`value`|`Bytes`|The value to store|

Returns:

|type|description|
|----|-----------|
|`Void`|`true` if the operation overwrites an existing value, otherwise `false`.|

Examples:

```grain
Storage.setInt128(Storage.StringKey("foo"), Int128.fromInt64(5L))
```

### Storage.**setInt256**

```grain
setInt256 : (String, Bytes) -> Void
```

Associates the given key in storage with the given 256-bit integer.
If there is already a value associated with the given key,
the contents of register 0 will be overwritten.

Parameters:

|param|type|description|
|-----|----|-----------|
|`key`|`String`|The key to store|
|`value`|`Bytes`|The value to store|

Returns:

|type|description|
|----|-----------|
|`Void`|`true` if the operation overwrites an existing value, otherwise `false`.|

Examples:

```grain
Storage.setInt256(Storage.StringKey("foo"), Int256.fromInt64(5L))
```

### Storage.**replaceString**

```grain
replaceString : (String, String) -> Option<String>
```

Associates the given key in storage with the given string,
returning any existing value (interpreted as a string).
If there is already a value associated with the given key,
the contents of register 0 will be overwritten.

Parameters:

|param|type|description|
|-----|----|-----------|
|`key`|`String`|The key to store|
|`value`|`String`|The value to store|

Returns:

|type|description|
|----|-----------|
|`Option<String>`|The existing string data associated with `key`, if any|

Examples:

```grain
Storage.replaceString(Storage.StringKey("foo"), "bar")
```

### Storage.**replaceBytes**

```grain
replaceBytes : (String, Bytes) -> Option<Bytes>
```

Associates the given key in storage with the given byte data,
returning any existing value (interpreted as a byte sequence).
If there is already a value associated with the given key,
the contents of register 0 will be overwritten.

Parameters:

|param|type|description|
|-----|----|-----------|
|`key`|`String`|The key to store|
|`value`|`Bytes`|The value to store|

Returns:

|type|description|
|----|-----------|
|`Option<Bytes>`|The existing byte data associated with `key`, if any|

Examples:

```grain
Storage.replaceBytes(Storage.StringKey("foo"), Bytes.fromString("bar"))
```

### Storage.**replaceInt32**

```grain
replaceInt32 : (String, Int32) -> Option<Int32>
```

Associates the given key in storage with the given 32-bit integer,
returning any existing value (interpreted as a 32-bit integer).
If there is already a value associated with the given key,
the contents of register 0 will be overwritten.

Parameters:

|param|type|description|
|-----|----|-----------|
|`key`|`String`|The key to store|
|`value`|`Int32`|The value to store|

Returns:

|type|description|
|----|-----------|
|`Option<Int32>`|The existing int32 data associated with `key`, if any|

Examples:

```grain
Storage.replaceInt32(Storage.StringKey("foo"), 42l)
```

### Storage.**replaceInt64**

```grain
replaceInt64 : (String, Int64) -> Option<Int64>
```

Associates the given key in storage with the given 64-bit integer,
returning any existing value (interpreted as a 64-bit integer).
If there is already a value associated with the given key,
the contents of register 0 will be overwritten.

Parameters:

|param|type|description|
|-----|----|-----------|
|`key`|`String`|The key to store|
|`value`|`Int64`|The value to store|

Returns:

|type|description|
|----|-----------|
|`Option<Int64>`|The existing string data associated with `key`, if any|

Examples:

```grain
Storage.setInt64(Storage.StringKey("foo"), 42L)
```

### Storage.**replaceInt128**

```grain
replaceInt128 : (String, Bytes) -> Option<Int128.Int128>
```

Associates the given key in storage with the given 128-bit integer,
returning any existing value (interpreted as a 128-bit integer).
If there is already a value associated with the given key,
the contents of register 0 will be overwritten.

Parameters:

|param|type|description|
|-----|----|-----------|
|`key`|`String`|The key to store|
|`value`|`Bytes`|The value to store|

Returns:

|type|description|
|----|-----------|
|`Option<Int128.Int128>`|The existing string data associated with `key`, if any|

Examples:

```grain
Storage.setInt128(Storage.StringKey("foo"), Int128.fromInt64(5L))
```

### Storage.**replaceInt256**

```grain
replaceInt256 : (String, Bytes) -> Option<Int256.Int256>
```

Associates the given key in storage with the given 256-bit integer,
returning any existing value (interpreted as a 256-bit integer).
If there is already a value associated with the given key,
the contents of register 0 will be overwritten.

Parameters:

|param|type|description|
|-----|----|-----------|
|`key`|`String`|The key to store|
|`value`|`Bytes`|The value to store|

Returns:

|type|description|
|----|-----------|
|`Option<Int256.Int256>`|The existing string data associated with `key`, if any|

Examples:

```grain
Storage.setInt256(Storage.StringKey("foo"), Int256.fromInt64(5L))
```

### Storage.**popString**

```grain
popString : String -> Option<String>
```

Removes any storage entry associated with the given key,
returning any existing value, interpreted as a string.
If this operation removes an entry, the contents of
register 0 will be overwritten.

Parameters:

|param|type|description|
|-----|----|-----------|
|`key`|`String`|The key to remove|

Returns:

|type|description|
|----|-----------|
|`Option<String>`|The string value which was removed from storage|

Examples:

```grain
Storage.popString(Storage.StringKey("foo"))
```

### Storage.**popBytes**

```grain
popBytes : String -> Option<Bytes>
```

Removes any storage entry associated with the given key,
returning any existing value, interpreted as a byte sequence.
If this operation removes an entry, the contents of
register 0 will be overwritten.

Parameters:

|param|type|description|
|-----|----|-----------|
|`key`|`String`|The key to remove|

Returns:

|type|description|
|----|-----------|
|`Option<Bytes>`|The bytes value which was removed from storage|

Examples:

```grain
Storage.popBytes(Storage.StringKey("foo"))
```

### Storage.**popInt32**

```grain
popInt32 : String -> Option<Int32>
```

Removes any storage entry associated with the given key,
returning any existing value, interpreted as a 32-bit integer.
If this operation removes an entry, the contents of
register 0 will be overwritten.

Parameters:

|param|type|description|
|-----|----|-----------|
|`key`|`String`|The key to remove|

Returns:

|type|description|
|----|-----------|
|`Option<Int32>`|The int32 value which was removed from storage|

Examples:

```grain
Storage.popInt32(Storage.StringKey("foo"))
```

### Storage.**popInt64**

```grain
popInt64 : String -> Option<Int64>
```

Removes any storage entry associated with the given key,
returning any existing value, interpreted as a 64-bit integer.
If this operation removes an entry, the contents of
register 0 will be overwritten.

Parameters:

|param|type|description|
|-----|----|-----------|
|`key`|`String`|The key to remove|

Returns:

|type|description|
|----|-----------|
|`Option<Int64>`|The string value which was removed from storage|

Examples:

```grain
Storage.popInt64(Storage.StringKey("foo"))
```

### Storage.**popInt128**

```grain
popInt128 : String -> Option<Int128.Int128>
```

Removes any storage entry associated with the given key,
returning any existing value, interpreted as a 128-bit integer.
If this operation removes an entry, the contents of
register 0 will be overwritten.

Parameters:

|param|type|description|
|-----|----|-----------|
|`key`|`String`|The key to remove|

Returns:

|type|description|
|----|-----------|
|`Option<Int128.Int128>`|The string value which was removed from storage|

Examples:

```grain
Storage.popInt128(Storage.StringKey("foo"))
```

### Storage.**popInt256**

```grain
popInt256 : String -> Option<Int256.Int256>
```

Removes any storage entry associated with the given key,
returning any existing value, interpreted as a 256-bit integer.
If this operation removes an entry, the contents of
register 0 will be overwritten.

Parameters:

|param|type|description|
|-----|----|-----------|
|`key`|`String`|The key to remove|

Returns:

|type|description|
|----|-----------|
|`Option<Int256.Int256>`|The string value which was removed from storage|

Examples:

```grain
Storage.popInt256(Storage.StringKey("foo"))
```

### Storage.**remove**

```grain
remove : String -> Void
```

Removes any storage entry associated with the given key.
If this operation removes an entry, the contents of
register 0 will be overwritten.

Parameters:

|param|type|description|
|-----|----|-----------|
|`key`|`String`|The key to remove|

Returns:

|type|description|
|----|-----------|
|`Void`|Whether this operation removed data from storage|

Examples:

```grain
Storage.remove(Storage.StringKey("foo"))
```

