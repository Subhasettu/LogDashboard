const logs = [
    { type: 'Sales', date: '2023-10-01', item: 'Kids T-shirt', totalquantity: 153, soldquantity: 12, remainingquantity: 141, revenue: 240 },
    { type: 'Sales', date: '2023-10-02', item: 'Kids Jeans', totalquantity: 185, soldquantity: 8, remainingquantity: 177, revenue: 400 },
    { type: 'Returns', date: '2023-10-03', item: 'Kids Dress', totalquantity: 240, soldquantity: 3, remainingquantity: 237, revenue: -60 },
    // Add more log entries as needed
];

const logListElement = document.getElementById('logList');
const logDetailsElement = document.getElementById('logDetails');
const filterElement = document.getElementById('filter');

function generateLogEntries(filter) {
    logListElement.innerHTML = '';
    logs.forEach(log => {
        if (filter === 'all' || log.type.toLowerCase() === filter) {
            const logEntry = document.createElement('div');
            logEntry.classList.add('log-entry');
            logEntry.innerHTML = `
                <span class="date">${log.date}</span>
                <span class="type">${log.type}</span>
                <span class="item">${log.item}</span>
                <span class="totalquantity">${log.totalquantity}</span>
                <span class="soldquantity">${log.soldquantity}</span>
                <span class="remainingquantity">${log.remainingquantity}</span>
                <span class="revenue">${log.revenue}</span>
            `;
            logEntry.addEventListener('click', () => {
                showLogDetails(log);
            });
            logListElement.appendChild(logEntry);
        }
    });
}

function showLogDetails(log) {
    logDetailsElement.style.display = 'block';
    logDetailsElement.innerHTML = `
        <h2>Log Details</h2>
        <p><strong>Date:</strong> ${log.date}</p>
        <p><strong>Type:</strong> ${log.type}</p>
        <p><strong>Item:</strong> ${log.item}</p>
        <p><strong>Total Quantity:</strong> ${log.totalquantity}</p>
        <p><strong>Sold Out Quantity:</strong> ${log.soldquantity}</p>
        <p><strong>Remaining Quantity:</strong> ${log.remainingquantity}</p>
        <p><strong>Revenue:</strong> ${log.revenue}</p>
    `;
}

generateLogEntries('all');

filterElement.addEventListener('change', function() {
    const selectedFilter = this.value;
    generateLogEntries(selectedFilter);
});
