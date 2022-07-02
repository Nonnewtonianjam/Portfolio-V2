import Head from 'next/head'
import Footer from './Footer'
import Nav from './Nav'

const Layout = ({children}) => {
  return (
    <container>
        <Nav/>
        {children}
        <Footer/>
    </container>
  )
}

export default Layout