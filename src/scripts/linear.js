let textOfAlert = "";
function CreateArreyForLinearSearch() {
  CreateArray("linearDisplay");
}

function LinearSearch() {
  if (searchedForLinear.value != "") {
    if (linearDisplay.textContent != "") {

      let arrayForSearch = [];
      arrayForSearch = linearDisplay.textContent.split(",");

      for(i = 0; i < arrayForSearch.length -1; i++){
        if(searchedForLinear.value == arrayForSearch[i]){
          console.log(i + 1);
          textOfAlert = ("Введене значення знаходить в масиві під номером " + (i + 1));
          break;
        }
        else {
          textOfAlert = "Введене значення не знайдено";
        }
      }
      alert(textOfAlert);

    } else {
      alert("Створіть масив значень");
    }
  } else {
    alert("Введіть значення для пошуку");
  }
}