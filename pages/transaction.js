import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Container, Typography } from '@mui/material';

export default function Block(props) {
	/**
	 * So props.blockInfo contains all the info about the block
	 * Just go through the rows and add a cell with the info
	 * For example, timestamp would be props.blockInfo.timestamp
	 * You can check all the info that is returned in the console
	 * in Chrome. I already log the info into the console in the line
	 * below.
	 */
	console.log(props.blockInfo)
	return (
		<React.Fragment>
			<Container component="main" maxWidth="lg" sx={{ mt: 10 }}>
				<Typography component="h5" variant="h5" sx={{ mb: 2 }}>
					Transaction Details
				</Typography>
				<Table size="large" id="transactiontable">
					<TableBody>
						<TableRow>
							<TableCell>Transaction Hash:</TableCell>
							<TableCell>{props.blockInfo && props.blockInfo.number}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Status:</TableCell>
							<TableCell>{props.blockInfo && props.blockInfo.timestamp}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Block:</TableCell>
							<TableCell>{props.blockInfo && props.blockInfo.transactions}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Timestamp:</TableCell>
							<TableCell>{props.blockInfo && props.blockInfo.miner}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>From:</TableCell>
							<TableCell>--</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Interacted With (To):</TableCell>
							<TableCell>--</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Tokens Transferred:</TableCell>
							<TableCell>{props.blockInfo && props.blockInfo._difficulty.hex}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Value:</TableCell>
							<TableCell>{props.blockInfo && props.blockInfo.difficulty}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Transaction Fee:</TableCell>
							<TableCell>{props.blockInfo && props.blockInfo.transactions}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Gas Price:</TableCell>
							<TableCell>{props.blockInfo && props.blockInfo.gasUsed.hex}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Gas Limit & Usage by Txn:</TableCell>
							<TableCell>{props.blockInfo && props.blockInfo.gasLimit.hex}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Gas Fees:</TableCell>
							<TableCell>{props.blockInfo && props.blockInfo.baseFeePerGas.hex}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Burnt & Txn Savings Fees:</TableCell>
							<TableCell>{props.blockInfo && props.blockInfo.transactions}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Others:</TableCell>
							<TableCell>{props.blockInfo && props.blockInfo.extraData}</TableCell>
						</TableRow>
                        <TableRow>
							<TableCell>Input Data:</TableCell>
							<TableCell>{props.blockInfo && props.blockInfo.extraData}</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</Container>
		</React.Fragment>
	);
}