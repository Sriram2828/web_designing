document.getElementById('add-expense').addEventListener('click', addOrUpdateExpense);
document.getElementById('filter-category').addEventListener('change', filterExpenses);

let expenses = [];
let editIndex = -1;

function addOrUpdateExpense() {
    const name = document.getElementById('expense-name').value;
    const amount = parseFloat(document.getElementById('expense-amount').value);
    const category = document.getElementById('expense-category').value;
    const date = document.getElementById('expense-date').value;

    if (name && amount && category && date) {
        const expense = {
            name,
            amount,
            category,
            date
        };

        if (editIndex === -1) {
            expenses.push(expense);
        } else {
            expenses[editIndex] = expense;
            editIndex = -1;
            document.getElementById('add-expense').textContent = 'Add Expense';
        }

        displayExpenses(expenses);
        updateTotal(expenses);
        clearInputs();
    } else {
        alert('Please fill in all fields');
    }
}

function displayExpenses(expensesToDisplay) {
    const expenseList = document.getElementById('expense-list');
    expenseList.innerHTML = '';

    expensesToDisplay.forEach((expense, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${expense.name}</td>
            <td>$${expense.amount.toFixed(2)}</td>
            <td>${expense.category}</td>
            <td>${expense.date}</td>
            <td>
                <button onclick="editExpense(${index})">Edit</button>
                <button onclick="deleteExpense(${index})">Delete</button>
            </td>
        `;
        expenseList.appendChild(row);
    });
}

function updateTotal(expensesToUpdate) {
    const totalAmount = expensesToUpdate.reduce((total, expense) => total + expense.amount, 0);
    document.getElementById('total-amount').textContent = `$${totalAmount.toFixed(2)}`;
};

function clearInputs() {
    document.getElementById('expense-name').value = '';
    document.getElementById('expense-amount').value = '';
    document.getElementById('expense-category').value = 'Food';
    document.getElementById('expense-date').value = '';
}

function editExpense(index) {
    const expense = expenses[index];
    document.getElementById('expense-name').value = expense.name;
    document.getElementById('expense-amount').value = expense.amount;
    document.getElementById('expense-category').value = expense.category;
    document.getElementById('expense-date').value = expense.date;

    editIndex = index;
    document.getElementById('add-expense').textContent = 'Update Expense';
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    displayExpenses(expenses);
    updateTotal(expenses);
}

function filterExpenses() {
    const filterCategory = document.getElementById('filter-category').value;
    if (filterCategory === 'All') {
        displayExpenses(expenses);
    } else {
        const filteredExpenses = expenses.filter(expense => expense.category === filterCategory);
        displayExpenses(filteredExpenses);
    }
}