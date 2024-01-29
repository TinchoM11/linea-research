/// RPC Providers: https://docs.linea.build/build-on-linea/tooling/node-providers
import dotenv from "dotenv";
dotenv.config();
import { ethers } from "ethers";

const LINEA_RPC = process.env.LINEA_RPC as string;

const createWallet = async () => {
  // It's an EVM Chain, so we should only add it into the EVM Chains wallets array
  // Creates a wallet using ethers.js
  console.log(`
    --------------------------------------------
    Creating a Wallet
    `);
  const wallet = ethers.Wallet.createRandom();
  console.log("Wallet Address:", wallet.address);
  console.log("Wallet Private Key:", wallet.privateKey);
  console.log(`
    --------------------------------------------
    Recover Wallet from PK
    `);
  const recoveredWallet = new ethers.Wallet(wallet.privateKey);
  console.log("Recovered Wallet Address:", recoveredWallet.address);
};

createWallet();
