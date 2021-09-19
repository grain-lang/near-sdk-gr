# Grain NEAR SDK

This project provides bindings to the [NEAR](https://near.org) SDK in order to enable easy writing of NEAR smart contracts in Grain.

## Generating the Documentation

```bash
$ find src -name '*.gr' | xargs -L 1 -I '{}' bash -c 'grain doc {} > $(echo {} | sed "s/src/docs/g" | sed "s/gr/md/g")'
```
