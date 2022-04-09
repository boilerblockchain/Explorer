// DATA EXTRACTION FOR SEARCH BAR: localhost:3000/api/dataExtraction

// import statements
import { ethers } from "ethers";

// getting the provider from ethers and etherscan
var provider = ethers.providers.getDefaultProvider();
var etherscanProvider = new ethers.providers.EtherscanProvider();

// receiving userInput as req, fetching response and returning correct information
export default async function handler(req, res) {
  var isBlock;
  var isTransaction;
  var isPublicAddress;
  var isSmartContract;

  // taking request(string) and constructing the JavaScript object for it
  var userInput = JSON.parse(req.body);
  console.log(userInput);

  // if POST request, find out what the user has inputted and send response back accordingly
  if (req.method === "POST") {
    // check if block, if so send response
    try {
      await provider.getBlock(parseInt(userInput.userInput)).then((block) => {
        res.status(200).json(block);
      });
      isBlock = true;
    } catch (error) {
      isBlock = false;
    }

    // check if transaction, if so send response
    if (isBlock === false) {
      try {
        await provider.getTransaction(userInput.userInput).then((tx) => {
          res.status(200).json(tx);
        });
        isTransaction = true;
      } catch (error) {
        isTransaction = false;
      }
    }

    // check if public address, if so send response
    if (isTransaction === false && isBlock === false) {
      const contractCode = await provider.getCode(userInput.userInput);

      if (contractCode === "0x") {
        // we now know it is a public address

        // extracting transaction history and balance of address
        const history = await etherscanProvider.getHistory(userInput.userInput);
        let balance = await provider.getBalance(userInput.userInput);

        balance = ethers.utils.formatEther(balance);

        const response = {
          balance: balance,
          history: history,
        };

        res.status(200).json(response);

        isPublicAddress = true;
      } else {
        isPublicAddress = false;
      }
    }

    // check if smart contract address, if so send response
    if (
      isTransaction === false &&
      isBlock === false &&
      isPublicAddress === false
    ) {
      try {
        const contractCode = await provider.getCode(userInput.userInput);
        const contractBalance = await provider.getBalance(userInput.userInput);

        const response = {
          contractCode: contractCode,
          contractBalance: contractBalance,
        };

        res.status(200).json(response);
        isSmartContract = true;
      } catch (error) {
        isSmartContract = false;
      }
    }
  }
}
