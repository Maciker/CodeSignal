function centuryFromYear(year) {
    if (year % 100 == 0){
        return Math.trunc(year /100);
    } else {
        return Math.trunc((year /100)+1);
    }
}
