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
// const vegetables = [
//   {
//     submitter: 'Old Man Franklin',
//     redness: 10,
//     plumpness: 5
//   },
//   {
//     submitter: 'Sally Tomato-Grower',
//     redness: 2,
//     plumpness: 8
//   },
//   {
//     submitter: 'Hamid Hamidson',
//     redness: 4,
//     plumpness: 3
//   }
// ]

// const metric = 'plumpness'

// const judgeVegetable = function (vegetables, metric) {
//   // Your code in here ...
//   let largest = 0;
//   // let res = "";
//   let obj = {};
//   for (let i = 0; i < vegetables.length; i++) {
//     if(vegetables[i][metric]> largest){
//       largest = vegetables[i][metric];
//       obj = vegetables[i];
//       console.log(largest);
//       // res = vegetables[i]["submitter"];
//     }
//   }
//   return obj.submitter;

  
// }

// console.log(judgeVegetable(vegetables, metric))


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

//******************************Kata 2- Conditional Sums****************************************************************** */
// const conditionalSum = function(values, condition) {
//   // Your code here
//   var sum = 0;
//   if (values.length > 0){
//     if (condition === "even"){
//       for (let i = 0; i < values.length; i++){
//         if(values[i]%2 === 0){
//           sum += values[i];
//         }
//       }
//     }else{
//       for (let i = 0; i < values.length; i++){
//         if(values[i]%2 ===1){
//           sum += values[i];
//         }
//       }
//     }
//     return sum;
//   }else{
//     return sum;
//   }
// };

// console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
// console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
// console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
// console.log(conditionalSum([], "odd"));


//*********************************Kata 3 - Vowels*************************************************************** */

// const numberOfVowels = function(data) {
//   // Put your solution here
//   var count = 0; // count the number of a, e, i, o, u 
//   for (var i = 0; i < data.length; i++) {
//     //when any of these conditions is true we add 1 count 
//     if((data[i] === "a") || (data[i] === "e") || (data[i] === "i") || (data[i] === "o") || (data[i] === "u")) {
//       count++;
//     }
//   }
//   return count;
// };

// console.log(numberOfVowels("orange"));
// console.log(numberOfVowels("lighthouse labs"));
// console.log(numberOfVowels("aeiou"));



//*********************************Kata 4 - Instructors Names*************************************************************** */

// const instructorWithLongestName = function(instructors) {
//   // Put your solution here
//   // Create a function named instructorWithLongestName that will 
//   // receive an array of instructor objects, and return the object that has the longest name. 
//   // If there are two instructors with the longest name, return the first one.
//   let obj = {};
//   let name_len = 0;
//   for(let i=0; i< instructors.length; i++){
//     if(instructors[i].name.length > name_len){
//       console.log(instructors[i].name.length)
//       name_len = instructors[i].name.length;
//       obj = instructors[i];
//     }
//   };
//   return obj;
// };

// console.log(instructorWithLongestName([
//   {name: "Samuel", course: "iOS"},
//   {name: "Jeremiah", course: "Web"},
//   {name: "Ophilia", course: "Web"},
//   {name: "Domascus", course: "Web"}
// ]));
// console.log(instructorWithLongestName([
//   {name: "Matthew", course: "Web"},
//   {name: "David", course: "iOS"},
//   {name: "Domascus", course: "Web"}
// ]));

//***********************************Kata 5 - Percent Encoded String************************************************************* */


// const urlEncode = function(text) {
//   // Put your solution here
//   let new_txt = "";
//   if (text[0] !== " ") {
//     for (let i = 0; i < text.length; i++) {
//     text[i] === " " ? new_txt += "%20" : new_txt += text[i];
//     }
//   return new_txt;
//   }
//   for (let i = 1; i < text.length - 1; i++) {
//     text[i] === " " ? new_txt += "%20" : new_txt += text[i];
//   }
//   return new_txt;
// };

// console.log(urlEncode("Lighthouse Labs"));
// console.log(urlEncode(" Lighthouse Labs "));
// console.log(urlEncode("blue is greener than purple for sure"));



/*******************************Kata 6 - SmartParking***************************************************************** */

// const whereCanIPark = function (spots, vehicle) {
//   // Code here!
//   for(let i = 0; i < spots.length; i++) {
//     for (let j = 0; j < spots[i].length; j++) {
//       if((vehicle = "regular" ) && (spots[i][j] ==="R" )){
//         // console.log(j,i);
//         return [j , i];
//       }else if((vehicle === "small")&& (spots[i][j] ==="R" || spots[i][j] === "S")){
//         // console.log(j,i); 
//         return [j, i];
//       }else if((vehicle === 'motorcycle') && (spots[i][j] === "S"|| spots[i][j] === "R"|| spots[i][j] === "M")) {
//         // console.log(j, i); 
//         return [j, i];
//       }
//     } 
//   }
//   return false;
// };

// console.log(whereCanIPark(
//   [
//     // COLUMNS ARE X
//     // 0    1    2    3    4    5
//     ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
//     ['s', 'M', 's', 'S', 'r', 'M'], // 1
//     ['s', 'M', 's', 'S', 'r', 'm'], // 2
//     ['S', 'r', 's', 'm', 'r', 'M'], // 3
//     ['S', 'r', 's', 'm', 'r', 'M'], // 4
//     ['S', 'r', 'S', 'M', 'M', 'S']  // 5
//   ],
//   'regular'
// ));

// console.log(whereCanIPark(
//   [
//     ['M', 'M', 'M', 'M'],
//     ['M', 's', 'M', 'M'],
//     ['M', 'M', 'M', 'M'],
//     ['M', 'M', 'r', 'M']
//   ],
//   'small'
// ));

// console.log(whereCanIPark(
//   [
//     ['s', 's', 's', 's', 's', 's'],
//     ['s', 'm', 's', 'S', 'r', 's'],
//     ['s', 'm', 's', 'S', 'r', 's'],
//     ['S', 'r', 's', 'm', 'r', 's'],
//     ['S', 'r', 's', 'm', 'R', 's'],
//     ['S', 'r', 'S', 'M', 'm', 'S']
//   ],
//   'motorcycle'
// ))



/***************************************Kata 7 - In the Air Tonight******************************************************** */


// const checkAir = function (samples, threshold) {
//   // Code here!
//   var numClean = 0;
//   var numDirty = 0;
//   for (var sample of samples) {
//     switch(sample) {
//       case 'clean':
//         numClean++;
//         break;
//       case 'dirty':
//         numDirty++;
//         break;
//     }
//   }
//   var percentage = numDirty / (numDirty + numClean);
//   if (percentage > threshold) {
//     return 'Polluted';
//   }else{
//     return 'Clean';
//   }  
// };

// console.log(checkAir(
//   ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
//   0.3
// ));

// console.log(checkAir(
//   ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
//   0.25
// ));

// console.log(checkAir(
//   ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
//   0.9
// ))

//***************************************Kata 8 - Repeating Numbers********************************************************* */


// const repeatNumbers = function(data) {
//   // Put your solution here 
//   let arr = [];
//   for (let i = 0; i < data.length; i++) {
//     // console.log(data.length)// this should show how many elements in the "data" array
//     let num = data[i][0];
//     let length = data[i][1];
//     str ="";
//     for (let j= 0; j<length; j++) {
//       str += num;
//       // console.log(str);//console.log(arr); this should keep printing how many data it has 
//     }
//     arr.push(str);
//     // return str // MUST NOT RETURN STR here!!!!
//   }
//   // console.log(str)//show what we store in the arr array 
//   return arr;
// };

// const repeatNumbers = function(data) {
//   // Put your solution here
//   let arr = [];
//   for (let i = 0; i < data.length; i++) {
//     let num = data[i][0]; // first element of the number pair
//     let count = data[i][1]; // second element of the number pair
//     str ="";
//     for (let j= 0; j<count; j++) {
//       str += num;
//     }
//     arr.push(str);
//   }
//   console.log(str)//show what we store in the arr array 
//   return arr;
// };

// console.log(repeatNumbers([[1, 10]]));
// console.log(repeatNumbers([[1, 2], [2, 3]]));
// console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
// expected output
// 1111111111
// 11, 222
// 10101010, 343434343434, 9292


//************************************Kata 9 - Case Maker************************************************************ */

// const camelCase = function(input) {
//   // Your code here
//   let str = "";
//   let capNext = false;
//   for(let i = 0; i < input.length; i++) {
//     if(input[i] === " "){ 
//       capNext = true;
//     }else{
//       if(capNext){
//         str += input[i].toUpperCase();
//         capNext = false;
//       }else{
//         str += input[i].toLowerCase();
//       }
//     }
//   }
//   // console.log(str);
//   return str;
// };

// console.log(camelCase("this is a string"));
// console.log(camelCase("loopy lighthouse"));
// console.log(camelCase("supercalifragalisticexpialidocious"));
// console.log(camelCase("this is aAPPLE"))
//expected output
// thisIsAString
// loopyLighthouse
// supercalifragalisticexpialidocious

//*************************************Kata 10 - Multiplication Table*********************************************************** */

// const multiplicationTable = function(maxValue) {
//   // Your code here
//   let max = 0; 
//   let arr = [];
//   for (let r = 1; r < maxValue+1; r++) {
//     // create rows 
//     let innArr = [];
//     for (let c = 1; c < maxValue+1; c++) {
//       max = r * c 
//       // console.log(max);
//       innArr.push(max);
//     }
//     arr.push(innArr);
//   }
//   return arr
// };

// console.log(multiplicationTable(1));
// console.log(multiplicationTable(5));
// console.log(multiplicationTable(10));

//*************************************Kata 11 - Bouncy Castles*********************************************************** */


// // Use the value below whenever you need the value of Pi
// const PI = 3.14159 ;

// const sphereVolume = function (radius) {
//   // Code here!
//   //sphere volume formula v = 4/3 pi * (r**3)
//   sphereVol = 4/3 * PI * radius**3;
//   return sphereVol;
// }

// console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

// const coneVolume = function (radius, height) {
//   // And here!
//   //cone volume formula v = pi * (r**2) * (h/3) 
//   coneVol = PI * (radius**2) * (height/3);
//   return coneVol;
// }

// console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

// const prismVolume = function (height, width, depth) {
//   // Probably here too!
//   prismVol = height * width * depth;
//   return prismVol;
// }

// console.log(prismVolume(3, 4, 5) === 60);

// const totalVolume = function (solids) {
//   // Code here? Yup!
//   let total = 0;
//   for (let i = 0; i < solids.length; i++) {
//     switch(solids[i]["type"]) {
//       case "sphere":
//         total += sphereVolume(solids[i]["radius"]);
//         break;
//       case "cone":
//         total += coneVolume(solids[i]["radius"],solids[i]["height"]);
//         break;
//       case "prism":
//         total += prismVolume(solids[i]["height"], solids[i]["width"], solids[i]["depth"]);
//         break;
//     }
//   }
//   // console.log(total);// should print out the total volume for all the type of diffenent shapes.
//   return total;
// }

// const largeSphere = {
//   type: 'sphere',
//   radius: 40
// }

// const smallSphere = {
//   type: 'sphere',
//   radius: 10
// }

// const cone = {
//   type: 'cone',
//   radius: 3,
//   height: 5
// }

// const duck = [
//   largeSphere,
//   smallSphere,
//   cone
// ]

// console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);

/*********************************Kata 12 - The Great Codeville Bake-off***************************************************** */

const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  // Code here!
  for(let i = 0; i < recipes.length; i++) {
    for(let j=0; j < recipes[i]["ingredients"].length; j++) {
      for(let k=0; k< bakeryA.length; k++){
        if(bakeryA[k]["ingredients"])
        console.log(bakeryA[k])
      }
    }
  }
  
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
