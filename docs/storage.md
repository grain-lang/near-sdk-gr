### Storage.**StorageKey**

```grain
enum StorageKey {
  StringKey(String),
  BytesKey(Bytes),
  AccountIdKey(AccountId.AccountId),
}
```

The different types of storage keys available

### Storage.**hasKey**

```grain
hasKey : StorageKey -> Bool
```

Checks whether the given key exists in storage.

Parameters:

|param|type|description|
|-----|----|-----------|
|`key`|`StorageKey`|The key to check for|

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
getString : StorageKey -> Option<String>
```

Looks up the given key in storage, returning any associated data
interpreted as a UTF-8 string. If the lookup is successful,
the contents of register 0 will be overwritten.

Parameters:

|param|type|description|
|-----|----|-----------|
|`key`|`StorageKey`|The key to check for|

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
getBytes : StorageKey -> Option<Bytes>
```

Looks up the given key in storage, returning any associated data
interpreted as a sequence of bytes. If the lookup is successful,
the contents of register 0 will be overwritten.

Parameters:

|param|type|description|
|-----|----|-----------|
|`key`|`StorageKey`|The key to check for|

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
getInt32 : StorageKey -> Option<Int32>
```

Looks up the given key in storage, returning any associated data
interpreted as a 32-bit integer. If the lookup is successful,
the contents of register 0 will be overwritten.

Parameters:

|param|type|description|
|-----|----|-----------|
|`key`|`StorageKey`|The key to check for|

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
getInt64 : StorageKey -> Option<Int64>
```

Looks up the given key in storage, returning any associated data
interpreted as a 64-bit integer. If the lookup is successful,
the contents of register 0 will be overwritten.

Parameters:

|param|type|description|
|-----|----|-----------|
|`key`|`StorageKey`|The key to check for|

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
getInt128 : StorageKey -> Option<Bytes>
```

Looks up the given key in storage, returning any associated data
interpreted as a 128-bit integer. If the lookup is successful,
the contents of register 0 will be overwritten.

Parameters:

|param|type|description|
|-----|----|-----------|
|`key`|`StorageKey`|The key to check for|

Returns:

|type|description|
|----|-----------|
|`Option<Bytes>`|The associated int128 data, if it exists|

Examples:

```grain
Storage.getInt128(Storage.StringKey("foo"))
```

### Storage.**getInt256**

```grain
getInt256 : StorageKey -> Option<Bytes>
```

Looks up the given key in storage, returning any associated data
interpreted as a 256-bit integer. If the lookup is successful,
the contents of register 0 will be overwritten.

Parameters:

|param|type|description|
|-----|----|-----------|
|`key`|`StorageKey`|The key to check for|

Returns:

|type|description|
|----|-----------|
|`Option<Bytes>`|The associated int256 data, if it exists|

Examples:

```grain
Storage.getInt256(Storage.StringKey("foo"))
```

### Storage.**setString**

```grain
setString : (StorageKey, String) -> Bool
```

Associates the given key in storage with the given string.
If there is already a value associated with the given key,
the contents of register 0 will be overwritten.

Parameters:

|param|type|description|
|-----|----|-----------|
|`key`|`StorageKey`|The key to store|
|`value`|`String`|The value to store|

Returns:

|type|description|
|----|-----------|
|`Bool`|`true` if the operation overwrites an existing value, otherwise `false`.|

Examples:

```grain
Storage.setString(Storage.StringKey("foo"), "bar")
```

### Storage.**setBytes**

```grain
setBytes : (StorageKey, Bytes) -> Bool
```

Associates the given key in storage with the given byte data.
If there is already a value associated with the given key,
the contents of register 0 will be overwritten.

Parameters:

|param|type|description|
|-----|----|-----------|
|`key`|`StorageKey`|The key to store|
|`value`|`Bytes`|The value to store|

Returns:

|type|description|
|----|-----------|
|`Bool`|`true` if the operation overwrites an existing value, otherwise `false`.|

Examples:

```grain
Storage.setBytes(Storage.StringKey("foo"), Bytes.fromString("bar"))
```

### Storage.**setInt32**

```grain
setInt32 : (StorageKey, Int32) -> Bool
```

Associates the given key in storage with the given 32-bit integer.
If there is already a value associated with the given key,
the contents of register 0 will be overwritten.

Parameters:

|param|type|description|
|-----|----|-----------|
|`key`|`StorageKey`|The key to store|
|`value`|`Int32`|The value to store|

Returns:

|type|description|
|----|-----------|
|`Bool`|`true` if the operation overwrites an existing value, otherwise `false`.|

Examples:

```grain
Storage.setInt32(Storage.StringKey("foo"), 42l)
```

### Storage.**setInt64**

```grain
setInt64 : (StorageKey, Int64) -> Bool
```

Associates the given key in storage with the given 64-bit integer.
If there is already a value associated with the given key,
the contents of register 0 will be overwritten.

Parameters:

|param|type|description|
|-----|----|-----------|
|`key`|`StorageKey`|The key to store|
|`value`|`Int64`|The value to store|

Returns:

|type|description|
|----|-----------|
|`Bool`|`true` if the operation overwrites an existing value, otherwise `false`.|

Examples:

```grain
Storage.setInt64(Storage.StringKey("foo"), 42L)
```

### Storage.**setInt128**

```grain
setInt128 : (StorageKey, Bytes) -> Bool
```

Associates the given key in storage with the given 128-bit integer.
If there is already a value associated with the given key,
the contents of register 0 will be overwritten.

Parameters:

|param|type|description|
|-----|----|-----------|
|`key`|`StorageKey`|The key to store|
|`value`|`Bytes`|The value to store|

Returns:

|type|description|
|----|-----------|
|`Bool`|`true` if the operation overwrites an existing value, otherwise `false`.|

Examples:

```grain
Storage.setInt128(Storage.StringKey("foo"), Int128.fromInt64(5L))
```

### Storage.**setInt256**

```grain
setInt256 : (StorageKey, Bytes) -> Bool
```

Associates the given key in storage with the given 256-bit integer.
If there is already a value associated with the given key,
the contents of register 0 will be overwritten.

Parameters:

|param|type|description|
|-----|----|-----------|
|`key`|`StorageKey`|The key to store|
|`value`|`Bytes`|The value to store|

Returns:

|type|description|
|----|-----------|
|`Bool`|`true` if the operation overwrites an existing value, otherwise `false`.|

Examples:

```grain
Storage.setInt256(Storage.StringKey("foo"), Int256.fromInt64(5L))
```

### Storage.**swapString**

```grain
swapString : (StorageKey, String) -> Option<String>
```

Associates the given key in storage with the given string,
returning any existing value (interpreted as a string).
If there is already a value associated with the given key,
the contents of register 0 will be overwritten.

Parameters:

|param|type|description|
|-----|----|-----------|
|`key`|`StorageKey`|The key to store|
|`value`|`String`|The value to store|

Returns:

|type|description|
|----|-----------|
|`Option<String>`|The existing string data associated with `key`, if any|

Examples:

```grain
Storage.swapString(Storage.StringKey("foo"), "bar")
```

### Storage.**swapBytes**

```grain
swapBytes : (StorageKey, Bytes) -> Option<Bytes>
```

Associates the given key in storage with the given byte data,
returning any existing value (interpreted as a byte sequence).
If there is already a value associated with the given key,
the contents of register 0 will be overwritten.

Parameters:

|param|type|description|
|-----|----|-----------|
|`key`|`StorageKey`|The key to store|
|`value`|`Bytes`|The value to store|

Returns:

|type|description|
|----|-----------|
|`Option<Bytes>`|The existing byte data associated with `key`, if any|

Examples:

```grain
Storage.swapBytes(Storage.StringKey("foo"), Bytes.fromString("bar"))
```

### Storage.**swapInt32**

```grain
swapInt32 : (StorageKey, Int32) -> Option<Int32>
```

Associates the given key in storage with the given 32-bit integer,
returning any existing value (interpreted as a 32-bit integer).
If there is already a value associated with the given key,
the contents of register 0 will be overwritten.

Parameters:

|param|type|description|
|-----|----|-----------|
|`key`|`StorageKey`|The key to store|
|`value`|`Int32`|The value to store|

Returns:

|type|description|
|----|-----------|
|`Option<Int32>`|The existing int32 data associated with `key`, if any|

Examples:

```grain
Storage.swapInt32(Storage.StringKey("foo"), 42l)
```

### Storage.**swapInt64**

```grain
swapInt64 : (StorageKey, Int64) -> Option<Int64>
```

Associates the given key in storage with the given 64-bit integer,
returning any existing value (interpreted as a 64-bit integer).
If there is already a value associated with the given key,
the contents of register 0 will be overwritten.

Parameters:

|param|type|description|
|-----|----|-----------|
|`key`|`StorageKey`|The key to store|
|`value`|`Int64`|The value to store|

Returns:

|type|description|
|----|-----------|
|`Option<Int64>`|The existing string data associated with `key`, if any|

Examples:

```grain
Storage.setInt64(Storage.StringKey("foo"), 42L)
```

### Storage.**swapInt128**

```grain
swapInt128 : (StorageKey, Bytes) -> Option<Bytes>
```

Associates the given key in storage with the given 128-bit integer,
returning any existing value (interpreted as a 128-bit integer).
If there is already a value associated with the given key,
the contents of register 0 will be overwritten.

Parameters:

|param|type|description|
|-----|----|-----------|
|`key`|`StorageKey`|The key to store|
|`value`|`Bytes`|The value to store|

Returns:

|type|description|
|----|-----------|
|`Option<Bytes>`|The existing string data associated with `key`, if any|

Examples:

```grain
Storage.setInt128(Storage.StringKey("foo"), Int128.fromInt64(5L))
```

### Storage.**swapInt256**

```grain
swapInt256 : (StorageKey, Bytes) -> Option<Bytes>
```

Associates the given key in storage with the given 256-bit integer,
returning any existing value (interpreted as a 256-bit integer).
If there is already a value associated with the given key,
the contents of register 0 will be overwritten.

Parameters:

|param|type|description|
|-----|----|-----------|
|`key`|`StorageKey`|The key to store|
|`value`|`Bytes`|The value to store|

Returns:

|type|description|
|----|-----------|
|`Option<Bytes>`|The existing string data associated with `key`, if any|

Examples:

```grain
Storage.setInt256(Storage.StringKey("foo"), Int256.fromInt64(5L))
```

### Storage.**removeString**

```grain
removeString : StorageKey -> Option<String>
```

Removes any storage entry associated with the given key,
returning any existing value, interpreted as a string.
If this operation removes an entry, the contents of
register 0 will be overwritten.

Parameters:

|param|type|description|
|-----|----|-----------|
|`key`|`StorageKey`|The key to remove|

Returns:

|type|description|
|----|-----------|
|`Option<String>`|The string value which was removed from storage|

Examples:

```grain
Storage.removeString(Storage.StringKey("foo"))
```

### Storage.**removeBytes**

```grain
removeBytes : StorageKey -> Option<Bytes>
```

Removes any storage entry associated with the given key,
returning any existing value, interpreted as a byte sequence.
If this operation removes an entry, the contents of
register 0 will be overwritten.

Parameters:

|param|type|description|
|-----|----|-----------|
|`key`|`StorageKey`|The key to remove|

Returns:

|type|description|
|----|-----------|
|`Option<Bytes>`|The bytes value which was removed from storage|

Examples:

```grain
Storage.removeBytes(Storage.StringKey("foo"))
```

### Storage.**removeInt32**

```grain
removeInt32 : StorageKey -> Option<Int32>
```

Removes any storage entry associated with the given key,
returning any existing value, interpreted as a 32-bit integer.
If this operation removes an entry, the contents of
register 0 will be overwritten.

Parameters:

|param|type|description|
|-----|----|-----------|
|`key`|`StorageKey`|The key to remove|

Returns:

|type|description|
|----|-----------|
|`Option<Int32>`|The int32 value which was removed from storage|

Examples:

```grain
Storage.removeInt32(Storage.StringKey("foo"))
```

### Storage.**removeInt64**

```grain
removeInt64 : StorageKey -> Option<Int64>
```

Removes any storage entry associated with the given key,
returning any existing value, interpreted as a 64-bit integer.
If this operation removes an entry, the contents of
register 0 will be overwritten.

Parameters:

|param|type|description|
|-----|----|-----------|
|`key`|`StorageKey`|The key to remove|

Returns:

|type|description|
|----|-----------|
|`Option<Int64>`|The string value which was removed from storage|

Examples:

```grain
Storage.removeInt64(Storage.StringKey("foo"))
```

### Storage.**removeInt128**

```grain
removeInt128 : StorageKey -> Option<Bytes>
```

Removes any storage entry associated with the given key,
returning any existing value, interpreted as a 128-bit integer.
If this operation removes an entry, the contents of
register 0 will be overwritten.

Parameters:

|param|type|description|
|-----|----|-----------|
|`key`|`StorageKey`|The key to remove|

Returns:

|type|description|
|----|-----------|
|`Option<Bytes>`|The string value which was removed from storage|

Examples:

```grain
Storage.removeInt128(Storage.StringKey("foo"))
```

### Storage.**removeInt256**

```grain
removeInt256 : StorageKey -> Option<Bytes>
```

Removes any storage entry associated with the given key,
returning any existing value, interpreted as a 256-bit integer.
If this operation removes an entry, the contents of
register 0 will be overwritten.

Parameters:

|param|type|description|
|-----|----|-----------|
|`key`|`StorageKey`|The key to remove|

Returns:

|type|description|
|----|-----------|
|`Option<Bytes>`|The string value which was removed from storage|

Examples:

```grain
Storage.removeInt256(Storage.StringKey("foo"))
```

### Storage.**remove**

```grain
remove : StorageKey -> Bool
```

Removes any storage entry associated with the given key.
If this operation removes an entry, the contents of
register 0 will be overwritten.

Parameters:

|param|type|description|
|-----|----|-----------|
|`key`|`StorageKey`|The key to remove|

Returns:

|type|description|
|----|-----------|
|`Bool`|Whether this operation removed data from storage|

Examples:

```grain
Storage.remove(Storage.StringKey("foo"))
```

