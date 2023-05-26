import React from 'react'
import '../style/App.css'
import '../style/index.css'
import About from '../componenets/about'
import Contact from '../componenets/contact'
import Projects from '../componenets/projects'
export default function Home() {
  return (
    <>
    <Projects/>
    <Contact/>
    <About/>
    </>
  )
}
