const { ethers } = require('hardhat');

async function main() {
  // Firstly, we need to get the getContractFactory of "Contract" for the first deployment
  const Contract = await ethers.getContractFactory('Intermediary');
  // For the first Contract deployment, .deploy() should be empty without address
  const contract = await Contract.deploy("0xBa85558f624A7905B9C64D6baae323CfE763F68C"); // This is the address of the first contract (Contract.sol) deployment

  await contract.waitForDeployment();
  const address = await contract.getAddress();

  console.log('contract address: ' + address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
});