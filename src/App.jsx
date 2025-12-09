
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Welcome from './Components/welcome.jsx'
import Project from './Components/Project.jsx'
import Layout from './Components/Layout.jsx'
import Product from './Components/Product.jsx'
import Payment from './Components/Payment.jsx'
import ProductDetail from './Components/ProductDetail.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="welcome" element={<Welcome />} /> 
          <Route path="project" element={<Project />} />
          <Route path="product" element={<Product />} />
          <Route path="payment" element={<Payment />} />
          <Route path="/" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetail />} />

          <Route path='productDetail' element={<ProductDetail/>}/>
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App



