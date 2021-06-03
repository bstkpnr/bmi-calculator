import React from "react";
import BMIHesapla from "../src/components/Hesapla/BMIHesapla";
import Info from "../src/components/BMINedir/Info";
import bg from  '../src/healthy.jpg'
function App() {
  return (

    <>
      <div  style={{ backgroundImage:`url(${bg})`,backgroundPosition:'center',height:"100vh",backgroundRepeat:'no-repeat'}}>

      <div style={{position:"relative"}}>
        <BMIHesapla />

        <Info  />
      </div>
      </div>
    </>
  );
}

export default App;
