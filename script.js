"use strict";
const formvalidation = document.getElementById("form-validation");
const personalinfo = document.getElementById("personal-info");
const input = document.getElementById("email");
const output = document.getElementById("output");
const viewbtn = document.querySelectorAll(".viewbtn");
const details = document.querySelectorAll(".details");
const jobif = document.querySelectorAll(".job-if");

// Hide personal information
personalinfo.classList.add("hide");

// Verify that strings are in a valid email format
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Check the valid email address format
function testInfo(emailInput) {
  const pass = regex.exec(emailInput.value);

  // Display personal information only when a valid email address is entered
  if ((output.textContent = pass)) {
    personalinfo.classList.remove("hide");
    formvalidation.classList.add("hide");
  } else {
    output.textContent = `${emailInput.value} isn't an email with area code!`;
  }
}

formvalidation.addEventListener("submit", (event) => {
  event.preventDefault();
  testInfo(input);
});

// Hide details and display the view more button when hovering over each part
for (let i = 0; i < details.length; i++) {
  details[i].classList.add("hide");
  details[3].classList.remove("d-grid");
  viewbtn[i].classList.add("hide");

  function mouseOver() {
    viewbtn[i].classList.remove("hide");
  }

  function mouseOut() {
    viewbtn[i].classList.add("hide");
  }

  jobif[i].addEventListener("mouseover", mouseOver);
  jobif[i].addEventListener("mouseout", mouseOut);

  const myEvents = {
    click: toggleView,
  };

  function toggleView() {
    if (details[i].classList.contains("hide")) {
      // If the details are hidden, show them and change the button text
      details[i].classList.remove("hide");
      viewbtn[i].innerHTML = "🔺VIEW LESS";
    } else {
      // If the details are visible, hide them and change the button text
      details[i].classList.add("hide");
      viewbtn[i].innerHTML = "🔻VIEW MORE";
    }
  }

  Object.keys(myEvents).forEach((key) => {
    viewbtn[i].addEventListener(key, myEvents[key]);
  });
}
