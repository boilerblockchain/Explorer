import { ethers } from "ethers";

var provider = ethers.providers.getDefaultProvider();

export default async function handler(req, res) {
	const blockNo = JSON.parse(req.body);
	if (req.method === "POST") {
		provider._getBlock(parseInt(blockNo.blockNo)).then((block) => {
			res.status(200).json(block);
		});
	}
}