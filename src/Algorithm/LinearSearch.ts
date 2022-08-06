export default async function linearSearch(target:Number,array:NodeListOf<HTMLElement>,numArray:number[]){
    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))
    const blue = "#5ab5f2"
    const green = "#00c717"
   
    for(var i = 0; i < numArray.length; i++){
        if(numArray[i] == target){
            array[i].style.backgroundColor = blue; 
            array[i + 1].style.backgroundColor = green; 
            break;
        }else{
            array[i].style.backgroundColor = blue; 
        }
        await wait(50);
    }
 
}