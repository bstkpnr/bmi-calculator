import React from "react";
import BMIHesapla from "../src/components/Hesapla/BMIHesapla";
import Info from "../src/components/BMINedir/Info";

function App() {
  return (
    <>
      <div style={{position:"relative"}}>
        <BMIHesapla />

        <Info  />
      </div>
      <div></div>
    </>
  );
}

export default App;
