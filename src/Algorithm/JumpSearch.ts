export default async function JumpSearch(target:number,styleArray:NodeListOf<HTMLElement>,array:number[]) {
        var length:number = array.length;
        var jump =  Math.floor(Math.sqrt(length));
        var prev = 0
        const blue = "#5ab5f2"
        const green = "#00c717"
        const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))
        while(array[Math.min(jump,length)-1] <= target){
            prev = jump;
            jump +=Math.floor(Math.sqrt(length)); 
            styleArray[prev].style.backgroundColor = blue;
           await wait(250)
        }
        if(target == length - 1){
            while(array[prev] < target){
            prev++;

            if(array[prev] == target){
                styleArray[prev].style.backgroundColor = blue;
                styleArray[prev + 1 ].style.backgroundColor = green;
            }else{
                styleArray[prev].style.backgroundColor = blue;
            }
            await wait(100);
        }
        }else{
            while(array[jump] > target){
                jump--;
                if(array[jump] == target){
                    
                    styleArray[jump  +1].style.backgroundColor = green;
                }else{
                    styleArray[jump].style.backgroundColor = blue;
                }
                await wait(100);
            }
        }
        

       



}