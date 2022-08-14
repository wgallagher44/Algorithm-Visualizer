export default async function ternarySearch(target:number,styleArray:NodeListOf<HTMLElement>,array:number[],speed:number){
    var low = 0;
    var high = array.length-1;
    const blue = "#5ab5f2"
    const green = "#00c717"
    const orange = "#f2880f"
    const purple = "#301934"
    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))
    styleArray[low].style.backgroundColor = purple;
    styleArray[high].style.backgroundColor = purple;
    while(true){
        console.log(array[low]);
        console.log(array[high])
        const mid1 =Math.floor (low + (high-low)/3);
        const mid2 =Math.floor (high - (high-low)/3);
        if(array[mid1] === target){
            styleArray[mid1 + 1].style.backgroundColor = green;
            break;
        }if(array[mid2] == target){
            styleArray[mid2 + 1].style.backgroundColor = green;
            break;
        }
        styleArray[mid1].style.backgroundColor = orange;
         styleArray[mid2].style.backgroundColor = orange;
         await wait(speed)
        if(target < array[mid1]){
      
          styleArray[high].style.backgroundColor = blue;
          
            high = mid1 - 1;

       
          styleArray[high].style.backgroundColor = purple;
        }else if(target > array[mid2]){
            styleArray[low].style.backgroundColor = blue;
         
            low = mid2 + 1    
            styleArray[low].style.backgroundColor = purple;
        }else{
            styleArray[low].style.backgroundColor = blue;
            styleArray[high].style.backgroundColor = blue;
            low = mid1  +1;
            high = mid2 - 1;
            styleArray[low].style.backgroundColor = purple;
            styleArray[high].style.backgroundColor = purple;
        }
      await wait(speed)
    }

} 