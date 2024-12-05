const { ethers } = require('hardhat');

const CONTRACT_ADDRESS = "0x18d86b70d82eEE617e3614fD652F1Bfe4AFBdf5f"; // this is the intermediary contract address that will become the winner (msg.sender)

async function main() {
  const Intermediary = await ethers.getContractAt('Intermediary', CONTRACT_ADDRESS);
  const attempt = await Intermediary.callAttempt();

  await attempt.wait();
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });