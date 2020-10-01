var switchStatus = false;
var togButton = document.getElementById("togBtn");
var basic = document.getElementById("basic");
var Professional = document.getElementById("Professional");
var Master = document.getElementById("Master");

togButton.addEventListener("change", function () {
  if (this.checked == true) {
    switchStatus = this.checked;
    basic.innerHTML = "<span>$</span>19.99";
  } else {
    switchStatus = this.checked;
    basic.innerHTML = "<span>$</span>199.99";
  }

  if (this.checked == true) {
    switchStatus = this.checked;
    Professional.innerHTML = "<span>$</span>24.99";
  } else {
    switchStatus = this.checked;
    Professional.innerHTML = "<span>$</span>249.99";
  }

  if (this.checked == true) {
    switchStatus = this.checked;
    Master.innerHTML = "<span>$</span>39.99";
  } else {
    switchStatus = this.checked;
    Master.innerHTML = "<span>&dollar;399.99</span>";
  }
});