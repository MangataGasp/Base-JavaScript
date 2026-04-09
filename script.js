//MATH OPERATORS

/* let score = 492
console.log(score + 3 )
console.log(score - 5)
console.log(score * 2)
console.log(score / 2)
 */

//CONDITIONALS or LOGICAL OPERATORS
const age = 3
if (3 < age) {
    console.log("Free")
} else if (12 < age) {
    console.log("$5")
} else if (17 < age) {
    console.log("$7")
} else if (64 < age) {
    console.log("$10")
} else {
    console.log("$6")
}

const isLoggedin = true
const hasCard = true
if (isLoggedin && hasCard) {
     console.log("Allow") 
} else if (isLoggedin || hasCard) {
    console.log("Pass but warn: At Least one must be correct")
} else if (!isLoggedin && !hasCard) {
    console.log("yes")
}