import React from "react";
import { useState,useEffect,useRef } from "react";
export default function Header(props){
   
    var arrayBar = useRef(null);
    useEffect(() =>{
        arrayBar.current = document.getElementById('array').children;
    },[]);

    let h = window.innerHeight;
    const randomInt =(min, max) =>{
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    var sortingList;
    sortingList  = ['Bubble Sort','Selection Sort','Quick Sort', 'Merge Sort']
    const spinner = () => {
        var list =  [];
        for(var i = 0; i < sortingList.length; i++){
           list[i] =  <option value={i}>{sortingList[i]}</option>
        }
        return list;
    }



    const radioButtons = () =>{
        var list = [];
        var speed = 0.5
        for(let i = 0; i < 4; i++){
            
            list[i] =  <div className="radio-wrapper">
             
            <input type="radio" name = "speed" id = {speed + 'x'} value ={speed}/>
                <label for = {speed + 'x'}>{speed + 'x'}</label>
            </div>
             speed += 0.5; 
           
        }
        return list;



    }
    const randomBars = ()=>{
        let newArray = [];
        
        for(let i = 0; i < arrayBar.current.length;i++){
            const rand = randomInt(20,h/1.2);
            props.array[i] = rand;
            newArray.push(rand);
            arrayBar.current[i].style.height = `${rand}px`
            arrayBar.current[i].style.backgroundColor = '#e53c6c'
        }
     
    }


    return(
        <header className ="header">
        <h1 className ="header-title">Sorting</h1>
        <button onClick = {randomBars} >Randomize</button>
        
        <select className="header-options" id = "sortSelection">
            {spinner()}
        </select>
        <div className="speed">
        <div className="speed-text">Speed of Sort</div>
        <div className="radio-wrapper">
             
            <input type="radio" name = "speed" id = {'0.25x'} value ={'0.25'}/>
                <label for = {'0.25x'}>{'0.25x'}</label>
            </div>
       
        {radioButtons()}



       </div>
        {/* <input type="range" 
        className="speed-slide" 
        step=".5"
        min="0.5"
        max="2.0"
        onInput={changeVal}
       value = {val}
    
        id="speed-slide"
        />
        <span className="speed-span">{val + "x"}</span> */}
        </header>
    )

}