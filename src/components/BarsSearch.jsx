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
             <div className="array-bar" key={idx} id="search-bar"  style={{
                width: '2px',
                 height: `${value}px`
             }}></div>
            ))
            }
           

        </div>
    )

}