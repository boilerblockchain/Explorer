import { ethers } from "ethers";
import Table from "../../components/common/table";

var provider = ethers.providers.getDefaultProvider();

// export default function handler(req, res) {
//   if (req.method === "GET") {
//     provider.getBlock().then((block) => {
//       res.status(200).json(block);
//     });
//   }

  //   if (req.method === "POST") {
  //     const blockNo = req.body.blockNo;
  //     res.status(201).json(blockNo);
  //   }
// }

// function isBlock() {
//   if (provider.getBlock == null) {
//     return false;
//   } else {
//     return true;
//   }
// }

export default function blockInfo() {
  return (
    <Table />
  )
}
