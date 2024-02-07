// LW 15.01.24

// 1
// Task 1
let randomArray = Array.from({ length: 10 }, () =>
  Math.floor(Math.random() * 100)
);

// Task 2
function displayArray(arr) {
  alert("Array: " + arr.join(", "));
}

// Task 3
function displayEvenElements(arr) {
  let evenElements = arr.filter((element) => element % 2 === 0);
  alert("Even Elements: " + evenElements.join(", "));
}

// Task 4
function calculateSum(arr) {
  let sum = arr.reduce((acc, curr) => acc + curr, 0);
  return sum;
}

// Task 5
function findMaxElement(arr) {
  let maxElement = Math.max(...arr);
  return maxElement;
}

// Task 6
function addElementAtIndex(arr, index, element) {
  arr.splice(index, 0, element);
}

// Task 7
function removeElementAtIndex(arr, index) {
  arr.splice(index, 1);
}

// Test the functions
displayArray(randomArray);
displayEvenElements(randomArray);
alert("Sum of elements: " + calculateSum(randomArray));
alert("Max element: " + findMaxElement(randomArray));

addElementAtIndex(randomArray, 3, 99);
alert("Array after adding element at index 3: " + randomArray.join(", "));

removeElementAtIndex(randomArray, 5);
alert("Array after removing element at index 5: " + randomArray.join(", "));

// 2
// Task 1
let secondRandomArray = Array.from({ length: 5 }, () =>
  Math.floor(Math.random() * 50)
);

// Task 2
function mergeArraysWithoutDuplicates(arr1, arr2) {
  let mergedArray = [...new Set([...arr1, ...arr2])];
  return mergedArray;
}

// Task 3
function findCommonElementsWithoutDuplicates(arr1, arr2) {
  let commonElements = arr1.filter((element) => arr2.includes(element));
  return [...new Set(commonElements)];
}

// Task 4
function findUniqueElements(arr1, arr2) {
  let uniqueElements = arr1.filter((element) => !arr2.includes(element));
  return uniqueElements;
}

// Test the functions
alert("Array 1: " + randomArray.join(", "));
alert("Array 2: " + secondRandomArray.join(", "));

let mergedArray = mergeArraysWithoutDuplicates(randomArray, secondRandomArray);
alert("Merged array without duplicates: " + mergedArray.join(", "));

let commonElementsArray = findCommonElementsWithoutDuplicates(
  randomArray,
  secondRandomArray
);
alert("Common elements without duplicates: " + commonElementsArray.join(", "));

let uniqueElementsArray = findUniqueElements(randomArray, secondRandomArray);
alert(
  "Unique elements from Array 1 not in Array 2: " +
    uniqueElementsArray.join(", ")
);

// 3
// Task 1
let fruitsArray = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
fruitsArray.sort((a, b) => a.localeCompare(b, "en", { sensitivity: "base" }));

// Task 2
function displayFruitsList() {
  document.write("<ul>");
  fruitsArray.forEach((fruit) => {
    document.write(`<li>${fruit}</li>`);
  });
  document.write("</ul>");
}

// Task 3
function findFruitIndex(fruitName) {
  let lowerCaseFruitName = fruitName.toLowerCase();
  let index = fruitsArray.findIndex(
    (fruit) => fruit.toLowerCase() === lowerCaseFruitName
  );
  return index;
}

// Test the functions
document.write("<p>Sorted Fruits List:</p>");
displayFruitsList();

let searchFruit = prompt("Enter a fruit to search:");
let fruitIndex = findFruitIndex(searchFruit);

if (fruitIndex !== -1) {
  document.write(`<p>${searchFruit} found at index: ${fruitIndex}</p>`);
} else {
  document.write(`<p>${searchFruit} not found in the fruits list.</p>`);
}
