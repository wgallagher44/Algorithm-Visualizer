import React from "react";
import {useState,useRef,useEffect} from "react"
import bubbleSort from "../Algorithm/BubbleSort.ts"
import selectionSort from "../Algorithm/SelectionSort.ts"
import { Link } from "react-router-dom";
import quickSort from "../Algorithm/QuickSort.ts";
export default function Footer(props){
    

    var barArray = useRef(null);
    var divCollection = useRef(null);
    useEffect(() =>{
        barArray.current =document.getElementById("array").children; 
        divCollection.current = document.getElementById("array")
    })
    var bars =Math.floor(props.maxBars)
 
   function swap(idx1, idx2) {
        var container = divCollection.current;
        // ditch text nodes and the like
        var children = Array.prototype.filter.call(
            container.childNodes,
            function(node) {
                return node.nodeType === 1;
            }
        );
        // get references to the relevant children
        var el1 = children[idx1];
        var el2 = children[idx2];
        var el2next = children[idx2 + 1];
    
        // put the second element before the first
        container.insertBefore(el2, el1);
        // now put the first element where the second used to be
        if (el2next) container.insertBefore(el1, el2next);
        else container.appendChild(el1);
    }
    
    
    let h = window.innerHeight ;
    const randomInt = (min,max) =>{
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const [val,setValue] = useState(bars);
    const moveSlide = (event) => {
        const tempVal = event.target.value
        const array = barArray.current;
       
        if(tempVal < val){
            for(let i = tempVal; i < array.length; i++){
              array[i].parentNode.removeChild(array[i]); 
            }
        
        }else if(tempVal > val){
            console.log(h);
          
          for(let i = val; i <tempVal; i++){
            var newDiv = document.createElement("div");
            const random = randomInt(20,h/1.2);
            newDiv.className = "array-bar"
            newDiv.setAttribute.key =i; 
            newDiv.id = "array-bar";
            newDiv.style.height = random + "px";
            newDiv.style.width = "1px";
            newDiv.style.backgroundColor = "#e53c6c"
           
            divCollection.current.appendChild(newDiv);
          }
          
        }


        setValue(event.target.value)
    }
   
    return(
        <footer className="footer">
            <div className = "footer-container">
                <span className="footer-val">{val}</span>  
               <input type="range"
            min = "10" max = {bars} 
             onInput = 
             {moveSlide}
             value = {val}
             step = "1" 
             className="footer-slider"
             />  
           
          
            </div>
            <button className = "footer-sort" onClick={() =>{quickSort(props.array,
                0,props.array.length-1)
                console.log(props.array)
                
                
                }}>Sort</button>
            
            <Link to ="/Searching" className = "footer-link">To Searching Visualizer</Link>
        </footer>
    )
} 