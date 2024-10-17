import { arrNum, sum } from '../sum'

console.log(arrNum);

console.log(sum(1, 1));

arrNum.forEach((item) => {
    console.log(item)
    arrNum.push(item + 1)
})

console.log(arrNum);
