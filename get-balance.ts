import { ethers } from "ethers";
import dotenv from "dotenv";
import {
  covalentGetERC20Balances,
} from "./covalent-utils";
import { getNFTWithNFTScan } from "./nft-scan";
dotenv.config();

const LINEA_RPC = process.env.LINEA_RPC as string;

const provider = new ethers.providers.JsonRpcProvider(LINEA_RPC);
const getBalance = async () => {
  console.log("--------------------------------------");
  console.log("LINEA Blockchain - Native Balance");
  const balance = await provider.getBalance(
    "0xDf9a709C649634AE724D5A26634c1425a28930C3",
    "latest"
  );

  // Balance of Specific Address:
  console.log("ETH Balance (Linea Blockchain):");
  console.log(balance.toString());
};

const getERC20TokenBalancesWithCovalent = async () => {
  covalentGetERC20Balances(
    "0xDf9a709C649634AE724D5A26634c1425a28930C3",
    "linea-mainnet"
  );
};

const getNFTs = async () => {
  const nfts = await getNFTWithNFTScan("0xDf9a709C649634AE724D5A26634c1425a28930C3");
    console.log("NFTs:", nfts);
};

//getBalance();
//getERC20TokenBalancesWithCovalent();
getNFTs();
