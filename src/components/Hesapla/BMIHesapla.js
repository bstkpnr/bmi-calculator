import React,{useState} from 'react';
function Hesapla(){
    const [height,setHeight]=useState();
    const [weight,setWeight]=useState();
    const [bmi,setBmi]=useState();





    const handleWeight=(e)=>{
        setWeight(e.target.value)
     }
     const handleHeight=(e)=>{
         setHeight(e.target.value)


     }
    
    function calc(){


        let calculator= (height/100)*(height/100);
        calculator=weight/calculator;
        calculator=calculator.toFixed(0);
        setBmi(calculator);
    }

    
    return(
        <div className="">
                <input  placeholder="Boyun Gaç" value={height} onChange={handleHeight} />
                <input  placeholder="Kilon Gaç" value={weight} onChange={handleWeight}/> 
                <button onClick={calc} >Gönder</button>
            <h2> {bmi>25 ? <p>{bmi} Şişkosun  </p> : bmi<18 ?<p>{bmi} Basitsin</p> : <p> {bmi} Normal </p>}
            </h2>

        </div>
    )

    

}

export default Hesapla;