window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = function(e) {
    e.preventDefault();
  }
}

function langType() {
  let activity = document.querySelector('input[name="activity"]:checked').value;
  let awareness = document.querySelector('input[name="awareness"]:checked').value;
  let decide = document.querySelector('input[name="decide"]:checked').value;
  let food = document.querySelector('input[name="food"]:checked').value;
  let animal = document.querySelector('input[name="animal"]:checked').value;

  let langType;
  if (activity === "1" && awareness === "1" && decide === "1" && food === "1" && animal === "1") {
    langType = "Javascript";
  } else if (activity === "2" && awareness === "2" && decide === "2" && food === "2" && animal === "2") {
    langType = "Ruby";
  } else if (activity === "3" && awareness === "3" && decide === "3" && food === "3" && animal === "3") {
    langType = "Python";
  } else {
    langType = "C#";
  }

  const resultDiv = document.getElementById("result");
  resultDiv.textContent = "We recommend learning " + langType + " as your first programming language.";


  document.getElementById("tryAgain").addEventListener("click", function(){
  let form = document.querySelector("form");
  form.reset();

  document.getElementById("result").innerHTML = "";
  });
}