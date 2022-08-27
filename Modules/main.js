///////////// Export Default ///////////////
// When importing default exports:
// import math form "lib/math.js"
// const result = math.sum(1,3)
////////////////////////////////////////////
///////////////////Start////////////////////
import {sum, sub, mul, div} from "./lib/math.js"

const result1 = sum(1,3) // 4
const result2 = sub(10,2) // 8
const result3 = mul(5,6) // 30
const result4 = div(21, 7) // 3
console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)

// Or

// import * as math from "./lib/math.js"
// const result1 = math.sum(1,3)
// const result2 = math.sub(10,2)
// const result3 = math.mul(5,6)
// const result4 = math.div(21, 7)
// console.log(result1)
// console.log(result2)
// console.log(result3)
// console.log(result4)