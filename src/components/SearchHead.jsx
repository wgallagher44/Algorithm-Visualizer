import React, { useEffect,useRef } from "react";

export default function SearchHead(props){
    const searchList = ['Linear Search','Binary Search', 'Jump Search','Ternary Search']
    let bars = useRef(null);
    let slider = useRef(null);
     
    let slideVal = useRef(null); 
    useEffect(() =>{
        bars.current = document.getElementById('search-array').children;
        slider.current = document.getElementById('search-slider');
        slideVal = document.getElementById('footer-val');
    },[])
    const reset = () =>{
        console.log(slider);
        for(let i =0; i< bars.current.length; i++){
            bars.current[i].style.backgroundColor = "#e53c6c"
           
        }
        slider.value = 0;
        slideVal.innerHTML = 0;
       
    }
   
    const spinner = () => {
        var list = [];

        for(var i = 0; i < searchList.length; i++){
           list.push(  <option value={i}>{searchList[i]}</option>);
        }
        return list;
    }
    return (
        <header className ="header">
        <h1 className ="header-title">Searching</h1>
        <button onClick = {() =>{reset()}}>Reset</button>
        <select className="header-options" id="select" >
            {spinner()}

        </select>
        
    </header> 
    )

}