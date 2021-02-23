import React from 'react'
import Header from "../components/header"
import Footer from "../components/footer"

// import Navbar from './_Navbar'
import './style.css'



const TemplateWrapper = ({ children }) => (
  <div>
    <Header />

    <div>{children}</div>
    <Footer />
  </div>
)

export default TemplateWrapper
