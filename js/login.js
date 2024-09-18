// step-1 set the event handler
document
  .getElementById("button-login")
  .addEventListener("click", function (event) {
    // step-2 prevent default behavior(prevent reloding browser)
    event.preventDefault();

    // step-3 get the phone number
    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;

    //bad way to practice its will not in future
    if (phoneNumber === "01759030544" && pinNumber === "2871") {
      window.location.href = "/home.html";
    } else {
      alert("your phone number and pin is incorrect");
    }

    console.log(phoneNumber, pinNumber);
  });
