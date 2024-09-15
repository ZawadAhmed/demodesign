import React, { useState, useEffect } from "react";
import Logo from '../BeigeLogo.svg'
import world from '../icons/world.svg'
// import { motion } from "framer-motion";
//  import CloseIcon from '@mui/icons-material/Close';
//  import MenuIcon from '@mui/icons-material/Menu';
//  import ThemeToggleButton from "../../ThemeToggleButton";

const Navlink = [
  {
    title: "About Us",
    path: "/about",
  },
  {
    title: "Explore",
    dropdown: [
    
      {
        title: "Stories",
        path: "/collection/exploreStories",
      },
      {
        title: "Art",
        path: "/collection/exploreArt",
      },
    ],
  },
  {
    title: "Support",
    path: "/support",
  },
];

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  

  useEffect(() => {
    // Update the navbar height on mount and resize
    const updateNavbarHeight = () => {
      const navbar = document.querySelector('nav');
      setNavbarHeight(navbar ? navbar.offsetHeight : 0);
    };

    updateNavbarHeight();
    window.addEventListener('resize', updateNavbarHeight);

    return () => {
      window.removeEventListener('resize', updateNavbarHeight);
    };
  }, []);


  return (
    <nav className="fixed shadow-lg max-w-[100%] w-full bg-c-white h-24 z-10  ">
      <div className="flex items-center justify-between px-4 py-4 mx-6">
        
        <div className="flex items-center font-semibold mx-6S">
        <a href="/" className="">
        <img src={Logo} className="h-12 w-36" alt="logo" />
        </a>
        </div>
        

        <div className="flex items-center space-x-6 mt-4">
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-500">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-500">Gesuch stellen</a>
            <a href="#" className="text-gray-700 hover:text-blue-500">Über uns</a>
         
            
            <div className="flex items-center space-x-2">
            <img src={world} className="color-prblue" alt="logo" /> 
            <a href="#" className="text-gray-700 hover:text-blue-500">DE</a>
            <span>|</span>
            <a href="#" className="text-gray-700 hover:text-blue-500">EN</a>
            </div>

            <div className="space x-6">
             <a href="#" className="bg-prblue text-white px-12 py-4 pt-4 rounded hover:bg-blue-600 transition"
                style={{height: '50px', width: '150px'}}>
            Kontakt
             </a>
            </div>
          </div>

        
        </div>
          

      {/* Mobile screen  */}
     <div className="block md:hidden relative z-50">
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              {/* {navbarOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />} */}
            </button>
  

        {navbarOpen && (
        <div className="absolute md:hidden top-full mt-2  bg-custom z-40">
        <ul className=" flex flex-col space-y-4 mt-4 px-4 py-2" >
          {Navlink.map((link, index) => (
          <li key={index} className="w-full">
          {link.dropdown ? (
            <>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-custom hover:text-green-400 w-full text-left"
              >
                {link.title}
              </button>
              {dropdownOpen && (
                <ul className="pl-4 mt-2 w-full text-custom z-40">
                  {link.dropdown.map((item, index) => (
                    <li key={index} className="w-full">
                     <h1> </h1>
                    </li>
                  ))}
                </ul>
              )}
            </>
          ) : (
           <h1> </h1>
          )}
        </li>
      ))}
      </ul>
      </div>
)}
      </div>
    </div>
  
    </nav>
  
  );
};