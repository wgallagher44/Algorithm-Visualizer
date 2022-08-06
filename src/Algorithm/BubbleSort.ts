
export default  function bubbleSort(array:number[],styleArray:NodeListOf<HTMLElement>){
    let isSorted;
    const wait = (ms) =>{return new Promise((resolve) =>{setTimeout(resolve,ms)})}
    // const swap = (el1,el2) =>{
    //   return new Promise((resolve) => {
    //     var container = document.getElementById('array');
    //     // For exchanging styles of two blocks
    //     var temp = el1.style.transform;
    //     el1.style.transform = el2.style.transform;
    //     el2.style.transform = temp;
  
    //     window.requestAnimationFrame(function() {
  
    //         // For waiting for .25 sec
    //         setTimeout(() => {
    //             container.insertBefore(el2, el1);
    //             resolve(250);
    //         }, 250);
    //     });
    // });
     
    for(let i = 0; i < array.length; i++){
        isSorted = true;
        for(let j = 1; j < array.length - i; j++){
            if(array[j] < array[j - 1]){
                //swap(j,j-1,styleArray);
                let temp = array[j];
                array[j] = array[j-1];
                array[j-1] = temp;
                isSorted = false;
                //swap(j-1,j,styleArray);
               
            }
          
        }
          if(isSorted){
                return array;
            }
    }
    return array;
}
