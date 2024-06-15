import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaTelegramPlane } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";



export default function Footer() {
    return (
        <footer className="absolute w-full text-center ">
            <div className="bg-gray-900 text-white font-sans pt-5">
                {/* <h1 className="mb-5">Get in Touch</h1> */}
                <div className="flex justify-center pb-5">
                    <a href="https://www.facebook.com/mr.yooooooooooo" className="rounded-full border-2 border-neutral-700 text-1xl mx-2 py-3 px-3 bg-transparent hover:bg-slate-800  transition duration-200 "> <FaFacebookF /> </a> 
                    <a href="##" className="rounded-full border-2 border-neutral-700 text-1xl mx-2 py-3 px-3 bg-transparent hover:bg-slate-800  transition duration-200"> <FaTwitter /></a> 
                    <a href="##" className="rounded-full border-2 border-neutral-700 text-1xl mx-2 py-3 px-3  bg-transparent hover:bg-slate-800  transition duration-200"> <SiGmail /></a> 
                    <a href="##" className="rounded-full border-2 border-neutral-700 text-1xl mx-2 py-3 px-3  bg-transparent hover:bg-slate-800  transition duration-200"> <FaTelegramPlane /> </a> 
                    <a href="##" className="rounded-full border-2 border-neutral-700 text-1xl mx-2 py-3 px-3  bg-transparent hover:bg-slate-800  transition duration-200"> <BiLogoInstagramAlt /> </a> 
                </div>
                <div className="flex justify-center">
                    <hr className=" w-96 border-neutral-700 border-t-2 pb-3 "></hr>
                </div>
                <div>
                  <a href="##">Terms & Conditions </a>
                    <span>|</span> 
                    <a href="##"> Privacy and Policiy</a>
                </div>
             
                <small >© 2024 MNB development. All rights reserved.</small>
                <div className="pb-5"></div>
            </div>    
        </footer>
    )
}