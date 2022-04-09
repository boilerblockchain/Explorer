// LANDING PAGE: localhost:3000/
import { useState } from "react";
import Button from "@mui/material/Button";
import Link from "next/Link";
import Grid from "@mui/material/Grid";

// home page function
export default function Home() {
  // getting the user input in search bar
  const [userInput, setUserInput] = useState(0);
  const [info, setInfo] = useState(null);

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
  };

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
      <Grid item>
        <Link href="./login">
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "15px" }}
          >
            Login/Register
          </Button>
        </Link>
      </Grid>
    </div>
  );
}
