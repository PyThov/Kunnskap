import React from "react";
import "../../styling/LandingPage.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "../../common/components/Footer";

export default function LandingPage() {
  return (
    <div className="LandingPage">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
