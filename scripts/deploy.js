const hre = require("hardhat")
// const { ethers } = require("ethers")

async function main() {
  const deployer = await hre.ethers.deployContract("BadKittie")
  await deployer.waitForDeployment()
  console.log("Deploying token contract address:", deployer.target)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
