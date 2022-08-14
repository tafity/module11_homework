function calcsum (numOne, numtwo) {
    if (numtwo === 1) {
        return numOne;
    } else {
        return numOne * calcsum ( numOne, numtwo -1);
    }
}
console.log (calcsum (2,3));