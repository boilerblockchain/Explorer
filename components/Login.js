// import styles from "../styles/Login.module.css";
// import Image from "next/image";
// import { useMoralis } from "react-moralis";

// function Login() {
//   const { authenticate, authError} = useMoralis();
//   return (
//     <div className={styles.login_container}>
//       <div className={styles.login_card}>
//         {/* <Image src={icon} width={100} height={100} /> */}
//         <div className={styles.sign_in_container}>
//           {authError && (
//             <p className={styles.error}>
//               {authError.name}
//               {authError.message}
//             </p>
//           )}
//           <button variant="contained" color="primary"
//             onClick={authenticate} 
//           >
//             Login with Moralis
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

import Image from "next/image";
import { useMoralis } from "react-moralis";
import styles from "../styles/Home.module.css";
import Logo from "./images/Web3Auth.svg";
import { useState } from "react";
import { Typography } from "@mui/material";

export default function Login() {
  const { authenticate, authError, isAuthenticating, Moralis } = useMoralis();

  const handleCustomLogin = async () => {
    await authenticate({
      provider: "web3Auth",
      clientId: "BAm4lPVRsL49TpWuzPd-L_tj1oiJb5ZeGGfDjk9-L2nwTEL4Hz9hH4lTlaEecWxTuTNzjpWRDuU-hnvh9Nz1AiM",
      chainId: Moralis.Chains.ETH_MAINET,
      loginMethodsOrder: ["google", "facebook", "twitter", "reddit", "discord", "twitch", "apple", "line", "github", "kakao", "linkedin", "weibo", "wechat", "email_passwordless"],
    });
  };

  return (
    <div className={styles.backgroundParent}>
        <div className={styles.cards}>
            <Image className={styles.img} src={Logo} width={80} height={80} />
            {!isAuthenticating && <p className={styles.green}>Please Login or Register</p>}
            {isAuthenticating && <p className={styles.green}>Authenticating</p>}
            {authError && (
            <p className={styles.error}>{JSON.stringify(authError.message)}</p>
            )}
            <div className={styles.buttonCard}>
                <button className={styles.loginButton} onClick={handleCustomLogin}>
                    Login or Register
                </button>
            </div>
        </div>
    </div>
  );
}