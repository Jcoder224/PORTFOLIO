import React from 'react'
import './home.css'
import Navbar from '../Components/Navbar/navbar'
import Hero from '../Components/Hero/hero'
import Parallex from '../Components/Parallex/parallex'
import ParallexTwo from '../Components/Parallex-2/parallexTwo'
import Services from '../Components/Services/services'
import Portfolio from '../Components/Portfolio/portfolio'
import Contact from '../Components/Contact/contact'
import Cursor from '../Components/Cursor/cursor'

const home = () => {
  return (
    <div>
      <Cursor />
      <section id='Homepage'>
        <Navbar />
        <Hero />
      </section>
      <section id='Services'><Parallex /></section>
      <section className='Three'><Services /></section>
      <section id='Portfolio'><ParallexTwo /></section>
      <Portfolio />
      <section id='Contact'><Contact /></section>
    </div>
    // <Test/>
  )
}

export default home
