import { ethers } from "ethers";
import dotenv from "dotenv";
dotenv.config();

const RPC = process.env.LINEA_RPC as string;
const provider = new ethers.providers.JsonRpcProvider(RPC);

export const ERC20_ABI = [
  // Read-Only Functions
  "function balanceOf(address owner) view returns (uint256)",
  "function decimals() view returns (uint8)",
  "function symbol() view returns (string)",
  "function name() view returns (string)",
  "function transfer(address to, uint256 amount) returns (bool)",
];

const sendERC20Token = async () => {
  console.log("---------- Sending a Transaction of ERC20 Token ----------");
  const userWallet = new ethers.Wallet(RPC, provider);
  const erc20TokenContractAddress =
    "0x176211869cA2b568f2A7D4EE941E073a821EE1ff";
  const erc20TokenContract = new ethers.Contract(
    erc20TokenContractAddress,
    ERC20_ABI,
    userWallet
  );

  // Dirección del destinatario de la transferencia
  const toAddress = "0xd852dE59984ab0DB32F85E68D080ae598aDc63d9";

  const tokenDecimals = await erc20TokenContract.decimals();

  const amount = ethers.BigNumber.from("2000000"); // 2 USDC.e
  const txResponse = await erc20TokenContract.transfer(toAddress, amount);

  console.log("Transaction Hash Transfering ERC20 Token", txResponse.hash);
};
