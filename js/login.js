// step-1 set the event handler
document
  .getElementById("button-login")
  .addEventListener("click", function (event) {
    // step-2 prevent default behavior(prevent reloding browser)
    event.preventDefault();
    console.log("Ash");

    // step-3 get the phone number
    const phoneNumber = document.getElementById("phone-number").value;
    console.log(phoneNumber);
  });
