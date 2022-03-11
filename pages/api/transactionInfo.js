import { ethers } from "ethers";

var provider = ethers.providers.getDefaultProvider();

export default function handler(req, res) {
  provider
    .getTransaction(
      "0x4f32975ce1115bedaed00d6677253f16da08a6118759ddadd2eba00da06ea31b"
    )
    .then((transaction) => {
      res.status(201).json(transaction);
    });
}

function isTransaction() {
  if (provider.getTransaction == null) {
    return false;
  } else {
    return true;
  }
}
