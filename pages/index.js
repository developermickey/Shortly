import Head from 'next/head'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import InputArea from '../components/InputArea'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shortly - A app for short url solutions.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <>

      <HeroSection />
      <InputArea />      
      </>
        
    </div>
  )
}
