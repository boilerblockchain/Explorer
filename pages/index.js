import { useState } from "react";
import styles from "../styles/Home.module.css";
import isBlock from "./api/blockInfo";
import Table from "../components/common/Table";
import Grid from '@mui/material/Grid';

export default function Home() {
	if (isBlock) {
		var [blockNo, setBlockNo] = useState(0);
		var [blockInfo, setBlockInfo] = useState(null);

		var [transactionHash, setTransactionHash] = useState(0);
		var [transactionInfo, setTransactionInfo] = useState(null);

		var fetchBlockInfo = () => {
			fetch("/api/blockInfo", { method: 'POST', body: JSON.stringify({ blockNo: blockNo }) })
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					setBlockInfo(data);
				});
		};

		var fetchTransactionInfo = () => {
			fetch("/api/transactionInfo", { method: "POST", body: JSON.stringify({ transactionHash: transactionHash }) })
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					setTransactionInfo(data);
				})
		};

		return (
			<div className={styles.container}>
				<Grid container direction="column" justifyContent="center" alignItems="center">
					<Grid item>
						<h1>Blockchain Explorer</h1>
					</Grid>
					<Grid item>
						<div>Enter Block number</div>
						<input value={blockNo} onChange={(e) => setBlockNo(e.target.value)} />
						<button
							style={{ height: 20, width: 100 }}
							onClick={(e) => fetchBlockInfo()}
						>
							Fetch data
						</button>
						<div>{blockInfo != null ? blockInfo : <></>}</div>
					</Grid>
					<Grid item>
						<div>Enter Transaction Hash</div>
						<input value={transactionHash} onChange={(e) => setTransactionHash(e.target.value)} />
						<button
							style={{ height: 20, width: 100 }}
							onClick={(e) => fetchTransactionInfo()}
						>
							Fetch data
						</button>
						<div>{blockInfo != null ? transactionInfo : <></>}</div>
					</Grid>
				</Grid>

			</div>
		);
	}
	// else {
	//   var [transactionHash, setTransactionHash] = useState(0);
	//   var [transactionInfo, setTransactionInfo] = useState(null);

	//   var fetchTransactionInfo = (transactionHash) => {
	//     fetch("/api/transactionInfo")
	//       .then((res) => res.json())
	//       .then((data) => {
	//         setTransactionInfo(data);
	//         console.log(data);
	//       });
	//   };

	//   return (
	//     <div className={styles.container}>
	//       <div>Enter Block number or Transaction number</div>
	//       <input
	//         value={transactionHash}
	//         onChange={(event) => setTransactionInfo(event.target.value)}
	//       />
	//       <button
	//         style={{ height: 20, width: 100 }}
	//         onClick={(e) => fetchTransactionInfo(transactionHash)}
	//       >
	//         Fetch data
	//       </button>
	//       <div>
	//         {transactionInfo != null ? transactionHash.transaction : <></>}
	//       </div>
	//     </div>
	//   );
	// }
}
