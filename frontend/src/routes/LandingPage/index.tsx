import React from "react";
import "../../styling/LandingPage.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "../../common/components/Footer";
import { IUserSession } from "../../common/types";
import { handleUserSession } from "../../common/utils";

export default function LandingPage() {
  const [userSession, setUserSession] = React.useState<IUserSession>(handleUserSession());

  return (
    <div className="LandingPage">
      <Header userSession={userSession} setUserSession={setUserSession}/>
      <Main />
      <Footer />
    </div>
  );
}
