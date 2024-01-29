import { ethers } from "ethers";
import dotenv from "dotenv";
dotenv.config();

const LINEA_RPC = process.env.LINEA_RPC as string;

const provider = new ethers.providers.JsonRpcProvider(LINEA_RPC);
const getTxReceipt = async () => {
  console.log("LINEA Blockchain - Transaction Receipt");
  // Get Transaction Receipt:
  const txReceipt = await provider.getTransactionReceipt(
    "0x9db85c6b6d05e9f65a5a27e265610a5df1c0074af443e89f09056883aa8ad8b4"
  );
  console.log("--------------------");
  console.log("Get  Transaction Receipt:");
  console.log(txReceipt);
};

getTxReceipt();
