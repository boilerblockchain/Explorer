import { ethers } from "ethers";

var provider = ethers.providers.getDefaultProvider();

export default function handler(req, res) {
	if (req.method === "GET") {
		provider.getBlock().then((block) => {
			res.status(200).json(block);
		});
	}
}

function isBlock() {
	if (provider.getBlock == null) {
		return false;
	} else {
		return true;
	}
}
