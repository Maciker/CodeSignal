function allLongestStrings(inputArray) {
    maxlenght = 0;
    arraymax = [];
    for (i=0; i<inputArray.length; i++){
       if (maxlenght < inputArray[i].length) {
           maxlenght = inputArray[i].length;
       } 
    }
    for (i=0; i<inputArray.length; i++){
        if (inputArray[i].length == maxlenght){
           arraymax.push(inputArray[i]);
        }
    }
return arraymax;
}
