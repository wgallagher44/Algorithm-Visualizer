import React from "react";
import {useState,useRef,useEffect} from "react"
import bubbleSort from "../Algorithm/BubbleSort.ts"
import selectionSort from "../Algorithm/SelectionSort.ts"
import mergeSort from "../Algorithm/MergeSort.ts"
import { Link } from "react-router-dom";
import quickSort from "../Algorithm/QuickSort.ts";

export default function Footer(props){
    
   
    var barArray = useRef(null);
    var divCollection = useRef(null);
    const select = useRef(null);
    const [selection,setSelection] = useState(0);
    useEffect(() =>{
        barArray.current =document.getElementById("array").children; 
        divCollection.current = document.getElementById("array")
        select.current = document.getElementById('sortSelection').addEventListener('change',function(e) {
            
            setSelection(e.target.value);
          });
    })
    var bars =Math.floor(props.maxBars)
    const increaseWidth = (array,width) =>{
        for(let i = 0; i < array.length; i++){
            array[i].style.width = width + "px";
        }


    }
    const sortMethodSelection = () =>{
            console.log(selection)
            if(selection == 0){
               
                bubbleSort(props.array,barArray.current)
            }else if(selection == 1){
                
                selectionSort(props.array,barArray.current)
            }else if(selection == 2){
            quickSort(props.array,0,props.array.length-1,barArray.current);
            }else if(selection == 3){
            mergeSort(props.array,barArray.current)
            }


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
              props.array.splice(i,1); 
            }
            if(val > 500){
                increaseWidth(array,1);
            }
            if(val < 470){
                increaseWidth(array,2);
            } if(val < 370){
                increaseWidth(array,3);
            }if(val < 300){
                increaseWidth(array,4);
            }if(val < 250){
                increaseWidth(array,5);
            }if(val < 200){
                increaseWidth(array,6);
            }if(val < 150){
                increaseWidth(array,7);
            }if(val < 100){
                increaseWidth(array,9);
            }if(val < 50){
                increaseWidth(array,10);
            }if(val < 30){
                increaseWidth(array,18);
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
            if(val > 500){
                increaseWidth(array,1);
            }
            if(val < 470){
                increaseWidth(array,2);
            } if(val < 370){
                increaseWidth(array,3);
            }if(val < 300){
                increaseWidth(array,4);
            }if(val < 250){
                increaseWidth(array,5);
            }if(val < 200){
                increaseWidth(array,6);
            }if(val < 150){
                increaseWidth(array,7);
            }if(val < 100){
                increaseWidth(array,9);
            }if(val < 50){
                increaseWidth(array,10);
            }if(val < 30){
                increaseWidth(array,18);
            }                     
            
            newDiv.style.backgroundColor = "#e53c6c"
            props.array.push(random)
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
            <button className = "footer-sort" onClick={() =>{
                sortMethodSelection();
                }}>Sort</button>
            
            <Link to ="/Searching" className = "footer-link">To Searching Visualizer</Link>
        </footer>
    )
} 
