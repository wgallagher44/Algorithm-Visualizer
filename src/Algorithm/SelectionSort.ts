export default function selectionSort(array:number[]){
    for(let i = 0; i < array.length - 1; i++){
        let minIdx = i;
        for(let j = i + 1; j < array.length; j++ ){
            if(array[j] < array[minIdx]){
                minIdx = j
            }
        }
        const temp = array[minIdx];
        array[minIdx] = array[i];
        array[i] = temp;

    }
    return array;
}