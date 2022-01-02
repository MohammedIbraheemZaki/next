import '../styles/globals.css'
import Master from '../layouts/master'
function MyApp({ Component, pageProps }) {
  return (
    <Master>
      <Component {...pageProps} />
    </Master>
  )
}

export default MyApp
