document.addEventListener('DOMContentLoaded', function() {
    const logs = [
        { type: 'Sales', date: '2023-10-01', item: 'Dress', totalquantity: 200, soldquantity: 8, remainingquantity: 122, revenue: 800 },
        { type: 'Sales', date: '2023-09-28', item: 'jeans', totalquantity: 153, soldquantity: 5, remainingquantity: 148, revenue: 3250 },
        { type: 'Returns', date: '2023-09-26', item: 'Skirt', totalquantity: 80, soldquantity: 2, remainingquantity: 78, revenue: -80 }
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
});
document.addEventListener('DOMContentLoaded', function() {
    const logs = [
        { timestamp: '2023-10-01T12:34:56', level: 'ERROR', message: 'Issue with shipment.' },
        { timestamp: '2023-10-01T12:35:23', level: 'WARNING', message: 'Low stock for popular items.' },
        { timestamp: '2023-10-01T12:36:45', level: 'INFO', message: 'New arrivals added.' }
    ];

    const logListElement = document.getElementById('logList');
    const logDetailsElement = document.getElementById('logDetails');

    function generateLogEntries() {
        logs.forEach((log, index) => {
            const logEntry = document.createElement('div');
            logEntry.classList.add('log-entry');
            logEntry.dataset.index = index;
            logEntry.innerHTML = `
                <span class="timestamp">${log.timestamp}</span>
                <span class="level">${log.level}</span>
                <span class="message">${log.message}</span>
            `;
            logEntry.addEventListener('click', () => {
                showLogDetails(log);
            });
            logListElement.appendChild(logEntry);
        });
    }

    function showLogDetails(log) {
        logDetailsElement.style.display = 'block';
        logDetailsElement.innerHTML = `
            <h2>Log Details</h2>
            <p><strong>Timestamp:</strong> ${log.timestamp}</p>
            <p><strong>Level:</strong> ${log.level}</p>
            <p><strong>Message:</strong> ${log.message}</p>
        `;
    }

    generateLogEntries();

    const logEntries = document.querySelectorAll('.log-entry');
    logEntries.forEach(logEntry => {
        logEntry.addEventListener('click', () => {
            logEntries.forEach(entry => entry.classList.remove('highlighted'));
            logEntry.classList.add('highlighted');
        });
    });
});
