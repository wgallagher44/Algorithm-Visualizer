import React, { useEffect,useRef,useState } from "react";

export default function SearchHead(props){
    const searchList = ['Linear Search','Binary Search', 'Jump Search','Ternary Search']
    let bars = useRef(null);
    let slider = useRef(null);
    const [val,setVal] = useState(1 +".0");
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
        <div className="speed">
        <div className="speed-text">Speed of Sort</div>
        <div className="radio-wrapper">
             
            <input type="radio" name = "speed" id = {'0.25x'} value ={'0.25'}/>
                <label for = {'0.25x'}>{'0.25x'}</label>
            </div>
       
        {radioButtons()}



       </div>
    </header> 
    )

}