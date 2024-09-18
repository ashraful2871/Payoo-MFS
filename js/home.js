//  Add money
// step-1 add an event handler to the add money button inside the from
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    // prevent relode page after submit
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
    } else {
      alert("Failed to add money! please provide the valid pin number!");
    }
  });
