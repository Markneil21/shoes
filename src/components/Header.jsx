import React from "react";
import Navbar from "./Navbar";
// import Logo from "../programmer.png"

const Header = () => {
    return (

        <header className=" bg-gray-900 sticky top-0 z-20 mx-auto flex w-full items-center justify-between ">
         <div className="pl-24">
         <img className=" max-h-12 object-contain invert"
                        src="https://www.freepnglogos.com/uploads/shoes-png/shoes-clipart-clipart-images-clipartwork-15.png"
                        alt="Logo"
                        width={250}
                        />
         </div>
                
                <Navbar /> 
      
        </header>

    )
}

export default Header;