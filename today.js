const day__input = document.querySelector("#day");
const month__input = document.querySelector("#month");
const year__input = document.querySelector("#year");
const today = document.querySelector(".app__button_small");
const submit = document.querySelector(".app__button");

// get today date and console log it
function getTodayDate() {
  const date = new Date();
  let [day, month, year] = [
    date.getDate(),
    date.getMonth() + 1,
    date.getFullYear(),
  ];
  return [day, month, year];
}

window.addEventListener("load", () => {
  year = getTodayDate()[2];
  year__input.value = year;
});

today.addEventListener("click", () => {
  day__input.value = getTodayDate()[0];
  month__input.value = getTodayDate()[1];
  year__input.value = getTodayDate()[2];
});

submit.addEventListener("click", () => {
  if (day__input.value == "" || day__input.value > 31) {
    day__input.value = getTodayDate()[0];
  }

  if (month__input.value == "" || month__input.value > 12) {
    month__input.value = getTodayDate()[1];
  }
  if (year__input.value == "") {
    year__input.value = getTodayDate()[2];
  }
});
