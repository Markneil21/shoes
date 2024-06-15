import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import './App.css';
import '@material-design-icons/font';








function Page() {
  return (
      <div className="bg-neutral-100 ">
     
          <Header />
          <MainContent />
          <Footer />
      </div>
  )
}


const root = ReactDOM.createRoot (document.getElementById("root"))
root.render(
  <Page />

)

