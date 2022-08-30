import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navb from "./components/Nav/Nav";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import NotFound from "./pages/notfound/NotFound";
import Products from "./pages/products/Products";
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Navb />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}