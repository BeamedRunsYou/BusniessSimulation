let business = {
    name: "",
    balance: 0,
    revenue: 0,
    expenses: 0,
    upgrades: 0
};

function startGame() {
    const name = document.getElementById('businessName').value;
    const initialBalance = parseFloat(document.getElementById('initialBalance').value);

    if (name && !isNaN(initialBalance)) {
        business.name = name;
        business.balance = initialBalance;
        updateUI();

        document.getElementById('setup').style.display = 'none';
        document.getElementById('gameActions').style.display = 'block';
        document.getElementById('businessTitle').innerText = business.name;
    } else {
        alert("Please enter a valid business name and initial balance.");
    }
}

function earnRevenue() {
    const amount = 100 * (1 + business.upgrades * 0.1); // Increase revenue with upgrades
    business.revenue += amount;
    business.balance += amount;
    displayMessage(`Earned revenue: $${amount.toFixed(2)}`);
    updateUI();
}

function incurExpense() {
    const amount = 50;
    business.expenses += amount;
    business.balance -= amount;
    displayMessage(`Incurred expense: $${amount.toFixed(2)}`);
    updateUI();
}

function upgradeBusiness() {
    const upgradeCost = 200 * (business.upgrades + 1);
    if (business.balance >= upgradeCost) {
        business.upgrades++;
        business.balance -= upgradeCost;
        displayMessage(`Upgraded business to level ${business.upgrades}!`);
        updateUI();
    } else {
        displayMessage(`Not enough balance to upgrade. You need $${upgradeCost - business.balance} more.`);
    }
}

function randomEvent() {
    const events = [
        { description: "A competitor goes out of business! Earned bonus revenue.", effect: () => business.balance += 200 },
        { description: "A fire damages your office. Incurred repair expenses.", effect: () => business.balance -= 150 },
        { description: "A viral marketing campaign boosts your revenue!", effect: () => business.revenue += 300 },
        { description: "A lawsuit costs you in legal fees.", effect: () => business.expenses += 100 }
    ];

    const event = events[Math.floor(Math.random() * events.length)];
    event.effect();
    displayMessage(event.description);
    updateUI();
}

function displayMessage(message) {
    const messageDiv = document.getElementById('message');
    messageDiv.innerText = message;
    setTimeout(() => {
        messageDiv.innerText = '';
    }, 3000);
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
