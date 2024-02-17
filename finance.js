let tFrom = document.getElementById("tFrom");
let details = document.getElementById("details");
let amount = document.getElementById("amount");
let loggerOutput = document.querySelector(".logger-output");
let selectType = document.querySelector("#selectType");

let type = "";

selectType.addEventListener("change", (e) => {

  type = selectType.value;

});



btn.addEventListener("click", (e) => {
  e.preventDefault();

  let debitCredit = tFrom.value;
  let userDetails = details.value;
  let Amount = amount.value;


  if (!debitCredit || !userDetails || !Amount) {
    alert("Input Required");
  } else {
    const userFinance = {
      tFrom: debitCredit,
      details: userDetails,
      amount: `$${Amount}`,
    };
    localStorage.setItem("userFinance", JSON.stringify(userFinance));



    let outputDiv = document.createElement("div");
    outputDiv.classList.add("output");

    let title = document.createElement("h3");
    title.classList.add("title");
    title.textContent = type
    outputDiv.appendChild(title);

    let paragraph = document.createElement("p");
    paragraph.textContent = `${userFinance.details} ${userFinance.amount} ${userFinance.tFrom}`;
    outputDiv.appendChild(paragraph);

    loggerOutput.appendChild(outputDiv);
  }
});
