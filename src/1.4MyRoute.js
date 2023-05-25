import React from 'react'
// URL define 
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
// import First from './1.1First'
// import Second from './1.2Second'
// import Third from './1.3Tird'
// import Five from './1.5Five'
import Home from './components/Home'
import Layout from './pages/3.1Layout'
import Login from './pages/Login'
import Register from './pages/Register'
import Products from './pages/Products'
import About from './pages/About'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import NewCart from './redux/NewCart'
import Student from './redux/Student'

const MyRoute = () => {
  return (
    <Router>
        {/* it is parent element */}
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='products' element={<Products/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='productdetails/:productId' element={<ProductDetails/>}/>
            <Route path='cart' element={<Cart/>}/>
          </Route>
          <Route path='/redux/cart' element={<NewCart/>}/>
          <Route path='redux/student' element={<Student/>}/>
        </Routes>

    </Router>
  )
}

export default MyRoute