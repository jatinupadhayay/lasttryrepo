import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import './Navbar.css';
import logo from '../components/logo.png';
import threedot from '../components/threedot.png';
import {MdOutlineAccountCircle, MdSearch} from 'react-icons/md'
import {BsCart3} from 'react-icons/bs'

const Navbar = ({ searchTerm, setSearchTerm }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [category, setCategory] = useState(''); // State for selected category
  const [showProducts, setShowProducts] = useState(false); // State to show/hide products
  const [username, setUsername] = useState(''); // Store logged-in username
  const navigate = useNavigate(); // Use useNavigate for navigation

  useEffect(() => {
    // Fetch the username (or email) from local storage
    const storedUsername = localStorage.getItem('email');
    setUsername(storedUsername || 'Guest');
  }, []);

  const categories = {
    electronics: ['Headphones', 'TV', 'Fridge', 'Laptops', 'Smartphones', 'Camera'],
    clothing: ['Shirt', 'Jeans', 'Jacket', 'Shoes', 'Dress'],
    books: ['Fiction', 'Non-Fiction', 'Science', 'History', 'Biography'],
    furniture: ['Sofa', 'Table', 'Chair', 'Bed', 'Wardrobe'],
    beauty: ['Lipstick', 'Foundation', 'Perfume', 'Lotion', 'Face Mask'],
  };

  // Filtered products based on category and search term
  const filteredProducts = Object.entries(categories).reduce((acc, [key, products]) => {
    if (category === '' || category === key) {
      return acc.concat(
        products.filter(product => typeof product === 'string' && product.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    return acc;
  }, []);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value); // Update category
    setSearchTerm(''); // Clear search term
    //setShowProducts(true); // Show products when category is selected
    navigate(`/products/${event.target.value}`); // Navigate to product page for that category
};

  const handleSearchChange = (event) => {
    if(event.target.value === '') navigate('/')
    setSearchTerm(event.target.value); // Update search term
    navigate(`/search/${event.target.value}`)
  };

  const handleSearch = () => {
    console.log(`Searching for ${searchTerm} in category: ${category || 'All'}`);
    // You can replace this console log with your search functionality logic.
  };

  const handleToggleProducts = () => {
    setShowProducts(!showProducts); // Toggle product display on clicking three-dot icon
  };

  const handleSmartphoneClick = () => {
    setCategory('electronics');
    setSearchTerm('Smartphone');
    setShowProducts(true);
    navigate('/mobileshow'); // Navigate to /mobileshow route
  };

  return (
    <nav className="navbar">
      <div className="navbar-main">
        {/* Three-dot icon for additional menu */}
        <div className="threedot" onClick={handleToggleProducts}>
          <img src={threedot} alt="threedot" />
        </div>

        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Price Peek Logo" />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/registerlogin">Login</Link></li>
        </ul>

        {/* Search Bar */}
        <select value={category} onChange={handleCategoryChange} className="bg-zinc-100 rounded-full outline-none w-min px-4 py-1 text-black">
          <option value="">Select Category</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="books">Books</option>
            <option value="furniture">Furniture</option>
            <option value="beauty">Beauty</option>
          </select>
        <div className="bg-zinc-100 flex rounded-full px-4 py-1">
          <input 
            type="text" 
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder={`Search  Products`} 
            className='bg-zinc-100 outline-none text-black'
          />
          <button onClick={handleSearch}><MdSearch color='black' /></button>
        </div>

        {/* Cart Icon */}
        <div className="cart-icon">
        <Link to="/wishlist"><BsCart3 size={25} /></Link>

        </div>

        {/* Profile Dropdown */}
        <div className={`dropdown ${isDropdownVisible ? 'active' : ''}`}>
          <div className="profile-container" onClick={() => setIsDropdownVisible(!isDropdownVisible)}>
              <MdOutlineAccountCircle color='black' size={30} />
            <span className="profile-name">{localStorage.getItem('name')}</span> {/* Use username instead of email */}
          </div>
          {isDropdownVisible && (
            <div className="dropdown-menu">
              <Link className="dropdown-item" to="/MYprofile">My Profile</Link>
              <Link className="dropdown-item" to="/registerlogin">Login</Link>
            </div>
          )}
        </div>
      </div>

      {/* Product list display, only show if showProducts is true */}
      {showProducts && (
        <div className=" w-screen h-screen flex fixed top-0 z-10 bg-black/60 ">
         <div className='w-[35%] flex flex-col p-4 gap-4 h-screen bg-black/50 shadow-lg sidebarr '>
         <p className='text-xl font-bold'>Categories</p>
         <hr/>
         <div className='flex flex-wrap gap-4  '>
         {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <div key={index} className="bg-red-500/10 text-white shadow-[0px_0px_5px_white] hover:shadow-[0px_0px_5px_red] hover:bg-red-700 p-2 rounded-full px-4">
                <Link to={`/products/category/${product}`}>{product}</Link> 
                {/* Create a link for each product */}
              </div>
            ))
          ) : (
            <p>No products found</p>
          )}
         </div>
         </div>
         <div onClick={()=> {setShowProducts(false)}} className='grow'></div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
