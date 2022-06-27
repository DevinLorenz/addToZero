// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:

for(let i = 0 ; i < array.length ; i++){

    for( j = 0 ; j < array.length ; j++)

        if((array[i] + array[j]) === 0 ) {
            console.log(`TRUE`)
            break;
        
        }else{ 
            console.log(`False`);
        }
}

