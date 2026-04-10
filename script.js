/*  function numbers(prc1, prc2) {
    return prc1 +  prc2;
} 

let result = numbers(9, 5)

console.log(result) */ 

function student(score) {
    if(score >= 80) {
        return "Excelent"
    } else if (score <= 79) {
        return "Pass"
    } else if (score <= 49) {
        return "Fail"
    }
}
console.log(student(60))
