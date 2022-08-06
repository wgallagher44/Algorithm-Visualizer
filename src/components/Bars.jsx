import React from "react";
import "./Bars.css"
export default function Bars(props){
    let w = window.innerWidth - 40 ;
    let h = window.innerHeight ;
    let maxBars = w / 3;

    window.onresize = () =>{
        document.location.reload();
    }


    const randomInt =(min, max) =>{
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
    const numberArray = [];
    for(let i =0; i < maxBars; i++){
        numberArray.push(randomInt(10,h/1.2));

    }
    return (
        <div className="array-container" id = "array" 
        
        
        >
            {
           
            numberArray.map((value,idx) =>(
             <div className="array-bar" key={idx} id ="array-bar" style={{
                    width: '1px',
                 height: `${value}px`
             }}></div>
            ))
            }
           

        </div>
    )
}