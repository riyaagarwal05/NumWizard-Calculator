let string = " ";
let last1 = document.getElementById("last1");
let last2 = document.getElementById("last2");
let last3 = document.getElementById("last3");
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "C") {
      string = "";
      document.querySelector(".answerinput").value = string;
    } else if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector(".answerinput").value = string;
      if (last3.value == "") {
        last3.value = string;
      } else if (last2.value == "") {
        last2.value = string;
      } else if (last1.value == "") {
        last1.value = string;
      } else {
        last1.value = "";
        last2.value = "";
        last3.value = string;
      }
    } else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector(".answerinput").value = string;
    }
  });
});
let text = document.getElementById("answer");
text.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    console.log("Enter Pressed");
    string = text.value;
    string = eval(string);
    document.getElementById("answer").value = string;
  }
});
