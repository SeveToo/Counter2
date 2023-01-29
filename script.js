// const btn1 = document.querySelector(".btn1");
// const output = document.querySelector(".output");
// const inp1 = document.querySelector(".inp1");

// function getNewDate(date, addDays) {
//   let date1 = new Date(date);
//   let new_date = new Date(date1.setDate(date1.getDate() + addDays));
//   return new_date;
// }

// btn1.addEventListener("click", () => {
//   let date = inp1.value;
//   let addDays = 10;
//   // let day = getNewDate(date, addDays).getDate();
//   // let month = getNewDate(date, addDays).getMonth() + 1;
//   // let year = getNewDate(date, addDays).getFullYear();
//   console.log(getNewDate(date, addDays).toLocaleString("en-GB"));
//   output.innerHTML = getNewDate(date, addDays).toLocaleString("en-GB"); //`${day}/${month}/${year}`;
// });

// Input start date
const input_day = document.querySelector("#day");
const input_month = document.querySelector("#month");
const input_year = document.querySelector("#year");

const submit_button = document.querySelector(".app__button");

submit_button.onclick = () => {
  // alert("maslo");
  // let day = input_day.value;
  // let month = input_month.value;
  // let year = input_year.value;
  // let date = new Date(year, month, day);
  // let addDays = 10;
  // let new_date = new Date(date.setDate(date.getDate() + addDays));
  // console.log(new_date.toLocaleString("en-GB"));
  // document.querySelector(".app__output").innerHTML = new_date.toLocaleString("en-GB");
};
