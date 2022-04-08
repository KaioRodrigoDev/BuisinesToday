import '../styles/output.css'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen dark:bg-bg">
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
