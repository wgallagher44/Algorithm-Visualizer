import React from "react";
import { Link } from "react-router-dom";
import {useState} from "react"
import { useEffect,useRef } from "react";
import linearSearch from "../Algorithm/LinearSearch.ts";
import binarySearch from "../Algorithm/BinarySearch.ts";
import ternarySearch from "../Algorithm/TernarySearch.ts";
import jumpSearch from "../Algorithm/JumpSearch.ts"
export default function SearchHead(props){
    var bar =Math.floor(props.maxBars - 1);
    const bars = useRef(null);
    const select = useRef(null);
    const [selection,setSelection] = useState(0);
    const array = props.array;
    useEffect(() =>{
         bars.current =document.getElementById("search-array").children; 
        select.current = document.getElementById('select').addEventListener('change',function(e) {
            setSelection(e.target.value);
          });

        

    },[])
  
   
   
    const [val,setValue] = useState(0);
    const moveSlide = (event) => {
        let val = event.target.value; 
        
        const arrayBar = bars.current;
        
        arrayBar[val].style.backgroundColor = "rgba(255,255,255)"
        
        for (let i = 0;i < arrayBar.length; i++){
            if(i == val)continue;
            else arrayBar[i].style.backgroundColor = "#e53c6c"
        }       
        arrayBar[val -1].style.backgroundColor = "#e53c6c"
        setValue(val )

        
    }
     const searchMethod = () =>{
        console.log(selection)
        if(selection == 0 ){
            linearSearch(val,bars.current,array);
        }else if(selection ==1){
            binarySearch(val,bars.current,array);
        }else if(selection == 2){
            jumpSearch(val,bars.current,array);
        }else if(selection == 3){
            ternarySearch(val,bars.current,array);
        }
    }
   
 
   
   
    return(
        <footer className="footer2">
            <div className="footer-container">
              <span className="footer-val" id ="footer-val">{val}</span> 
               <input type="range"
            min = "0" max = {bar} 
             onInput = 
             {moveSlide}
             value = {val}
             step = "1" 
             className="footer-slider"
             id = "search-slider"
             />  
             
            </div>
          
            <button className = "footer-sort" onClick={() =>{searchMethod()}}>Search</button>
            <Link to ="/" className = "footer-link">To Sorting Visualizer</Link>
        </footer>
    )
}

