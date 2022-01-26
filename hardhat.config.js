require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {},
    rinkeby: {
      url: process.env.NEXT_PUBLIC_API_URL,
      accounts: [`0x${process.env.REACT_APP_PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: process.env.REACT_APP_ETHERSCAN_API_KEY,
  },
};

// module.exports = {
//   solidity: "0.8.4",
//   defaultNetwork: "polygon_mumbai",
//   networks: {
//     hardhat: {},
//     polygon_mumbai: {
//       url: process.env.NEXT_PUBLIC_API_URL,
//       accounts: [`0x${process.env.REACT_APP_PRIVATE_KEY}`],
//     },
//   },
//   etherscan: {
//     apiKey: process.env.REACT_APP_POLYGONSCAN_API_KEY,
//   },
// };

// RINKEBY
// 0xBc50e982F293A27D4234139Dc80fF4F3D4D02641

// POLYGON
// 0xB48acc610111A110A16D4853539c2496D0F62c21
