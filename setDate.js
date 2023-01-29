const orginal__date = document.querySelector(".orginal__date");
const new__date = document.querySelector(".new__date");
const new__dateMinus = document.querySelector(".new__dateMinus");
const new__datePlus = document.querySelector(".new__datePlus");
const shift__input = document.querySelector(".shiftDaysInput");
const range__input = document.querySelector(".rangeDaysInput");
const range = document.querySelectorAll(".range");
const shift = document.querySelector(".shift");

let shiftDays = shift__input.value || 30;
let rangeDays = range__input.value || 14;

function addZero(value) {
  if (value < 10) {
    return `0${value}`;
  } else {
    return value;
  }
}

function getNewDate(date, addDays) {
  let date1 = new Date(date);
  let new_date = new Date(date1.setDate(date1.getDate() + addDays));
  return new_date;
}

function formatOutput(obj) {
  let day = addZero(obj.getDate());
  let month = addZero(obj.getMonth() + 1);
  let year = obj.getFullYear();
  return `${day}.${month}.${year}`;
}

submit.addEventListener("click", () => {
  shiftDays = shift__input.value;
  rangeDays = range__input.value;

  let orginalDateObj = new Date(
    Number(year__input.value),
    Number(month__input.value - 1),
    Number(day__input.value)
  );
  let newDateObj = getNewDate(orginalDateObj, Number(shiftDays));
  let newDateObjMinus = getNewDate(
    orginalDateObj,
    Number(shiftDays) - Number(rangeDays)
  );
  let newDateObjPlus = getNewDate(
    orginalDateObj,
    Number(shiftDays) + Number(rangeDays)
  );

  // orginal__date.innerText = `${addZero(orginalDateObj.getDate())}.${addZero(
  //   orginalDateObj.getMonth()
  // )}.${orginalDateObj.getFullYear()}`;
  orginal__date.innerText = formatOutput(orginalDateObj);
  new__date.innerText = formatOutput(newDateObj);
  new__dateMinus.innerText = formatOutput(newDateObjMinus);
  new__datePlus.innerText = formatOutput(newDateObjPlus);

  range.forEach((el) => {
    el.innerText = ` ${rangeDays} `;
  });
  shift.innerText = `  ${shiftDays} `;
});
