import React from 'react'
import Head from 'next/head';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
const Master = ({children}) => {
  return (
    <div>
      <Head>
        <title>Codv Blog</title>
        <link rel="stylesheet" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
      </Head>
      <NavBar/>
      <div className='container main'>
        <div className="row">
          <main>
            {children}
          </main>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Master
