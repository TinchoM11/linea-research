import { ethers } from "ethers";
import dotenv from "dotenv";
dotenv.config();

const RPC = process.env.LINEA_RPC as string;
const provider = new ethers.providers.JsonRpcProvider(RPC);

const sendNativeToken = async () => {
  console.log("---------- Sending a Transaction of Native Token ----------");
  const wallet = new ethers.Wallet(RPC, provider);

  const amount = ethers.BigNumber.from("10000000000000000"); // 0.01 ETH
  const transaction = {
    to: "0xd852dE59984ab0DB32F85E68D080ae598aDc63d9",
    value: amount,
  };

  try {
    const txResponse = await wallet.sendTransaction(transaction);
    console.log("Transaction Hash", txResponse.hash);
  } catch (error) {
    console.error("Error sending the transaction", error);
  }
};
