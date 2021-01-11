const fibonacci = function(num) {
    if (num < 0){return "OOPS"}
    /*givenF = [1,1]
    for (i=0;i<num;i++) {
        givenF.push(givenF[givenF.length-1] + givenF[givenF.length-2])
    }
    return givenF[num-1]*/
    return parseInt(((((1+Math.sqrt(5))/2)**num) - (((1-Math.sqrt(5))/2)**num))/Math.sqrt(5))
}

module.exports = fibonacci
