let business = {
    name: "",
    balance: 0,
    revenue: 0,
    expenses: 0
};

function startGame() {
    const name = document.getElementById('businessName').value;
    const initialBalance = parseFloat(document.getElementById('initialBalance').value);

    if (name && !isNaN(initialBalance)) {
        business.name = name;
        business.balance = initialBalance;
        updateUI();

        document.getElementById('gameActions').style.display = 'block';
        document.getElementById('businessTitle').innerText = business.name;
    } else {
        alert("Please enter a valid business name and initial balance.");
    }
}

function earnRevenue() {
    const amount = parseFloat(prompt("Enter the revenue amount:"));
    if (!isNaN(amount)) {
        business.revenue += amount;
        business.balance += amount;
        updateUI();
    } else {
        alert("Please enter a valid amount.");
    }
}

function incurExpense() {
    const amount = parseFloat(prompt("Enter the expense amount:"));
    if (!isNaN(amount)) {
        business.expenses += amount;
        business.balance -= amount;
        updateUI();
    } else {
        alert("Please enter a valid amount.");
    }
}

function showSummary() {
    alert(`Business Summary for ${business.name}\n` +
          `Balance: $${business.balance.toFixed(2)}\n` +
          `Total Revenue: $${business.revenue.toFixed(2)}\n` +
          `Total Expenses: $${business.expenses.toFixed(2)}\n` +
          `Net Profit: $${(business.revenue - business.expenses).toFixed(2)}`);
}

function updateUI() {
    document.getElementById('balance').innerText = business.balance.toFixed(2);
    document.getElementById('revenue').innerText = business.revenue.toFixed(2);
    document.getElementById('expenses').innerText = business.expenses.toFixed(2);
    document.getElementById('profit').innerText = (business.revenue - business.expenses).toFixed(2);
}
