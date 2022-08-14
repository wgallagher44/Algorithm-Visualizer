import React from "react";
import Bars from "./Bars.jsx"
import Footer from "./Footer.jsx"
import { useState,useRef,useEffect } from "react";
export default function Header(){   
    var arrayBar = useRef(null);
    const [val,setVal] = useState(3);
    useEffect(() =>{
        arrayBar.current = document.getElementById('array').children;
    },[]);
    let h = window.innerHeight ;
    const randomInt =(min, max) =>{
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
     let w = window.innerWidth - 40 ;
    let maxBars = w / 3;
    const randomBars = ()=>{
        let newArray = [];
        for(let i = 0; i < arrayBar.current.length;i++){
            const rand = randomInt(20,h/1.2);
            
            newArray.push(rand);
            arrayBar.current[i].style.height = `${rand}px`
            arrayBar.current[i].style.backgroundColor = '#e53c6c'
        }
        setArray(newArray);
        console.log(newArray)
    }
    const newArray = () =>{
    

    const numberArray = [];
    for(let i =0; i < maxBars; i++){
        numberArray[i] = randomInt(20,h/1.2);

    }
    return numberArray;
    }
  
    const [array,setArray] = useState(newArray);
   
    // let w = window.innerWidth - 40 ;
    // let maxBars = w / 3;

    // const numberArray = [];
    // for(let i =0; i < maxBars; i++){
    //     numberArray.push(randomInt(20,500))

    // }
    // setArray(numberArray);
    var sortingList;
    sortingList  = ['Bubble Sort','Selection Sort','Quick Sort', 'Merge Sort']
    const spinner = () => {
        var list =  [];
        for(var i = 0; i < sortingList.length; i++){
           list[i] =  <option value={i}>{sortingList[i]}</option>
        }
        return list;
    }
    return (
        <div className="sortviz">
            <header className ="header">
            <h1 className ="header-title">Sorting</h1>
            <button onClick = {randomBars} >Randomize</button>
            
            <select className="header-options" id = "sortSelection">
                {spinner()}
            </select>
            <div className="speed">
            <div className="speed-text">Speed of Sort</div>
            <input type="range" 
            className="speed-slide" 
            min="1"
            max="4"
            
            value={val}
            step="1"
            />
            <span>{val}</span>


            </div>
           
           

           
        </header>
        <Bars array = {array} /> 
        <Footer maxBars = {maxBars} array = {array} />
        </div>
       

    )
}