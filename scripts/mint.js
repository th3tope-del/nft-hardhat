const hre = require("hardhat");

async function main() {
    const contractAddress = "0x1270988197fa5f1eF6Ce77DC110a5128D141B3c5";

    const MyNFT = await hre.ethers.getContractFactory("MyNFT");
    const nft = await MyNFT.attach(contractAddress);

    const tx = await nft.mintNFT(
        "0x0Aa544DF74D66749BAd1ACb0AEEeb3d376C2633E",
        "ipfs://bafkreie36bt24b2u3236y32a2zypaafw6vkrbxwjfutvy7ycbvpm7qndpu"
    );

    await tx.wait();

    console.log("NFT minted!");
}

main();