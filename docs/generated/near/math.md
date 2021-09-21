### Math.**HashAlgorithm**

```grain
enum HashAlgorithm {
  SHA256,
  KECCAK256,
  KECCAK512,
  RIPEMD160,
}
```

### Math.**hashBytes**

```grain
hashBytes : (HashAlgorithm, Bytes) -> Bytes
```

Hashes the given byte sequence using the given hash algorithm.
This function will overwrite the contents of register 0.

Parameters:

|param|type|description|
|-----|----|-----------|
|`alg`|`HashAlgorithm`|The hashing algorithm to use|
|`value`|`Bytes`|The value to hash|

Returns:

|type|description|
|----|-----------|
|`Bytes`|The hash|

Examples:

```grain
Math.hashBytes(Math.SHA256, data)
```

### Math.**hashString**

```grain
hashString : (HashAlgorithm, String) -> Bytes
```

Hashes the given string using the given hash algorithm.
This function will overwrite the contents of register 0.

Parameters:

|param|type|description|
|-----|----|-----------|
|`alg`|`HashAlgorithm`|The hashing algorithm to use|
|`value`|`String`|The value to hash|

Returns:

|type|description|
|----|-----------|
|`Bytes`|The hash|

Examples:

```grain
Math.hashString(Math.SHA256, data)
```

