//  tHIS IS TO CREATE js arrays to store information
// EVRYTHING BELOW CAN BE USED TO STYLE FILTERS FOR RECIPE PAGE, insights into how to build your own filter, technical aspetcs. 
// however you can use filter.js doc for a template filter
var fruit1 = "banana";
var fruit2 = "pineapple";
var fruit3 = "apple";
var fruit4 = "peach";
var fruit5 = "orange";
// arrays (are DATA STRUCTURES) can be used to store recipes and group them, enables us to access same info in DIFFERENT  ways
//arrays (below) are a way to store lot of information. instead of each fruit name separate (like above), in a differnt variable we can save them together in an array (a variable that holds different info). square bracktes to include multiple info into one variable, every value is separated by comma in the brackets
var fruitArray = ["banana", "pineapple", "apple", "peach", "orange"]; // end of array
fruitArray[2] = "tomato"; // index of 2, index number (2) changes values (changes apples into tomatoes values)
fruitArray.push("potatoe"); // .push ADDS values in the array

// another array
var mixedArray = [42, "pineapple", true, [3, 6, "nine"], "orange"]; // true of false values are booleans

console.log(fruitArray); // check console for 2 different result by these 2 arrays
console.log(fruitArray.length); //this tells me how many values there are in single array (click inspector anc ocnsole online and  tels u there are 5 values in this array)

console.log(fruitArray[2]); // creates index to access values separately one single at a time (check console online as well. every value (fruit) ahs a different value from 0 to 5 (5 values, 5 fruits, from 0 to 5)
console.log(fruitArray[3] [2]); // number of index in square brackets, enables us to access same info in DIFFERENT  ways

// LOPP AFFECT ALL ELEMENTS
for(x of fruitArray){ //fruitarray is y in this case, general code is for(x of y)
}

for(let fruit of fruitArray){
   // console.log("hi");
   if (fruit === "banana"){
    console.log("i'm a banana");
   } else {
    console.log(fruit);
   }
}
// purple words are keywords to run code