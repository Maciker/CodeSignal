function adjacentElementsProduct(inputArray) {
    let max = -1000000;    
        for (i=0; i<inputArray.length; i++){
            if ((inputArray[i] * inputArray[i+1]) > max){
                max = (inputArray[i] * inputArray[i+1]); 
            }
        }
return max;
}
