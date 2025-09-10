import React from 'react'
import Navbar from '../Home/Navbar'
import Test from './Test'
import { CartProvider } from 'react-use-cart'

export default function AllServices() {
  return (
    <CartProvider>
        <Navbar/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Test/>
    </CartProvider>
  )
}
