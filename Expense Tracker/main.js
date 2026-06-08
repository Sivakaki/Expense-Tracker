console.log("Welcome to Expense Tracker...");

// Getting All Elements
const balance = document.getElementById("balance");
const income = document.getElementById("income");
const expense = document.getElementById("expense");
const des = document.getElementById("text");
const amount = document.getElementById("amount");

const addbtn = document.getElementById("addbtn");

const list = document.getElementById("list");

//function and Event listner for storing amount and descryption.
let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
show();
updateBalance();
addbtn.addEventListener("click", () => {
  if (!des.value.trim() || !amount.value) {
    alert("Please fill all fields");
    return;
  }
  const transaction = {
    description: des.value,
    amount: Number(amount.value),
  };

  transactions.push(transaction);

  localStorage.setItem("transactions", JSON.stringify(transactions));

  des.value = "";
  amount.value = "";

  show();
  updateBalance();
});

function show() {
  list.innerHTML = "";
  if (transactions.length === 0) {
    return;
  }

  transactions.forEach((transaction, index) => {
    const li = document.createElement("li");
    const span = document.createElement("span");

    const text = document.createElement("span");
    text.textContent = `${transaction.description} : ₹${transaction.amount.toLocaleString("en-IN")}`;

    if (transaction.amount > 0) {
      li.className = "plus";
    } else {
      li.className = "minus";
    }

    span.className = "delete-btn";
    span.innerHTML = "&#10006";

    li.appendChild(text);
    li.appendChild(span);

    span.addEventListener("click", () => {
      transactions.splice(index, 1);

      localStorage.setItem("transactions", JSON.stringify(transactions));
      show();
      updateBalance();
    });
    list.appendChild(li);
  });
}

function updateBalance() {
  let income_total = 0;
  let expense_total = 0;
  let total = 0;

  transactions.forEach((transaction) => {
    total += transaction.amount;

    if (transaction.amount > 0) {
      income_total += transaction.amount;
    } else {
      expense_total += Math.abs(transaction.amount);
    }
  });

  if (total >= 0) {
    balance.style.color = "#10b981";
  } else {
    balance.style.color = "#ef4444";
  }

  balance.innerText = `₹${total.toLocaleString("en-IN")}`;
  income.innerText = `₹${income_total.toLocaleString("en-IN")}`;
  expense.innerText = `₹${expense_total.toLocaleString("en-IN")}`;
}
