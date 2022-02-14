import { ethers } from "hardhat";
import chai from "chai";
import { BasicToken__factory, BasicToken } from "../typechain";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

const { expect } = chai;

describe('BasicToken', async () => {
  let token: BasicToken;
  let wallet: SignerWithAddress;
  let walletTo: SignerWithAddress;

  beforeEach(async () => {
  const signers = await ethers.getSigners();
  [wallet, walletTo] = signers;
    const basictokenFactory = (await ethers.getContractFactory(
      "BasicToken",
      signers[0]
    )) as BasicToken__factory;
    token = await basictokenFactory.deploy(1000)
    await token.deployed();
  });

  it('Assigns initial balance', async () => {
    expect(await token.balanceOf(wallet.address)).to.equal(1000);
  });

  it('Transfer adds amount to destination account', async () => {
    await token.transfer(walletTo.address, 7);
    expect(await token.balanceOf(walletTo.address)).to.equal(7);
  });

  it('Transfer emits event', async () => {
    await expect(token.transfer(walletTo.address, 7))
      .to.emit(token, 'Transfer')
      .withArgs(wallet.address, walletTo.address, 7);
  });

  it('Can not transfer above the amount', async () => {
    await expect(token.transfer(walletTo.address, 1007)).to.be.reverted;
  });

  it('Can not transfer from empty account', async () => {
    const tokenFromOtherWallet = token.connect(walletTo);
    await expect(tokenFromOtherWallet.transfer(wallet.address, 1))
      .to.be.reverted;
  });
});
	
