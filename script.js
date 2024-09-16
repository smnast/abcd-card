function toggleVisibility(response) {
    const element = document.querySelector(`.response.${response}`);
    const checkbox = document.getElementById(`checkbox${response}`);
    
    if (checkbox.checked) {
        element.style.display = 'flex';
    } else {
        element.style.display = 'none';
    }
}