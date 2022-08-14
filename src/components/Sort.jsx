import React from "react";
import Header from "../components/Header.jsx"
import Bars from "../components/Bars.jsx"
import Footer from "../components/Footer.jsx"
import { useState } from "react";
export default function Sort(){
      let w = window.innerWidth - 40 ;
    let maxBars = w / 3;
    let h = window.innerHeight;
    const randomInt =(min, max) =>{
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const numberArray = [];
    for(let i =0; i < maxBars; i++){
        numberArray[i] = randomInt(20,h/1.2);

    }
  
    const [speed,setSpeed] = useState(1)
  

   
    
    return(
        <div className="sortviz">
        <Header array = {numberArray}  />
        <Bars array={numberArray} />
        <Footer maxBars = {maxBars} array ={numberArray} />
        
        
        </div>


    );


}