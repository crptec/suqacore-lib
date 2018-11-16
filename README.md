suqacore Library
================

A pure and powerful JavaScript SUQA library.

## Principles

SUQA is a pow X22i

## Get Started
### NodeJS
```
git clone https://github.com/crptec/suqacore-lib.git
cd suqacore-lib
npm install 
```

### Bitcore-node module
cd node_modules

rm -rf bitcore-lib
ln -s ~/bitcore-lib
### Browser

## Docs

* [Addresses](docs/address.md)
* [Block](docs/block.md)
* [Crypto](docs/crypto.md)
* [Encoding](docs/encoding.md)
* [Hierarchically-derived Private and Public Keys](docs/hierarchical.md)
* [Networks](docs/networks.md)
* [PrivateKey](docs/privatekey.md)
* [PublicKey](docs/publickey.md)
* [Script](docs/script.md)
* [Transaction](docs/transaction.md)
* [Using Different Units](docs/unit.md)
* [Unspent Output](docs/unspentoutput.md)
* [URI](docs/uri.md)
* [Governance Object / Proposal](docs/govobject/govobject.md)

## Examples


## Modules


## Contributing

Please send pull requests for bug fixes, code optimization, and ideas for improvement. 

## Building the Browser Bundle

To build a suqacore-lib full bundle for the browser:

```sh
npm run build
```

This will generate files named `dashcore-lib.js` and `dashcore-lib.min.js` in the `dist/` folder.

## Usage on Browser

```
<script src='./dist/suqacore-lib.min.js' type="text/javascript"></script>
<script>
  const PrivateKey = suqacore.PrivateKey;
  const privateKey = new PrivateKey();
  const address = privateKey.toAddress().toString();
</script>
```

## Development & Tests

```sh
git clone https://github.com/crptec/suqacore-lib
cd suqacore-lib
npm install
```

Run all the tests:

```sh
npm test
```

You can also run just the Node.js tests with `npm run test:node`, just the browser tests with `npm run test:browser`
or run a test coverage report with `npm run coverage`.

## License

Code released under [the MIT license](LICENSE).
Copyright 2013-2017 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.  
Copyright 2016-2017 The Dash Foundation, Inc.  
 
