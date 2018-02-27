const sumInt = (a, b) => {
  return a+b
}
const subtractionInt = (a, b) => {
  return a-b
}

const divisionInt = (a, b) => {
  return a/b
}

const multiplicationInt = (a, b) => {
  return a*b
}

const power = (a, pow) => {
let b = 1
  for(let i=1; i<=pow; i++){
    b *= a
  }
return b;
}
console.log(power(5, 3));


const root = (a, pow) => {
let b = a
  for(let i=1; i<=pow; i++){
    b /= a
  }
return b;
}
console.log(root(125, 3));

const absolute = (a) => {
 if(a < 0) {
   a = a * (-1)
 }
 return a;
}
console.log(absolute(5))

const mod = (a, b) => {
  let c = Math.floor(a/b)
  let d = c*b
  let e = a-d
    return e;
}
console.log(mod(10, 4));

const log = (a, base) => {

}

const flipSign = (a) => {

}

const sin = (a) => {

}
const cos = (a) => {

}
const percent = (a, b) => {

}

const integral = (a, b) => {

}
