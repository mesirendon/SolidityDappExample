# Person DApp

This project shows the example discussed on Fedesoft's talks. This readme file changes upon tag versions on specific milestons.

## Basic setup

Before getting into the current folders and files' structure here is the basic steps to get the dependencies installed.

1. Installing nvm in order to have a simple Node environment & checking installation
2. Installing Node via nvm & checking installation
3. Installing Node mandatory packages globally (vue-cli, ganache-cli, truffle)
4. Starting a project on a new, empty folder (Person in this case)
5. Installing development dependencies for TDD & BDD (chai, chai as promised)
6. Checking folder structure
7. Optional. I recommend to have yarn installed. However, working directly using npm is OK. If you see a yarn command, you always can change it to npm.

Step shown above are summarized here:

```bash
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
$ command -v nvm
$ nvm install node
$ command -v npm
$ npm i -g vue-cli ganache-cli truffle
$ mkdir <~/path/to/project/parent/folder>/Person
$ cd <~/path/to/project/parent/folder>/Person
$ truffle init
$ yarn add -D chai chai-as-promise
```

## Configurations

Some configurations have to be done in this project to get it working.

- Pointing which blockchain network must be used in development (`truffle.js` file).

This tells truffle which network it has to use.

```JavaScript
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    }
  }
};
```

- Defining the way contracts have to be deployed (`migrations/2_deploy_contracts.js`).

The contracts required here will reside into `contracts/`.

```JavaScript
var Contract1 = artifacts.require("./Contract1.sol");
var Contract2 = artifacts.require("./Contract2.sol");
// ...
var ContractN = artifacts.require("./ContractN.sol");

module.exports = function(deployer) {
  deployer.deploy(Contract1);
  deployer.deploy(Contract2);
  // ...
  deployer.deploy(ContractN);
};
```

## Testing

Tests are executed via `truffle test`. Those are executed lexicographically, so I recommend using the format `test/XX-test.js`, where `XX` are numbers starting at `01`.

Tests, as shown in the packages installations, are run using [Chai](http://www.chaijs.com/). Hence, the idea is to write a single test and testing against the code.
