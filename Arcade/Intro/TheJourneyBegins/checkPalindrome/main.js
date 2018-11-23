function checkPalindrome(inputString) {
    let checker = "";
        for (i = (inputString.length)-1; i>=0; i--){
            checker += inputString[i];
    }
    if (inputString == checker) { 
        return true;
    } else {
        return false;
    }
}
