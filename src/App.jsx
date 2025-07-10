

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Project from './Components/Project.jsx'
import Layout from './Components/Layout.jsx'
import Product from './Components/Product.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="project" element={<Project />} />
          <Route path="product" element={<Product/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App


