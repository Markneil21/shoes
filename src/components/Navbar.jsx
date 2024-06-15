import React from "react"

const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const offset = 80; // Adjust this value as needed
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
    });
};



export default function Navbar() {
    return (
        <div className="text-white ">
          
              
                <ul className="flex p-5 pr-44 cursor-pointer mr-2" >
                
                    <li onClick={() => scrollToSection('home')} className=" rounded-md bg-transparent hover:bg-slate-800 px-5 py-1 transition duration-200 mx-1 scroll-smooth" >Home </li>
                    <li onClick={() => scrollToSection('about')} className=" rounded-md bg-transparent hover:bg-slate-800 px-5 py-1 transition duration-200 mx-1"> About </li>
                    <li onClick={() => scrollToSection('shop')} className=" rounded-md bg-transparent hover:bg-slate-800 px-5 py-1 transition duration-200 mx-1"> Shop  </li>       
                    <li onClick={() => scrollToSection('donate')} className=" rounded-md bg-transparent hover:bg-slate-800 px-5 py-1 transition duration-200 mx-1"> Donate  </li>  
                    <li onClick={() => scrollToSection('contact')} className=" rounded-md bg-transparent hover:bg-slate-800 px-5 py-1 transition duration-200 mx-1"> Contact  </li>  
                    <li>  
                        <button className=" rounded-md bg-transparent hover:bg-slate-800 focus:bg-slate-800 px-1 py-0 mx-1 transition duration-200 pt-1  ">
                            <span className="material-icons-outlined md-18 mt-1 px-2">shopping_cart</span>
                        </button>
                    </li>
                </ul>   
        </div>
    )
}
