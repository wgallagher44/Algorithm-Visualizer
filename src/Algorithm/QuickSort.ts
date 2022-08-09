// export default function quickSort(array:number[],styleArray:NodeListOf<HTMLElement>){
//     quickSortRec(array,0,array.length-1,styleArray);
// }
// async function quickSortRec(array:number[],low:number,high:number,styleArray:NodeListOf<HTMLElement>){
   
//      if(low >= high){
//         return;
//     }
    
//     let pivot = array[high];
//     swap(array,pivotIndex,high,styleArray);
//     await wait (10);
//     let leftP = partition(array,low,high,pivot,styleArray);
//     quickSortRec(array,low,leftP - 1,styleArray);
//     quickSortRec(array,leftP+1, high,styleArray);


// }
//   function swap (array:number[],i:number,ij:number,styleArray:NodeListOf<HTMLElement>) {
//         // console.log(array[idx1])
//         let temp = array[i];
//         //styleArray[idx1].style.height = array[idx2] + "px";
//         array[i] = array[j];
//         //styleArray[idx2].style.height = temp + "px";
//         array[j] = temp;
      
//     }
//     function randomInt(min:number,max:number){
//         return Math.floor(Math.random() * (max - min + 1) + min);
//     }
//    async function  partition (array:number[],low:number,high:number,pivot:number,styleArray:NodeListOf<HTMLElement>):number{
        
        
//         let leftP = low;
//         let rightP = high-1;
   
//         while(leftP < rightP){

//          while(array[leftP] <= pivot && leftP < rightP){
//             leftP++;
//         }
//         while(array[rightP] >= pivot && leftP < rightP){
//             rightP--;
//         }
//         swap(array,leftP,rightP,styleArray);
//         await wait(10);

//     }
    



//     return leftP;



//     }    
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));




function swap(arr, i, j,styleArray:NodeListOf<HTMLElement>) {
  
    
    let temp = arr[i];

        arr[i] = arr[j];
       styleArray[i].style.height = arr[j] + "px"  
        arr[j] = temp;
     styleArray[j].style.height = temp +"px" 
  
   
}
  

async function  partition(arr, low, high,styleArray:NodeListOf<HTMLElement>) {
    let pivot = arr[high];
    const style = styleArray
    let i = (low - 1);
    for (let j = low; j <= high - 1; j++) {
  
        
        if (arr[j] < pivot) {
  
           
            i++;
            swap(arr, i, j,style);
            await wait(10);
        }
    }
    swap(arr, i + 1, high,style);
    await wait(10);
    return (i + 1);
}

  

export default async function quickSort(arr, low, high,styleArray:NodeListOf<HTMLElement>) {
    const style = styleArray;

    
    if (low < high) {
  
    
        let pi = await partition(arr, low, high,style);
  
       
        quickSort(arr, low, pi - 1,style);
        quickSort(arr, pi + 1, high,style);
    }
    

 

}



