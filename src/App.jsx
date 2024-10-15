import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FlashSales from './components/FlashSales';
import PopularSearch from './components/PopularSearch';
import ProductShowcase from './components/ProductShowcase';
import NewArrivals from './components/NewArrivals';
// import Carousel from './components/Carousel';
import RegisterLogin from './RegisterLogin'; // Register/Login component
import CreateAccount from './components/createaccount';
import HomePage from './components/HomePage';
import ProfileSettings from './components/MYprofile';
import SearchResults from './components/SearchResults';
import Smartphone from './components/Smartphone'; // Import the Mobileshow component
import './App.css';
import SearchForm from './components/SearchForm';
import Contact from './components/Contact';
import About from './components/About';
import Category from './components/Category';
import Footer from './components/Footer';
import UserWishlist from './components/UserWishlist'
function App() {
  const [searchTerm, setSearchTerm] = useState(''); // Search term state for input and results

  // // Function to fetch users (can be customized for other API calls)
  // const fetchUsers = async () => {
  //   try {
  //     const res = await fetch('http://localhost:8000/users', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json', // Set correct headers for the POST request
  //       },
  //       body: JSON.stringify({ /* your data here */ }), // Example for sending data
  //     });

  //     if (!res.ok) {
  //       throw new Error('Network response was not ok');
  //     }

  //     const json = await res.json();
  //     console.log(json); // Log fetched data for debugging
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  // // useEffect hook to trigger the API call once the component mounts
  // useEffect(() => {
  //   fetchUsers();
  // }, []); // Empty dependency array to call it once on component mount

  return (
    <Router>
      <div className="App ">
        {/* Navbar with search functionality */}
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <Routes>
          {/* Default homepage route */}
          <Route path="/" element={
            <main>
              {/* Carousel, Popular Search, Product Showcase, etc. */}
              <section className="banner">
                {/* <Carousel /> */}
              </section>
              <HomePage />
              <PopularSearch />
              <ProductShowcase />
              
              <Smartphone />
            </main>
          } />

          {/* Route for Register/Login page */}
          <Route path="/RegisterLogin" element={<RegisterLogin />} />
          <Route path="/Contact" element={<Contact/>} />
           pm 
          {/* Route for Create Account page */}
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/About" element={<About/>} />

          {/* Route for Profile settings page */}
          <Route path="/MYprofile" element={<ProfileSettings />} />
          <Route path="/products/category/:categoryName" element={<ProductShowcase />} />
          <Route path="/products/:category" element={<Category />} />


          {/* Route for SearchResults page */}
          <Route path="/search/:regex" element={<SearchResults searchTerm={searchTerm} />} />

          {/* Route for Mobileshow page */}
          <Route path="/Smartphone" element={<Smartphone />} /> {/* New route for Mobileshow */}
          <Route path="/wishlist" element={<UserWishlist />} /> {/* New route for Mobileshow */}

          {/* Add more routes as needed */}
        </Routes>
        <Footer></Footer>

      </div>
    </Router>
    
  );
}

export default App;
