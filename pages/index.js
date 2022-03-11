import { useState } from "react";
import styles from "../styles/Home.module.css";
import isBlock from "./api/blockInfo";

export default function Home() {
  if (isBlock) {
    var [blockNo, setBlockNo] = useState(0);
    var [blockInfo, setBlockInfo] = useState(null);

    var fetchBlockInfo = (blockNo) => {
      fetch("/api/blockInfo")
        .then((res) => res.json())
        .then((data) => {
          setBlockInfo(data);
          console.log(data);
        });
    };

    // const blockNo = async () => {
    //   const response = await fetch("/api/blockInfo", {
    //     method: "POST",
    //     body: JSON.stringify({ blockNo }),
    //   });
    //   const data = await response.json();
    //   console.log(data);
    // };

    return (
      <div className={styles.container}>
        <div>Enter Block number or Transaction number</div>
        <input value={blockNo} onChange={(e) => setBlockNo(e.target.value)} />
        <button
          style={{ height: 20, width: 100 }}
          onClick={(e) => fetchBlockInfo(blockNo)}
        >
          Fetch data
        </button>
        <div>{blockInfo != null ? blockInfo.block : <></>}</div>
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
