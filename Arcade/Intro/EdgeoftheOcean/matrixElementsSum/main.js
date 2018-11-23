function matrixElementsSum(matrix) {
    rooms = 0;
    j=0;
    do {
        for (i=0; i<matrix.length; i++){
          if (matrix[i][j] != 0){
              rooms += matrix[i][j];
          } else { break;}
        }
        j ++;
    } while (j < matrix[0].length);
return rooms;    
}
