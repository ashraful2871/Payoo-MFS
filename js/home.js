//  Add money
// step-1 add an event handler to the add money button inside the from
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    // prevent reload page after submit
    event.preventDefault();

    // step-2 get money to be added the account balance also pin number
    const inputAmount = document.getElementById("input-amount").value;
    //console.log(typeof inputAmount);
    // get pin number
    const inputPin = document.getElementById("input-pin-number").value;

    //step-3 verify the pin number
    if (inputPin === "12") {
      // step-4 get the current balance
      const accountBalance =
        document.getElementById("account-balance").innerText;
      //console.log(typeof accountBalance);

      // step-4 add money input with account Balance
      const accountBalanceToNumber = parseFloat(accountBalance);
      const inputAmountToNumber = parseFloat(inputAmount);
      const newBalance = accountBalanceToNumber + inputAmountToNumber;

      // step-5 update main balance
      document.getElementById("account-balance").innerText = newBalance;
      // clear the input
      document.getElementById("input-amount").value = "";
      document.getElementById("input-pin-number").value = "";
      alert("Are you sure You want to add money your wallet?");
    } else {
      alert("Failed to add money! please provide the valid pin number!");
    }
  });

// Cash Out
document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashOutAmount = document.getElementById(
      "input-cash-out-amount"
    ).value;
    const cashOutAmountToNumber = parseFloat(cashOutAmount);
    const cashOutPin = document.getElementById(
      "input-cash-out-pin-number"
    ).value;

    if (cashOutPin === "12") {
      const accountBalance =
        document.getElementById("account-balance").innerText;
      const accountBalanceToNumber = parseFloat(accountBalance);
      const newBalance = accountBalanceToNumber - cashOutAmountToNumber;

      document.getElementById("account-balance").innerText = newBalance;
      document.getElementById("input-cash-out-amount").value = "";
      document.getElementById("input-cash-out-pin-number").value = "";
      alert("are you sure you want to cash out money from your wallet?");
    } else {
      alert("Failed to cash out! Please try again");
    }
  });

//===========================================toggle features============================

//show cash out form
document.getElementById("show-cash-out").addEventListener("click", function () {
  // show cash out button when click
  document.getElementById("cash-out-form").classList.remove("hidden");

  // hide the add money form
  document.getElementById("add-money-form").classList.add("hidden");
});

// show add money form and hide the cash out form
document
  .getElementById("show-add-money")
  .addEventListener("click", function () {
    // show add money button when click
    document.getElementById("add-money-form").classList.remove("hidden");

    //hide cash out form\
    document.getElementById("cash-out-form").classList.add("hidden");
  });

const nameOfOrganization = document.getElementById("name").value;
console.log(nameOfOrganization);
event.stopImmediatePropagation();
