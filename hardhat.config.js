require("@nomiclabs/hardhat-waffle");

const projectId = "PrXA4t7kR0idk_rcYzvSAMY1R4EPOFFC";

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/PrXA4t7kR0idk_rcYzvSAMY1R4EPOFFC",
    },
    mainnet: {
      url: "https://eth-mainnet.alchemyapi.io/v2/PrXA4t7kR0idk_rcYzvSAMY1R4EPOFFC",
    },
  },
};
