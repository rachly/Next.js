import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import Layout from '../src/components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  
  return(<Layout>
    <Component {...pageProps} />
    </Layout>) 
}

export default MyApp
