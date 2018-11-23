function almostIncreasingSequence(sequence) {
    count = 0;
    for (i = 0; i < sequence.length-1 && count < 2; i++){
        if (sequence[i+1] <= sequence[i]){
            if (i == 0){
                count += 1;
            }else{
               if (i+2 < sequence.length){
                   if (sequence[i+2] <= sequence[i])
                       if (sequence[i+1] <= sequence[i-1])
                           count = 2;
                       else
                           count += 1;
                   else
                       count += 1;
               }else{
                   count += 1;
               }
            }
        }
    }
    return count < 2;
}  
