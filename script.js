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

function scaleCheckbox() {
    const vw = window.innerWidth / 100;
    const vh = window.innerHeight / 100;
    const scaleFactor = (vw + vh) / 20;

    const checkboxes = document.querySelectorAll('.selection > label > input[type=checkbox]');
    checkboxes.forEach((checkbox) => {
        checkbox.style.transform = `scale(${scaleFactor})`;
    });
}

window.onload = scaleCheckbox;
window.onresize = scaleCheckbox;
