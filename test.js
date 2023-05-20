// const smartGarbage = function (trash, bins) {
//   // Your code in here ...
//   switch(trash){
//     case 'waste':
//       bins["waste"]++;
//       break;
//     case "recycling":
//       bins["recycling"]++;
//       break;
//     case "compost":
//       bins["compost"]++;
//       break;
//   }
//   return bins;
// }




//************************************************************************************************ */

// const carPassing = function (cars, speed) {
//   // Your code in here ...
//   time = Date.now();
//   var person = {
//     time : time;
//     speed : speed;
//   }
//   cars.push(person);
//   return cars
// }


/***********************************Judge Vegetable************************************************************ */
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

const judgeVegetable = function (vegetables, metric) {
  // Your code in here ...
  let largest = 0;
  // let res = "";
  let obj = {};
  for (let i = 0; i < vegetables.length; i++) {
    if(vegetables[i][metric]> largest){
      largest = vegetables[i][metric];
      obj = vegetables[i];
      console.log(largest);
      // res = vegetables[i]["submitter"];
    }
  }
  return obj.submitter;
}

console.log(judgeVegetable(vegetables, metric))


/**********************************Kata 1************************************************************** */

// const sumLargestNumbers = function (arr) {
//   var larggest = 0;
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > larggest) {
//     larggest = arr[i];
//     }
//   }
//   console.log(arr.splice(arr.indexOf(larggest), 1));//we can see we take out the largest number from the array
//   console.log(arr);//here we can see the rest of numbers in the arr
//   var sec_lar = 0;
//   for (var j = 0; j < arr.length; j++) {
//     if (arr[j] > sec_lar) {
//     sec_lar = arr[j];
//     }
//   }
//   return larggest + sec_lar;
// };

// console.log(sumLargestNumbers([1, 10]));
// console.log(sumLargestNumbers([1, 2, 3]));
// console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));