function navigateToState() {
    const dropdown = document.getElementById('state-dropdown');
    const selectedValue = dropdown.value;
    if (selectedValue) {
        window.location.href = selectedValue;
    }
}