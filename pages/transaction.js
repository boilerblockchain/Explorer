import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Grid, Container, Typography} from '@mui/material'
// import Title from './Title';

// Generate Order Data
// function createData(id, date, name, shipTo, paymentMethod, amount) {
//   return { id, date, name, shipTo, paymentMethod, amount };
// }

// function createData(id, date, name, shipTo, paymentMethod, amount) {
//     return { id, date, name, shipTo, paymentMethod, amount };
//   }

// const rows = [
//   createData(
//     0,
//     '16 Mar, 2019',
//     'Elvis Presley',
//     // 'Tupelo, MS',
//     // 'VISA ⠀•••• 3719',
//     // 312.44,
//   ),
//   createData(
//     1,
//     '16 Mar, 2019',
//     'Paul McCartney',
//     // 'London, UK',
//     // 'VISA ⠀•••• 2574',
//     // 866.99,
//   ),
//   createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
//   createData(
//     3,
//     '16 Mar, 2019',
//     'Michael Jackson',
//     // 'Gary, IN',
//     // 'AMEX ⠀•••• 2000',
//     // 654.39,
//   ),
//   createData(
//     4,
//     '15 Mar, 2019',
//     'Bruce Springsteen',
//     // 'Long Branch, NJ',
//     // 'VISA ⠀•••• 5919',
//     // 212.79,
//   ),
// ];

// function preventDefault(event) {
//   event.preventDefault();
// }

export default function Orders() {
  return (
    <React.Fragment>
       
      <Container component="main" maxWidth="md" sx={{mt:10}}>
        <Typography component="h5" variant="h5">
          Transaction Details
        </Typography>
            {/* <Title>Recent Orders</Title> */}
            <Table size="small" id="transactiontable">
                {/* <TableHead>
                <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Name</TableCell>
                </TableRow>
                </TableHead> */}
                <TableBody>
                {/* {rows.map((row) => ( */}
                    <TableRow>
                        <TableCell>Block Height</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Timestamp</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Transactions</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Mined by:</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Block Reward</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Uncles Reward</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Difficulty</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Total Difficulty</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Size:</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Gas Used</TableCell>
                    </TableRow>     
                    <TableRow>
                      <TableCell>Gas Limit</TableCell>
                    </TableRow> 
                    <TableRow>
                      <TableCell>Base fee Per Gas</TableCell>
                    </TableRow> 
                    <TableRow>
                      <TableCell>Burnt Fees</TableCell>
                    </TableRow> 
                    <TableRow>
                      <TableCell>Extra Data</TableCell>
                    </TableRow> 
                {/* ))} */}
                </TableBody>
            </Table>
            {/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
                See more orders
            </Link> */}
      </Container>
   </React.Fragment>
   
  );
}