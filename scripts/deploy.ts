import hre from "hardhat";

async function main() {
    const ToDo = await hre.ethers.getContractFactory("ToDo");
    const toDo = await ToDo.deploy();
    await toDo.deployed();
    console.log("Contract deployed at:", toDo.address);

    // 0x5FbDB2315678afecb367f032d93F642f64180aa3
}

main()
    .then(() => { process.exitCode = 0 })
    .catch((err) => { console.log(err), process.exitCode = 1 })