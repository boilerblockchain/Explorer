import { ethers } from "ethers";

var provider = ethers.providers.getDefaultProvider();

export default async function handler(req, res) {
	const transactionHash = JSON.parse(req.body);
	if (req.method === "POST") {
		provider.getTransaction(transactionHash.transactionHash).then((block) => {
			res.status(200).json(block);
		});
	}
}