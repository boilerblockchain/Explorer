// User object (in Moralis Database) -> Wallets attribute -> wallet transaction history attribute, matrix attribute
//
// matrix:              total net worth        liquid funds       staked funds
//          ERC20
//
//          ERC721
//
//          ERC1155
//

// getting the provider from ethers and etherscan
var provider = ethers.providers.getDefaultProvider();
var etherscanProvider = new ethers.providers.EtherscanProvider();
var etherScanApi = require("etherscan-api").init(
  "8IQRSSDR3TBCZBJXDK7GVR1P6WCNM992U8"
);

var netWorth = 0;
var internaltx = [];

async function getWalletInfo() {
  // wallet used for testing
  var walletAddress = "0x27F28A88EC19B150676802B68cDA43aC707B91CE";

  // getting normal transaction history for this wallet
  let txlist = await etherscanProvider.getHistory(walletAddress);

  //
  try {
    let txlistinternal = await etherScanApi.account.txlistinternal(
      "",
      walletAddress,
      "1",
      "latest"
    );
    internaltx = txlistinternal.result;
  } catch (error) {
    console.log("No internal transactions!");
  }

  let balance = await provider.getBalance(walletAddress);
  balance = ethers.utils.formatEther(balance);

  // loop through txlist and find total net worth
  for (let i = 0; i < txlist.length; i++) {
    // console.log("Normal transaction: ");
    let isSending = false;
    let isRecieving = false;

    let amountTransferred = parseFloat(
      ethers.utils.formatEther(txlist[i].value)
    );
    // console.log("The amount transferred is: ", amountTransferred);

    let to = txlist[i].to.toString();
    let from = txlist[i].from.toString();
    let gasPrice = parseFloat(ethers.utils.formatEther(txlist[i].gasPrice));
    let receipt = await provider.getTransactionReceipt(txlist[i].hash);
    let gasUsed = parseFloat(ethers.utils.formatEther(receipt.gasUsed));
    let fee = gasPrice * gasUsed * 10 ** 18;
    // console.log("txn fee: ", fee);

    if (to === walletAddress) {
      isSending = false;
      isRecieving = true;
    } else {
      isSending = true;
      isRecieving = false;
    }

    if (isSending) {
      netWorth -= fee;
      let contractCode = await provider.getCode(to);

      if (contractCode === "0x") {
        // console.log("Sending Money!");
        netWorth -= amountTransferred;
      } else {
        netWorth -= amountTransferred;
      }
    } else if (isRecieving) {
      // console.log("Recieving Money!");
      let contractCode = await provider.getCode(from);

      if (contractCode === "0x") {
        netWorth += amountTransferred;
      } else {
        netWorth += amountTransferred;
      }
    }

    // console.log("Net worth is: ", netWorth);
    // console.log(" ");
  }

  // loop through internal transactions to modify total net worth
  for (let i = 0; i < internaltx.length; i++) {
    // console.log("Internal transaction: ");
    let isSending = false;
    let isRecieving = false;

    let amountTransferred = parseFloat(
      ethers.utils.formatEther(internaltx[i].value)
    );
    // console.log("The amount transferred is: ", amountTransferred);

    let to = internaltx[i].to.toString();
    // console.log(to, walletAddress.toLowerCase());
    let from = internaltx[i].from.toString();

    if (to === walletAddress.toLowerCase()) {
      isSending = false;
      isRecieving = true;
    } else {
      isSending = true;
      isRecieving = false;
    }

    if (isSending) {
      // console.log("Sending Money!");
      let contractCode = await provider.getCode(to);

      if (contractCode === "0x") {
        netWorth -= amountTransferred;
      } else {
        netWorth -= amountTransferred;
      }
    } else if (isRecieving) {
      let contractCode = await provider.getCode(from);

      if (contractCode === "0x") {
        netWorth += amountTransferred;
      } else {
        netWorth += amountTransferred;
      }
    }
    // console.log("Net worth is: ", netWorth);
    // console.log(" ");
  }

  console.log(netWorth);
  console.log(balance);
}

getWalletInfo();

// Procedure
// 1. If wallet_database_last_transaction == null  (initial data extraction)
//         Extract transaction history -> store in array/"wallet transaction history attribute"
//     Else if (wallet_database_last_transaction != null) && (wallet_database_last_transaction != wallet's_last_transaction) {
//              // update wallet_database_transactions
//              // keep extracting & adding latest transactions till (wallet_database_last_transaction == wallet's_last_transaction)
//     } Else { // case where no update / data extraction is required
//         do nothing
//     }
// 2. for each transaction in array:
//      check 'to' address to;
//      find out what 'to' address is;
//      check 'from'address;
//      find out what 'from' address is;
//      if Sending:
//          check what it's sending to;
//          if its a public address:
//              subtract from net worth;
//          if its a smart contract:
//              if lending protocol:
//                  add to staked funds;
//              else:
//                  subtract from net worth;
//      if Receiving:
//          check what it's receiving from;
//          if its a public address:
//              add to net worth;
//          if its a smart contract:
//              if lending protocol:
//                  subtract from staked funds;
//              else:
//                  add to net worth;
// 4. liquid funds = total net worth - staked funds
// check if this value corresponds to wallets current value
// 5. update information on the matrix object
