require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
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
  defaultNetwork: "kovan",
  networks: {
    hardhat: {
    },
    kovan: {
      url: "https://eth-kovan.alchemyapi.io/v2/T4lc5ScEju5snt53GAYvvjXFUsL8TK5_", // kovan url https
      accounts: ["6dc77a790b50c012a82f81cafbc26b073d4984be7942559878a0d02fe53085ef"] //meta private key
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "HI39E2279HZPKRWNFAYGSWFAUH2C5VXFED"
  },
  solidity: "0.8.4",
};
