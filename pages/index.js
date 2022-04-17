// LANDING PAGE: localhost:3000/
import { useState } from "react";
import Button from "@mui/material/Button";
import Link from "next/Link";
import Grid from "@mui/material/Grid";
import axios from "axios";

// home page function
export default function Home() {
  // getting the user input in search bar
  const [userInput, setUserInput] = useState(0);
  const [info, setInfo] = useState(null);
  const [fetchedTokenbalances, setTokenBalances] = useState(null);

  // sending http request to backend (to receive info from userInput on search bar)
  const fetchData = () => {
    fetch("api/explorerData", {
      method: "POST",
      body: JSON.stringify({ userInput: userInput }),
    })
      .then((res) => res.json())
      .then((fetchedInfo) => {
        console.log(fetchedInfo);
        setInfo(fetchedInfo);
      });
  };

  // Search bar onClick handler
  const handleClick = (event) => {
    event.preventDefault();
    fetchData();
    // fetchTokenBalances();
  };

<<<<<<< HEAD
		var fetchTransactionInfo = () => {
			fetch("/api/transactionInfo", { method: "POST", body: JSON.stringify({ transactionHash: transactionHash }) })
				.then((res) => res.json())
				.then((data) => {
					// console.log(data);
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
					</Grid>
					<Grid item sx={{mt:2}}>
						<div>Enter Transaction Hash</div>
						<input value={transactionHash} onChange={(e) => setTransactionHash(e.target.value)} />
						<button
							style={{ height: 20, width: 100 }}
							onClick={(e) => fetchTransactionInfo()}
						>
							Fetch data
						</button>
					</Grid>
				</Grid>
				
				<Block blockInfo={blockInfo} />
			</div>
		);
	}

=======
  return (
    // Search Bar
    <div className="Search bar">
      <input
        value={userInput}
        type="text"
        placeholder="Search by Address, Txn Hash, Block"
        onChange={(event) => {
          setUserInput(event.target.value);
        }}
      />
      <button style={{ height: 20, width: 100 }} onClick={handleClick}>
        Search
      </button>
      {/* <Grid item>
        <Link href="./login">
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "15px" }}
          >
            Login/Register
          </Button>
        </Link>
      </Grid> */}
    </div>
  );
>>>>>>> ca0e56b18c2152d1c68f94ea44953e26134a03fc
}
