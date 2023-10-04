document.addEventListener('DOMContentLoaded', function() {
    const logs = [
        { type: 'Sales', date: '2023-10-01', item: 'Blue T-shirt',totalquantity:50,soldquantity: 10,remainingquantity:40, revenue: 1300 },
    { type: 'Sales', date: '2023-10-02', item: 'Jeans', totalquantity:40,soldquantity: 5,remainingquantity:35, revenue: 250 },
    { type: 'Returns', date: '2023-10-03', item: 'White Shirt',totalquantity:10,soldquantity: 2,remainingquantity:8,revenue: -40 },
    
    ];

    const logListElement = document.getElementById('logList');
    const logDetailsElement = document.getElementById('logDetails');
    const filterElement = document.getElementById('filter');

    function generateLogEntries(filter) {
        logListElement.innerHTML = '';
        logs.forEach((log, index) => {
            if (filter === 'all' || log.type.toLowerCase() === filter) {
                const logEntry = document.createElement('div');
                logEntry.classList.add('log-entry');
                logEntry.dataset.index = index;
                logEntry.innerHTML = `
                    <span class="date">${log.date}</span>
                    <span class="type">${log.type}</span>
                    <span class="item">${log.item}</span>
                    <span class="totalquantity">${log.totalquantity}</span>
                    <span class="soldquantity">${log.soldquantity}</span>
                    <span class="remaingquantity">${log.remainingquantity}</span>
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
});
