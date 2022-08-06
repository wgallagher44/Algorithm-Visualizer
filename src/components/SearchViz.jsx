import React from "react";
import Header from "./SearchHead.jsx"
import Bars from "./BarsSearch.jsx"
import Footer from "./SearchFoot.jsx"
import ErrorBoundary from "./ErrorBoundary.jsx"
export default function SearchViz(){
        let selection = 0
        let w = window.innerWidth-10;
       
        let maxBars = Math.floor(w / 4);
        var arr = [];
        for(let i = 1; i < maxBars; i++){
            arr.push(i)
        }
       

    
    return(
        <ErrorBoundary>
           <div className="search">
        <Header selection={selection}/>
        <Bars array = {arr}/>
        <Footer maxBars = {arr.length} array = {arr} selection = {selection} />

        </div>  
        </ErrorBoundary>
       
    )
}