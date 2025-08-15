// import React, { useState, useEffect } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// const NavBar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   const textColor = menuOpen ? 'text-black' : (scrolled ? 'text-white' : 'text-white');

//   // Scroll listener
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const triggerHeight = 300; // Change this to match your hero section height

//       setScrolled(scrollY > triggerHeight);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navLinks = (
//     <>
//       <Link to='/' onClick={() => setMenuOpen(false)}>
//         <p className={`${textColor} cursor-pointer`}>Home</p>
//       </Link>
//       <Link to='/about' onClick={() => setMenuOpen(false)}>
//         <p className={`${textColor} cursor-pointer`}>Biography</p>
//       </Link>
//       <Link to='/services' onClick={() => setMenuOpen(false)}>
//         <p className={`${textColor} cursor-pointer`}>Hymns</p>
//       </Link>
//       <Link to='/portfolio' onClick={() => setMenuOpen(false)}>
//         <p className={`${textColor} cursor-pointer`}>Gallery</p>
//       </Link>
//       <Link to='/blog' onClick={() => setMenuOpen(false)}>
//         <p className={`${textColor} cursor-pointer`}>Tributes</p>
//       </Link>
//       <Link to='/contact' onClick={() => setMenuOpen(false)}>
//         <p className={`${textColor} cursor-pointer`}>Appreciation</p>
//       </Link>
//     </>
//   );

//   return (
//     <div
//       className={`fixed top-0 left-0 w-full z-50 px-6 py-5 lg:px-20 lg:py-5 flex items-center justify-between transition-all duration-300 ${
//         scrolled ? 'bg-black shadow-md' : 'bg-transparent'
//       }`}
//     >
//       <Link to='/'>
//         <p className='font-bold text-3xl lg:text-5xl cursor-pointer'>EDNA</p>
//       </Link>

//       {/* Desktop Nav */}
//       <div className="hidden lg:flex md:text-lg lg:text-lg lg:justify-between lg:items-center gap-12 items-center">
//         {navLinks}
//       </div>

//       {/* Hamburger Icon */}
//       <div
//         className="lg:hidden text-[#d19f68] text-2xl cursor-pointer z-50"
//         onClick={toggleMenu}
//       >
//         {menuOpen ? <FaTimes /> : <FaBars />}
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="absolute top-[100%] left-0 w-full bg-white flex flex-col gap-5 px-8 py-6 z-40">
//           {navLinks}
//         </div>
//       )}
//     </div>
//   );
// };

// export default NavBar;
