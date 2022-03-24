export const getStaticProps = async () => {
	const response = await fetch(hello.js);
	const data = await response.json();

	return {
		props: {
			data
		}
	}

};

export default function Table({ data }) {
	//   export default function Table({data}){
	//     const {results = []} = data;
	return (
		<div>
			<table>
				<tr>
					<td><h4>Block Height:</h4></td>
					<td>14398259</td>
				</tr>
				<tr>
					<td><h4>Timestamp:</h4></td>
					<td>42 secs ago (Mar-16-2022 02:50:14 PM +UTC)</td>
				</tr>
				<tr>
					<td><h4>Transactions:</h4></td>
					<td>63 transactions</td>
				</tr>
				<tr>
					<td><h4>Mined by:</h4></td>
					<td>Flexpool.io</td>
				</tr>
				<tr>
					<td><h4>Block Reward:</h4></td>
					<td>2.010055391882000754 Ether (2 + 0.217075451384953714 - 0.20702005950295296)</td>
				</tr>
				<tr>
					<td><h4>Uncles Reward:</h4></td>
					<td>0</td>
				</tr>
				<tr>
					<td><h4>Difficulty:</h4></td>
					<td>3,158,391,754,205,022</td>
				</tr>
				<tr>
					<td><h4>Total Difficulty:</h4></td>
					<td>43,928,468,235,252,952,445,583</td>
				</tr>
				<tr>
					<td><h4>Size:</h4></td>
					<td>25,010 bytes</td>
				</tr>
				<tr>
					<td><h4>Gas Used:</h4></td>
					<td>4,248,288 (14.13%)</td>
				</tr>
				<tr>
					<td><h4>Gas Limit:</h4></td>
					<td></td>
				</tr>
				<tr>
					<td><h4>Base Fee per Gas:</h4></td>
					<td></td>
				</tr>
				<tr>
					<td><h4>Burnt Fee:</h4></td>
					<td></td>
				</tr>
				<tr>
					<td><h4>Extra Data</h4></td>
					<td>042ir042jriewrpo</td>
				</tr>
				<tr>
					<td><h4>Hash:</h4></td>
					<td></td>
				</tr>
				<tr>
					<td><h4>Parent Hash:</h4></td>
					<td></td>
				</tr>
				<tr>
					<td><h4>Sha3Uncles:</h4></td>
					<td></td>
				</tr>
				<tr>
					<td><h4>StateRoot:</h4></td>
					<td></td>
				</tr>
				<tr>
					<td><h4>Nonce:</h4></td>
					<td></td>
				</tr>
			</table>
		</div>
	)
};