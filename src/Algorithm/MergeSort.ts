const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
export default async function mergeSort(array:number[],styleArray:NodeListOf<HTMLElement>){
    let n = array.length;
    const style = styleArray
    if(n < 2){
        return;
    }
    let mid = Math.floor(n /2);

    var leftHalf:number[] = new Array(mid);
    var rightHalf:number[] = new Array(n - mid);


    for(let i =0; i< mid; i++){
        
        leftHalf[i] = array[i];
    }
    for(let i = mid; i < array.length; i++){
        rightHalf[i-mid] = array[i];
    }
    await mergeSort(rightHalf,style);
    await mergeSort(leftHalf,style);
 
    await merge(array,leftHalf,rightHalf,style);
    
}

 async function merge(array:number[],leftHalf:number[],rightHalf:number[],styleArray:NodeListOf<HTMLElement>){
    let leftSize = leftHalf.length;
    let rightSize = rightHalf.length;
    var i=0,j=0,k=0;
    while(i < leftSize && j < rightSize){
        if(leftHalf[i] <= rightHalf[j]){
           
            array[k] = leftHalf[i];
          
            i++
            styleArray[k].style.height = leftHalf[i] + "px";
        }else{
           
            array[k] = rightHalf[j];
            styleArray[k].style.height = rightHalf[j] + "px";
            j++;
        }
        k++
        await wait(10);
    }
    while(i < leftSize){
        styleArray[k].style.height = leftHalf[i] + "px";
        array[k] = leftHalf[i];
        i++;
        k++;
        await wait(10);
    }
    while(j < rightSize){
        styleArray[k].style.height = rightHalf[j] + "px";
        array[k] = rightHalf[j];
        j++;
        k++;
        await wait(10);
    }
 }
