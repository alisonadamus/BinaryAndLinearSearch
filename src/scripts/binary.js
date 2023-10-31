let lastNumber;
let searchedNumber;
let averageElement;

function CreateArreyForBinarySearch() {
  CreateArray("binaryDisplay");
}

function BinarySearch() {
  if (searchedForBinary.value != "") {
    if (binaryDisplay.textContent != "") {

      let createdArray = [];
      createdArray = binaryDisplay.textContent.split(",");

      searchedNumber = parseInt(searchedForBinary.value);
      lastNumber = parseInt(createdArray[createdArray.length - 1]);

      if (searchedNumber > lastNumber) {
        alert("Введене значення не знайдено");
      } else if (searchedNumber == createdArray[0]) {
        alert("Введене значення знаходить в масиві під номером 1");
      } else {
        BinarySearchOnArray(1, createdArray.length, createdArray);
      }

    } else {
      alert("Створіть масив значень");
    }
  } else {
    alert("Введіть значення для пошуку");
  }
}

function BinarySearchOnArray(firstElement, lastElement, arrayForSearch) {
  if((firstElement + 1) == lastElement){
     return alert("Введене значення не знайдено");
  }
  console.log("firstElement" + firstElement);
  console.log("lastElement" + lastElement);

  averageElement = Math.round((firstElement + lastElement) / 2);
  console.log("середній індекс" + averageElement);
  avarageNumber = arrayForSearch[averageElement - 1];

  if (searchedNumber == avarageNumber) {
    alert("Введене значення знаходить в масиві під номером " + averageElement);
  } else if (searchedNumber < avarageNumber) {
    BinarySearchOnArray(firstElement, averageElement, arrayForSearch);
  } else if (searchedNumber > avarageNumber) {
    BinarySearchOnArray(averageElement, lastElement, arrayForSearch);
  }
}