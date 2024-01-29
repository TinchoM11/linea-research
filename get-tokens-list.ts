import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const RPC = process.env.LINEA_RPC as string;

interface token {
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  chain: string;
  logoURI: string;
}

const getSupportedTokens = async () => {
  // https://li.quest/v1/tokens?chains=lna
  const response = await axios.get(`https://li.quest/v1/tokens?chains=lna`);
  const tokensList = response.data.tokens["59144"];
  let tokensArray: token[] = [];
  tokensList.forEach((token: token) => {
    tokensArray.push({
      address: token.address,
      name: token.name,
      symbol: token.symbol,
      decimals: token.decimals,
      chain: "LINEA",
      logoURI: token.logoURI,
    });
  });
  console.log(tokensArray);
};

getSupportedTokens();
