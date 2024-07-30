document.getElementById('transaction-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const type = document.getElementById('type').value;
    const name = document.getElementById('name').value;
    const amount = document.getElementById('amount').value;

    if (type && name && amount) {
        addTransaction(type, name, amount);
        document.getElementById('transaction-form').reset();
    }
});

function addTransaction(type, name, amount) {
    const tbody = document.querySelector('#transactions-table tbody');
    const tr = document.createElement('tr');

    tr.innerHTML = `
        <td>${type}</td>
        <td>${name}</td>
        <td>Rs.${amount}</td>
        <td><span class="delete-btn">Delete</span></td>
    `;

    tr.querySelector('.delete-btn').addEventListener('click', function () {
        tr.remove();
    });

    tbody.appendChild(tr);
}