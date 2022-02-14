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
