import React from "react";
import Logo from "../Logo.png"

export const Footer = () => {
  return (
   
    <div className="container mx-auto" >
        {/* Top section with three columns */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-32 text-center md:text-left pt-32">
          {/* Logo and Mission */}
          <div className="col-span-2">
          <img src={Logo} className="App-logo" alt="logo" />
          <hr className="border-t border-white opacity-50 my-8 mt-18" />
            <p className="text-sm">
              Die Sedinum Stiftung hat sich der Aufgabe verschrieben, Mensch und Umwelt zu unterstützen und so zu einer besseren Zukunft beizutragen.
            </p>
          </div>

          <div className="col-span-1">
          
          </div>

          {/* Menu */}
          <div className="col-span-1 md:w-52 mb-4">
            <h3 className="text-lg font-semibold mb-8">Menu</h3>
            <ul className="space-y-4">
              <li><a href="#" className="mb-4 hover:text-blue-300">Home</a></li>
              <li><a href="#" className="hover:text-blue-300">Gesuch stellen</a></li>
              <li><a href="#" className="hover:text-blue-300">Über uns</a></li>
              <li><a href="#" className="hover:text-blue-300">Kontakt</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 md:w-56">
            <h3 className="text-lg font-semibold mb-8">Kontakt</h3>
            <p className="text-sm mt-4">
              <span>📍 Sedinum Foundation <br /> Unter Altstadt 10 <br /> CH - 6302 Zug</span>
            </p>
            <p className="text-sm mt-4">
              📞 +41 41 729 08 25
            </p>
            <p className="text-sm mt-4">
              ✉️ info@sedinum.ch
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="opacity-50 md:my-10 lg:my-12" />

        {/* Bottom section with text */}
        <div className="text-center text-xs md:flex md:justify-between md:items-center">
          <p>©2024 All rights reserved by Sedinum Foundation | Developed by BornDesign</p>
          <div className="space-x-4">
            <a href="#" className="hover:text-blue-300">Datenschutz</a>
            <span>|</span>
            <a href="#" className="hover:text-blue-300">Impressum</a>
          </div>
        </div>
      </div>

  
  );
};
