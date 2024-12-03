import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import { Toaster } from 'react-hot-toast'

const Layout = () => {
  return (
    <div className='max-w-7xl px-4 mx-auto'>
      <Header/>
      <Outlet/>
      <Footer/>
      <Toaster/>
    </div>
  )
}

export default Layout
