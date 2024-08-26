function addRoutine() {
    const startTimeInput = document.getElementById('start-time-input').value;
    const endTimeInput = document.getElementById('end-time-input').value;
    const routineInput = document.getElementById('routine-input').value;

    if (startTimeInput && endTimeInput && routineInput) {
        const routineList = document.getElementById('routine-list');
        
        const routineItem = document.createElement('div');
        routineItem.className = 'routine-item';
        
        const timeSpan = document.createElement('span');
        timeSpan.textContent = `${startTimeInput} - ${endTimeInput}`;

        const routineSpan = document.createElement('span');
        routineSpan.textContent = routineInput;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function () {
            routineList.removeChild(routineItem);
        };

        routineItem.appendChild(timeSpan);
        routineItem.appendChild(routineSpan);
        routineItem.appendChild(deleteButton);

        routineList.appendChild(routineItem);

        document.getElementById('start-time-input').value = '';
        document.getElementById('end-time-input').value = '';
        document.getElementById('routine-input').value = '';
    } else {
        alert('Please fill out all fields.');
    }
}
