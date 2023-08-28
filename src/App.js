import Navbar from "./Components/Navbar/Navbar";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import SignIn from "./Components/SignIn/SignIn";
import axios from "axios";
import { useEffect, useState } from "react";
import Cart from "./Components/Cart/Cart";
function App() {


  const [products, setProducts] = useState([])

  useEffect(()=>{
      // axios.get('https://api.escuelajs.co/api/v1/products').then((res)=>{
      axios.get('https://fakestoreapi.com/products').then((res)=>{
        // console.log(res.data);
        setProducts(res.data);
      })
  }, [])



  return (
    <Router>
    <div  >
      <Navbar />


      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
