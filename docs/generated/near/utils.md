### Utils.**valueReturnBytes**

```grain
valueReturnBytes : Bytes -> Void
```

Sets the given byte sequence as the return value of the contract.

Parameters:

|param|type|description|
|-----|----|-----------|
|`bytes`|`Bytes`|The bytes to return|

Examples:

```grain
Utils.valueReturnBytes(Bytes.fromString("something important"))
```

### Utils.**valueReturnString**

```grain
valueReturnString : String -> Void
```

Sets the given string as the return value of the contract.

Parameters:

|param|type|description|
|-----|----|-----------|
|`str`|`String`|The string to return|

Examples:

```grain
Utils.valueReturnString("something important")
```

### Utils.**panic**

```grain
panic : () -> Void
```

Terminates the execution of the program with panic `GuestPanic("explicit guest panic")`

Examples:

```grain
Utils.panic()
```

### Utils.**panicString**

```grain
panicString : String -> Void
```

Terminates the execution of the program with panic `GuestPanic(str)`

Parameters:

|param|type|description|
|-----|----|-----------|
|`str`|`String`|The string to use in the `GuestPanic`|

Examples:

```grain
Utils.panicString("Oh no!")
```

### Utils.**log**

```grain
log : String -> Void
```

Logs the given string

Parameters:

|param|type|description|
|-----|----|-----------|
|`str`|`String`|The string to log|

Examples:

```grain
Utils.log("Something happened")
```

