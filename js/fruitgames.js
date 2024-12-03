function checkName() {
    const name = document.getElementById('name').value.trim();
    if (name) {
        alert(`Welcome, ${name} ! Get Ready To Play Fruit Games.🤩`);
        document.getElementById('games').style.display = 'block';
        initializeTrafficSignal();
    } else {
        alert('Please Enter Valid Name To Play Fruit Games.');
    }
}