const lock1 = document.querySelector("#lock1");
const lock2 = document.querySelector("#lock2");
const shiftDaysLabel = document.querySelector(".shiftDaysLabel");
const shiftDaysInput = document.querySelector(".shiftDaysInput");
const rangeDaysLabel = document.querySelector(".rangeDaysLabel");
const rangeDaysInput = document.querySelector(".rangeDaysInput");

lock1.addEventListener("change", () => {
  if (!lock1.checked) {
    shiftDaysLabel.classList.remove("input_description-locked");
    shiftDaysInput.classList.remove("input__field_value-locked");
    shiftDaysInput.disabled = false;
  } else {
    shiftDaysLabel.classList.add("input_description-locked");
    shiftDaysInput.classList.add("input__field_value-locked");
    shiftDaysInput.disabled = true;
  }
});

lock2.addEventListener("change", () => {
  if (!lock2.checked) {
    rangeDaysLabel.classList.remove("input_description-locked");
    rangeDaysInput.classList.remove("input__field_value-locked");
    rangeDaysInput.disabled = false;
  } else {
    rangeDaysLabel.classList.add("input_description-locked");
    rangeDaysInput.classList.add("input__field_value-locked");
    rangeDaysInput.disabled = true;
  }
});
