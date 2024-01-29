import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const API_KEY = process.env.NFT_SCAN_API_KEY;

export const getNFTWithNFTScan = async (address: string): Promise<any> => {
  const apiUrl = `https://lineaapi.nftscan.com/api/v2/account/own/all/${address}?erc_type=&show_attribute=false&sort_field=&sort_direction=`;

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        "X-API-KEY": API_KEY,
      },
    });

    let nftBalances: any[] = [];
    response.data.data.map((token: any) => {
      const nftItems = token.assets;
      nftItems.forEach((nftItem: any) => {
        nftBalances.push({
          address: nftItem.contract_address,
          img: nftItem.image_uri,
          name: nftItem.contract_name,
          tokenType: nftItem.erc_type,
        });
      });
    });

    return nftBalances;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
