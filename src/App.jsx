import react from "react";

import "./App.css";
import Header from "./Components/Header/Header";
import DataLoad from "./Components/DataLoad/DataLoad";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <div>
        <Header></Header>
        <DataLoad></DataLoad>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
