
import { Suspense, useState } from 'react'
import './App.css'
import AllCards from './Components/all-cards/AllCards'
import Banner from './Components/banner/Banner'
import CardSeperator from './Components/card-separator/CardSeperator'
import Navbar from './Components/navbar/Navbar'
import ThreeCards from './Components/threeCards/ThreeCards'
import TransparentCard from './Components/transparent-card/TransparentCard'
import Ready from './Components/ready-part/Ready'
import Footer from './Components/footer/Footer'

import  { Toaster } from 'react-hot-toast';

const productPromise= async()=>{
  const res = await fetch("/productData.json");

  return res.json();
}

function App() {

  const [cart,setCart]=useState(0);

      const productData = productPromise();
      console.log("product Data",productData);

  return (
    <div className="flex flex-col gap-8 md:gap-16">
     <Navbar cart={cart}></Navbar>
     <Banner></Banner>
     <CardSeperator></CardSeperator>

     <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
          <AllCards productData={productData} cart={cart} setCart={setCart}></AllCards>
     </Suspense>

     <ThreeCards></ThreeCards>
     <TransparentCard></TransparentCard>
     <Ready></Ready>
     <Footer></Footer>
     <Toaster />
    </div>
  )
}

export default App
