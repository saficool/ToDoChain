import hre from "hardhat";

describe("ToDo", function () {
    let ToDo, toDo;
    beforeEach(async function () {
        ToDo = await hre.ethers.getContractFactory("ToDo");
        toDo = await ToDo.deploy();
    });
})