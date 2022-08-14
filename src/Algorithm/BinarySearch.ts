export default async function binarySearch(target:number,styleArray:NodeListOf<HTMLElement>,array:number[],speed:number){
    var left = 0
    var right = array.length - 1;
    const blue = "#5ab5f2"
    const green = "#00c717"
    const orange = "#f2880f"
    styleArray[left].style.backgroundColor = blue
    styleArray[right].style.backgroundColor = blue
    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))
    var middle;
    while(right-left > 1){
        middle = Math.floor((left + right) / 2);
       
        if(array[middle] == target){
            styleArray[middle].style.backgroundColor = green;
            return;
        }else if(target > array[middle]){
            
            left = middle+1;
            if(array[left] == target){
                styleArray[right + 1].style.backgroundColor = green;
            }else{
               styleArray[right].style.backgroundColor =  blue;
                styleArray[middle].style.backgroundColor = orange;
            }
            
           
        }else{
          
            right = middle-1;
            if(array[right] == target){
                styleArray[right + 1].style.backgroundColor = green;
            }else{
                  styleArray[middle].style.backgroundColor = orange;
                styleArray[right].style.backgroundColor = blue;
            }
              
        }
        await wait(speed);
        
    }


}