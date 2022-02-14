import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return( 
  
<MoralisProvider
  appId="N2rkCGHa4tXwXHU08BuwHijVjlySfM8jUFzLzUbZ"
  serverUrl='https://xe6vo9q3zwsi.usemoralis.com:2053/server'>
  <Component {...pageProps}/>
  </MoralisProvider>
  )
}

export default MyApp
