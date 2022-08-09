import React from "react";
export default function BarsSearch(props){
    window.onresize = () =>{
        document.location.reload();
    }
    let h = window.innerHeight/5;

    return (
        <div className="search-container" id = "search-array"
            style={{'marginTop': `${h}px`}}
        
        >
       
            {
            props.array.map((value,idx) =>(
             <div className="search-bar" key={idx} id="search-bar"  style={{
               
                 height: `${value}px`
             }}></div>
            ))
            }
           

        </div>
    )

}