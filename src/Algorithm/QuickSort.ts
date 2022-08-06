export default function quickSort(array:number[]){
    quickSortRec(array,0,array.length-1);
}
function quickSortRec(array:number[],low:number,high:number){
   
     if(low >= high){
        return;
    }
    let pivotIndex = randomInt(low,high);
    let pivot = array[pivotIndex];
    swap(array,pivotIndex,high);
    let leftP = partition(array,low,high,pivot);
    quickSortRec(array,low,leftP - 1);
    quickSortRec(array,leftP+1, high);


}
 function swap (array:number[],idx1:number,idx2:number) {
        let temp = array[idx1];
        array[idx1] = array[idx2];
        array[idx2] = temp;
    }
    function randomInt(min:number,max:number){
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    function  partition (array:number[],low:number,high:number,pivot:number):number{
         let leftP = low;
        let rightP = high-1;
   
        while(leftP < rightP){

         while(array[leftP] <= pivot && leftP < rightP){
            leftP++;
        }
        while(array[rightP] >= pivot && leftP < rightP){
            rightP--;
        }
        swap(array,leftP,rightP);


    }
    



    return leftP;



    }