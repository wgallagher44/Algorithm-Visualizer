export default async function selectionSort(array:number[],styleArray:NodeListOf<HTMLElement>){
    const white = "#FFFFFF"
    const original = '#e53c6c';
    const green = "#00c717"
    const blue = "#5ab5f2"
    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))
    for(let i = 0; i < array.length - 1; i++){

        let minIdx = i;
        //styleArray[minIdx].style.backgroundColor = blue;
        for(let j = i + 1; j < array.length; j++ ){
            styleArray[j].style.backgroundColor = white
            if(array[j] < array[minIdx]){
                 styleArray[j].style.backgroundColor = blue;
                 styleArray[minIdx].style.backgroundColor = original;
                minIdx = j;
                
            }
             await wait(10);
           if(j !== minIdx){
            styleArray[j].style.backgroundColor = original;
            }
           
           
        }


        const temp = array[minIdx];
        styleArray[minIdx].style.height = array[i] + "px";
        array[minIdx] = array[i];
        styleArray[i].style.height = temp + "px";
        styleArray[i].style.backgroundColor = green;
        array[i] = temp;

    }
    styleArray[array.length - 1].style.backgroundColor = green;
    return array;
}