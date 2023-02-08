// console.log("hello world");

// function wordBlanks(noun, adjective, verb, adverb){
//     var result = "";
//     result += "The " + adjective + " " + noun + " went on a " + adverb + " " + verb + " all night long.";

//     return result;
// }

// console.log(wordBlanks("Janu", "hungry", "ran", "quick"))

// var myArray = [['Honda', 4], ['BMW', 2]];
// console.log(myArray[1][0]);

//

// function nextInLine(arr, item){
//     arr.push(item)
//     return arr.shift();
// }

// var testArr = [1,2,3,4,5];

// console.log("Before " + JSON.stringify(testArr));
// console.log(nextInLine(testArr, 6));
// console.log("After " + JSON.stringify(testArr));

// var x = 5

// if (x > 1 && x < 6) {
//     console.log(x)
// }

// function caseInSwitch(val) {
//     var answer = "";
//     switch(val) {
//         case 1:
//             answer = "alpha";
//             break;
//         case 2:
//             answer = "beta";
//             break;
//         //.
//         //.
//         //.
//     }
//     return answer;
// }

// console.log(caseInSwitch(2))

// var count = 0;
// function cc(card) {
//     switch (card) {
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//         case 6:
//             count++;
//             break;
//         case 10:
//         case 'J':
//         case "Q":
//         case "K":
//         case "A":
//             count--;
//             break;
                    
//     }

//     var holdbet = "Hold"
//     if (count > 0){
//         holdbet = 'Bet'
//     }


//     return count + " " + holdbet;
// }

// cc(2); cc(3); cc(7); cc('K'); cc('A');
// console.log(cc(4))

// const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]

// const squareList = (arr) => {
//     const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
//                                     //The values returned here are: [4, 42, 6]    //The values returned here are: [16, 1764, 36]
//                                     //The values that are integers and positive   //The square of the positive integers in the array
//     return squaredIntegers;
// };

// const squaredIntegers = squareList(realNumberArray);
// console.log(squaredIntegers);

// const sum1 = (function() {
//     return function sum(x, y, z) {
//         const args = [x, y, z];
//         return args.reduce((a, b) => a + b, 0)
//     } ;
// })();

// console.log(sum1(1, 2, 3))

// const sum = (function() {
//     return function sum(...args) {
//         return args.reduce((a, b) => a + b, 0)
//     } ;
// })();

// console.log(sum(1, 2, 3))

// const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY']

// let arr2;
// (function() {
//     arr2 = arr1;
//     arr1[0] = 'potato'
// })();
// console.log(arr2)

// let arr2;
// (function() {
//     arr2 = [...arr1];
//     arr1[0] = 'potato'
// })();
// console.log(arr2)
// console.log(arr1)

const stats = {
    max: 56.78,
    sd: 4.34,
    min: -0.75,
    avg: 35.85
}

const half1 = (function() {
    return function half(stats){
        return stats.max + stats.min / 2.0;
    };
})();

const half = (function() {
    return function half({max, min}){
        return max + min / 2.0;
    };
})();

console.log(stats)
console.log(half1(stats))
console.log(half(stats))