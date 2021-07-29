const form = document.forms.checkform;
const inputs = document.querySelectorAll(".input");

const btn = document.querySelector(".btn-check");

const outDiv = document.querySelector(".output");
const outMsg = document.querySelector("#outputMsg");

const container = document.querySelector(".container");

const defaultImg = document.querySelector("#img-desktop-default");
const happyImg = document.querySelector("#img-desktop-happy");
const sadImg = document.querySelector("#img-desktop-sad");

const handleInputs = (e) => {
  e.preventDefault();
  let CP = parseInt(inputs[0].value);
  let Qty = parseInt(inputs[1].value);
  let SP = parseInt(inputs[2].value);
  console.log(CP, Qty, SP);
  if (isNaN(CP) || isNaN(Qty) || isNaN(SP)) {
    console.log(CP, Qty, SP);
    outDiv.style.display = "block";
    outMsg.innerText = "Inputs cannot be left blank, try again.";
  } else {
    outDiv.style.display = "none";
    console.log(CP, Qty, SP);
    calcPL(CP, Qty, SP);
  }
};

const calcPL = (cp, qty, sp) => {
  outDiv.style.display = "block";
  if (cp > sp) {
    //loss
    const loss = ((cp - sp) * qty).toFixed(2);
    const lossPercent = (((cp - sp) * 100) / cp).toFixed(2);

    console.log(loss, lossPercent);

    outMsg.innerText = `Oh Noo😞💔 You have lost ${lossPercent}%. Total loss is ₹${loss}`;

    if (lossPercent > 50) {
      defaultImg.classList.add("hidden");
      happyImg.classList.add("hidden");
      sadImg.classList.remove("hidden");
      container.style.background = "var(--clr-black-3)";
    }
  } else {
    //profit
    const profit = ((sp - cp) * qty).toFixed(2);
    const profitPercent = (((sp - cp) * 100) / cp).toFixed(2);

    console.log(profit, profitPercent);

    outMsg.innerText = `Congratulations!🎉🥳 You gained ${profitPercent}%. Your total profit is ₹${profit}`;

    if (profitPercent > 50) {
      defaultImg.classList.add("hidden");
      sadImg.classList.add("hidden");
      happyImg.classList.remove("hidden");
      container.style.background = "var(--clr-primary-3)";
    }
  }
};

form.addEventListener("submit", handleInputs);
