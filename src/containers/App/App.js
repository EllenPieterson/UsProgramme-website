import React from "react";
// import styles from "./App.module.scss";
import Navbar from "../../components/Navbar";
import LandingPage from "../LandingPage/LandingPage";
import ProfileCardList from "../About/ProfileCardList/ProfileCardList";

function App() {
  return (
    <div>
      <Navbar />
      {/* <LandingPage /> */}
      <ProfileCardList />
    </div>
  );
}

export default App;
