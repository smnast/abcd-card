function toggleVisibility(response) {
    const element = document.querySelector(`.response.${response}`);
    const checkbox = document.getElementById(`checkbox${response}`);
    
    if (checkbox.checked) {
        element.style.display = 'flex';
    } else {
        element.style.display = 'none';
    }

    updateFontSize();
}

function updateFontSize() {
    const responses = document.querySelectorAll('.response');
    
    let numVisible = 0;
    responses.forEach((response) => {
        if (response.style.display === 'flex') {
            numVisible++;
        }
    });

    let fontSize = (20 / numVisible) + 'em';
    responses.forEach((response) => {
        response.style.fontSize = fontSize;
    });
}
