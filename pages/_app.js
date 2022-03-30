import '../styles/globals.css'
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
import "regenerator-runtime/runtime";

function MyApp({ Component, pageProps }) {
  // const supportedChainIds = [1, 4];

  // const connectors = {
  //   injected: {},
  // };
  // // return <Component {...pageProps} />

  // return (
  //   <ThirdwebWeb3Provider
  //     supportedChainIds={supportedChainIds}
  //     connectors={connectors}
  //   >
  //     <Component {...pageProps} />
  //   </ThirdwebWeb3Provider>
  // );
  return(
  <MoralisProvider
    appId="gOEa0gfz1vjuY8aKyobuWr7ObO2ok2ViPSfhGQN7"
    serverUrl="https://6wh3wpqsj0th.usemoralis.com:2053/server"
  >
    {<Component {...pageProps} />}
  </MoralisProvider>
  )
  
}

export default MyApp
