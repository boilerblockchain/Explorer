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
					Block Details
				</Typography>
				<Table size="large" id="transactiontable">
					<TableBody>
						<TableRow>
							<TableCell>Block Height</TableCell>
							<TableCell>{props.blockInfo && props.blockInfo.number}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Timestamp</TableCell>
							<TableCell>{props.blockInfo && props.blockInfo.timestamp}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Transactions</TableCell>
							<TableCell>{props.blockInfo && props.blockInfo.transactions}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Mined by:</TableCell>
							<TableCell>{props.blockInfo && props.blockInfo.miner}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Block Reward</TableCell>
							<TableCell>--</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Uncles Reward</TableCell>
							<TableCell>--</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Difficulty</TableCell>
							<TableCell>{props.blockInfo && props.blockInfo._difficulty.hex}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Total Difficulty</TableCell>
							<TableCell>{props.blockInfo && props.blockInfo.difficulty}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Size:</TableCell>
							<TableCell>{props.blockInfo && props.blockInfo.transactions}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Gas Used</TableCell>
							<TableCell>{props.blockInfo && props.blockInfo.gasUsed.hex}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Gas Limit</TableCell>
							<TableCell>{props.blockInfo && props.blockInfo.gasLimit.hex}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Base fee Per Gas</TableCell>
							<TableCell>{props.blockInfo && props.blockInfo.baseFeePerGas.hex}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Burnt Fees</TableCell>
							<TableCell>{props.blockInfo && props.blockInfo.transactions}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Extra Data</TableCell>
							<TableCell>{props.blockInfo && props.blockInfo.extraData}</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</Container>
		</React.Fragment>
	);
}