let buttonContent = document.querySelectorAll(".buttons");
let output = document.getElementById("output");
let numbers = "";




for (var i = 0; i < buttonContent.length; i++) {
  var self = buttonContent[i];

  self.addEventListener("click",function(event) {
    event.preventDefault();
    button(this);
  }, false);
}

function button(content) {


  if (content.textContent == "CE" || content.textContent == "C"){
      output.textContent = "0"; //clears number string
      numbers = "";
  } else if (content.textContent == "Back"){
      if (numbers.length == 1) {
        output.textContent = "0";
        numbers = "";
    } else if (numbers.length != 0) {
        numbers = numbers.substring(0, numbers.length - 1); // removes last digit from current number string
        output.textContent = numbers;
    }
  } else {
      numbers += content.textContent; // adds number clicked to output string
        output.textContent = numbers;
  }


}
