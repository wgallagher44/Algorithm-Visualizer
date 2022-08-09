
export default async  function bubbleSort(array:number[],styleArray:NodeListOf<HTMLElement>){
    let isSorted;
    const white = "#FFFFFF"
    const original = '#e53c6c';
    const green = "#00c717"
    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))
    for(let i = 0; i < array.length; i++){
        isSorted = true;
        for(let j = 1; j < array.length - i; j++){
                let  second  = styleArray[j].style;
                let first= styleArray[j-1].style;
                first.backgroundColor = white;
                second.backgroundColor = white;
            if(array[j] < array[j - 1]){
               
                let temp = array[j];

                second.height = array[j-1] + "px"; 
                array[j] = array[j-1];
                first.height = temp + "px"
                array[j-1] = temp;
                isSorted = false;
                
                
             
            }
                await wait(10);
                first.backgroundColor = original;
                second.backgroundColor = original;

          
        }
            styleArray[array.length -i -1].style.backgroundColor=green;
          if(isSorted){
                for(let i = 0; i< array.length - i;i++){
                    styleArray[i].style.backgroundColor=green;
                    await wait(20);
                }
                return array;
            }
    }
    
    return array;
}
