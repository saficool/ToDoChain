import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require('dotenv').config();

const PRIVATE_KEY = process.env.PRIVATE_KEY || ""
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL;

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337
    },
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 5
    }
  },
  paths: {
    artifacts: "D:/PixyDelta/ToDo/src/artifacts"
  }
};

export default config;
