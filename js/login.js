// step-1 set the event handler
document
  .getElementById("button-login")
  .addEventListener("click", function (event) {
    // step-2 prevent default behavior(prevent reloding browser)
    event.preventDefault();

    // step-3 get the phone number and pin number
    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;

    //step-4 validated phone and pin
    //bad way to practice its will not in future(this is temporary i should not do like this )
    if (phoneNumber === "12" && pinNumber === "12") {
      //step=5 allow user to use the website
      window.location.href = "/home.html";
    } else {
      alert("your phone number and pin is incorrect");
    }

    console.log(phoneNumber, pinNumber);
  });
