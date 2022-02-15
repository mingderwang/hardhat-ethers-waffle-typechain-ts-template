# Advanced Sample Hardhat Project

This project demonstrates an advanced Hardhat use case, integrating other tools commonly used alongside Hardhat in the ecosystem.

The project comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts. It also comes with a variety of other tools, preconfigured to work with the project code.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
npx hardhat help
REPORT_GAS=true npx hardhat test
npx hardhat coverage
npx hardhat run scripts/deploy.ts
TS_NODE_FILES=true npx ts-node scripts/deploy.ts
npx eslint '**/*.{js,ts}'
npx eslint '**/*.{js,ts}' --fix
npx prettier '**/*.{json,sol,md}' --check
npx prettier '**/*.{json,sol,md}' --write
npx solhint 'contracts/**/*.sol'
npx solhint 'contracts/**/*.sol' --fix
```

# Etherscan verification

To try out Etherscan verification, you first need to deploy a contract to an Ethereum network that's supported by Etherscan, such as Ropsten.

In this project, copy the .env.example file to a file named .env, and then edit it to fill in the details. Enter your Etherscan API key, your Ropsten node URL (eg from Alchemy), and the private key of the account which will send the deployment transaction. With a valid .env file in place, first deploy your contract:

```shell
hardhat run --network ropsten scripts/sample-script.ts
```

Then, copy the deployment address and paste it in to replace `DEPLOYED_CONTRACT_ADDRESS` in this command:

```shell
npx hardhat verify --network ropsten DEPLOYED_CONTRACT_ADDRESS "Hello, Hardhat!"
```
for example
```
npx hardhat verify --network rinkeby --contract contracts/BasicToken.sol:BasicToken 0x6cCBAA7D75A85569DA055219033B4Df646dBCd57 "1000"
```

# Performance optimizations

For faster runs of your tests and scripts, consider skipping ts-node's type checking by setting the environment variable `TS_NODE_TRANSPILE_ONLY` to `1` in hardhat's environment. For more details see [the documentation](https://hardhat.org/guides/typescript.html#performance-optimizations).

# use hardhat deploy plugin
```
➜  hardhat-ethers-waffle-typechain-ts-template git:(main) ✗ yarn hardhat deploy
yarn run v1.22.17
$ /Users/mingderwang/src/ming/test/waffle-test/hardhat-ethers-waffle-typechain-ts-template/node_modules/.bin/hardhat deploy
Nothing to compile
No need to generate any newer typings.
deployer 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
tokenOwner 0x70997970C51812dc3A010C7d01b50e0d17dc79C8
deploying "Token" (tx: 0xd6134bdc9ad09d2596d0b06d2b010b6b08697ee3da571af589e10a6dfa410514)...: deployed at 0x5FbDB2315678afecb367f032d93F642f64180aa3 with 483242 gas
```

# use chai-ethers in test
```
➜  hardhat-ethers-waffle-typechain-ts-template git:(main) ✗ npx hardhat test --network hardhat
No need to generate any newer typings.


  Token contract
deployer 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
tokenOwner 0x70997970C51812dc3A010C7d01b50e0d17dc79C8
    ✓ Deployment should assign the total supply of tokens to the owner (1143ms)
    ✓ Deployment should assign the total supply of tokens to the owner (77ms)


  2 passing (1s)

```
## test coverage
```
➜  hardhat-ethers-waffle-typechain-ts-template git:(main) ✗ yarn coverage
yarn run v1.22.17
$ npm run build && npx hardhat coverage --temp artifacts --network hardhat
npm WARN lifecycle The node binary used for scripts is /var/folders/dz/zp6pqbq95sq51v4spmz32k0r0000gn/T/yarn--1644892574966-0.2883337382690667/node but npm is using /Users/mingderwang/.nvm/versions/node/v14.19.0/bin/node itself. Use the `--scripts-prepend-node-path` option to include the path for the node binary npm was executed with.

> hardhat-waffle-template-ts@0.0.2 build /Users/mingderwang/src/ming/test/waffle-test/hardhat-ethers-waffle-typechain-ts-template
> npm run clean && npm run compile

npm WARN lifecycle The node binary used for scripts is /var/folders/dz/zp6pqbq95sq51v4spmz32k0r0000gn/T/yarn--1644892574966-0.2883337382690667/node but npm is using /Users/mingderwang/.nvm/versions/node/v14.19.0/bin/node itself. Use the `--scripts-prepend-node-path` option to include the path for the node binary npm was executed with.

> hardhat-waffle-template-ts@0.0.2 clean /Users/mingderwang/src/ming/test/waffle-test/hardhat-ethers-waffle-typechain-ts-template
> npx hardhat clean

npm WARN lifecycle The node binary used for scripts is /var/folders/dz/zp6pqbq95sq51v4spmz32k0r0000gn/T/yarn--1644892574966-0.2883337382690667/node but npm is using /Users/mingderwang/.nvm/versions/node/v14.19.0/bin/node itself. Use the `--scripts-prepend-node-path` option to include the path for the node binary npm was executed with.

> hardhat-waffle-template-ts@0.0.2 compile /Users/mingderwang/src/ming/test/waffle-test/hardhat-ethers-waffle-typechain-ts-template
> npx hardhat compile

Compiling 1 file with 0.7.6
Compiling 7 files with 0.8.5
Generating typings for: 8 artifacts in dir: typechain for target: ethers-v5
Successfully generated 15 typings!
Solidity compilation finished successfully

Version
=======
> solidity-coverage: v0.7.19

Instrumenting for coverage...
=============================

> BasicToken.sol
> Greeter.sol
> Token.sol

Compilation:
============

Compiling 1 file with 0.7.6
Compiling 7 files with 0.8.5
Generating typings for: 8 artifacts in dir: typechain for target: ethers-v5
Successfully generated 15 typings!
Solidity compilation finished successfully

Network Info
============
> HardhatEVM: v2.8.4
> network:    hardhat

No need to generate any newer typings.


  BasicToken
    ✓ Assigns initial balance
    ✓ Transfer adds amount to destination account
    ✓ Transfer emits event
    ✓ Can not transfer above the amount (41ms)
    ✓ Can not transfer from empty account

  Greeter
Deploying a Greeter with greeting: Hello, world!
Changing greeting from 'Hello, world!' to 'Hola, mundo!'
    ✓ Should return the new greeting once it's changed (156ms)

  Token contract
deployer 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
tokenOwner 0x70997970C51812dc3A010C7d01b50e0d17dc79C8
    ✓ Deployment should assign the total supply of tokens to the owner (153ms)
    ✓ should transfer Token work (69ms)


  8 passing (1s)

-----------------|----------|----------|----------|----------|----------------|
File             |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
-----------------|----------|----------|----------|----------|----------------|
 contracts/      |      100 |       50 |      100 |      100 |                |
  BasicToken.sol |      100 |      100 |      100 |      100 |                |
  Greeter.sol    |      100 |      100 |      100 |      100 |                |
  Token.sol      |      100 |       50 |      100 |      100 |                |
-----------------|----------|----------|----------|----------|----------------|
All files        |      100 |       50 |      100 |      100 |                |
-----------------|----------|----------|----------|----------|----------------|

> Istanbul reports written to ./coverage/ and ./coverage.json
✨  Done in 42.43s.
```
