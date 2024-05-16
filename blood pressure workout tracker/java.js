function recordBloodPressure() {
    const systolicValue = parseInt(document.getElementById('systolic').value, 10);
    const diastolicValue = parseInt(document.getElementById('diastolic').value, 10);
    const currentDate = new Date().toLocaleString();

    // Determine health status
    const healthStatus = getHealthStatus(systolicValue, diastolicValue);

    // Add the reading to the table
    const table = document.getElementById('readingList');
    const newRow = table.insertRow(0);
    const dateCell = newRow.insertCell(0);
    const systolicCell = newRow.insertCell(1);
    const diastolicCell = newRow.insertCell(2);
    const statusCell = newRow.insertCell(3);

    dateCell.innerHTML = currentDate;
    systolicCell.innerHTML = systolicValue;
    diastolicCell.innerHTML = diastolicValue;
    statusCell.innerHTML = healthStatus;

    // Clear input fields after recording
    document.getElementById('systolic').value = '';
    document.getElementById('diastolic').value = '';
}

function getHealthStatus(systolic, diastolic) {
    if (systolic < 120 && diastolic < 80) {
        return 'Healthy';
    } else {
        return 'Harmful';
    }
}