import React, { useState } from 'react'
import LOGO from '../../assets/logoovv.png'
import Navbar from './Navbar'
import MobileNav from './MobileNav';
import './Menubar.css'
import { Link } from 'react-router-dom';
const Menubar = () => {

  const [hamToggle, setHamToggle] = useState(false);
  const [query, setQuery] = useState('');

  const handleSearch = (searchText) => {
    navigate('/news', { state: { searchQuery: searchText } }); // Pass search text to blog page
  };
  return (
    <div>
      {/* Desktop View */}
      <div
        className='d-none d-xl-flex'
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: "linear-gradient(to right, var(--navgradientfrom), var(--navgradientto))"
        }}
      >
        <Link to="/">
          <img src={LOGO} title='Oviya MedSafe company logo.' className='p-0 m-0' alt="Oviya MedSafe - Global Pharmacovigilance Consulting & Drug Safety Services" style={{height: "65px"}} />
        </Link>
        
        {/* Navbar */}
        <Navbar />
        
        {/* Search Bar */}
        <div className="d-flex align-items-center" style={{paddingRight: '28px'}}>
          <div
            className="input-group"
            style={{
              maxWidth: '300px',
              borderRadius: '100px',
              overflow: 'hidden', // Ensures child elements respect borderRadius
              boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
            }}
          >
            <span className="input-group-text bg-white border-0" style={{color: 'var(--heading)'}}>
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              className="form-control border-0"
              placeholder="Search"
              style={{
                borderRadius: '0', // Ensures the input field does not override parent radius
                outline: 'none', // Removes focus outline
                boxShadow: 'none', // Removes any shadow applied during focus
              }}
            />
          </div>
        </div>

      </div>

     {/* Mobile View */}
     <div
        className="d-flex d-xl-none align-items-center"
        style={{
          justifyContent: 'space-between',
          padding: '',
          background: "linear-gradient(to right, var(--navgradientfrom), var(--navgradientto))",
          height: '60px',
        }}
      >
        {/* Logo */}
        <Link to={"/"}>
          <img src={LOGO} alt="Logo" className='p-0 m-0' style={{ height: '60px'}}  />
        </Link>
       

        {/* Hamburger Menu */}
        <div
          className="d-flex align-items-center"
          onClick={() => setHamToggle(!hamToggle)}
        >
          <i
            className="bi bi-list"
            style={{
              fontSize: '45px',
              color: 'white',
              paddingRight: '1rem',
            }}
          ></i>
        </div>
      </div>

      {/* Dropdown Container with Smooth Animation */}
      <div
        style={{
          maxHeight: hamToggle ? '370px' : '0', // Dynamic height
          overflow: 'hidden', // Prevent content overflow
          background: '#fff',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
          transition: 'max-height 0.5s ease-in-out', // Smooth transition
          alignItems: 'right',
          
        }}
      >
        <MobileNav setHamToggle={setHamToggle} />

        {/* Search Bar */}
        <div className="d-flex align-items-center" style={{paddingLeft: '3rem', paddingBottom: '20px'}}>
          <div
            className="input-group"
            style={{
              maxWidth: '300px',
              borderRadius: '100px',
              overflow: 'hidden', // Ensures child elements respect borderRadius
              boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
            }}
          >
            <span className="input-group-text bg-white border-0" style={{color: 'var(--heading)'}}>
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              className="form-control border-0"
              placeholder="Search"
              onChange={(e) => handleSearch(e.target.value)}
              style={{
                borderRadius: '0', // Ensures the input field does not override parent radius
                outline: 'none', // Removes focus outline
                boxShadow: 'none', // Removes any shadow applied during focus
              }}
            />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Menubar

