window.onload = () => {
  // let onedaybutton = document.getElementById("day-1-button");
  // let twodaybutton = document.getElementById("day-2-button");
  // function onclickOneDay() {
  //   alert("ボタンがクリックされました！");
  //   onedaybutton.classList.add("delete-border-bottom");
  // }
};

function onclickOneDay() {
  // alert("ボタンがクリックされました！");
  let onedaybutton = document.getElementById("day-1-button");
  let twodaybutton = document.getElementById("day-2-button");
  const target = document.querySelector("#targetImage");
  const url = "../image/event/stage/stage_day1.png";
  target.src = url;
  onedaybutton.classList.add("delete-border-bottom");
  twodaybutton.classList.remove("delete-border-bottom");
}

function onclickTwoDay() {
  // alert("ボタンがクリックされました！");
  let onedaybutton = document.getElementById("day-1-button");
  let twodaybutton = document.getElementById("day-2-button");
  const target = document.querySelector("#targetImage");
  const url = "../image/event/stage/stage_day2.png";
  target.src = url;
  console.log(url);
  twodaybutton.classList.add("delete-border-bottom");
  onedaybutton.classList.remove("delete-border-bottom");
}
