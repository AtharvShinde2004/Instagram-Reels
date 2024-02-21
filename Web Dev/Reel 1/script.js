document.addEventListener('DOMContentLoaded', function () {
    const colorPalette = document.getElementById('colorPalette');

    // Function to generate a random hex color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Function to create color boxes in the palette
    function createColorBoxes(numBoxes) {
        colorPalette.innerHTML = ''; // Clear existing color boxes
        for (let i = 0; i < numBoxes; i++) {
            const colorBox = document.createElement('div');
            colorBox.classList.add('colorBox');
            colorBox.style.backgroundColor = getRandomColor();
            colorBox.addEventListener('click', function () {
                alert(`Selected color: ${colorBox.style.backgroundColor}`);
            });
            colorPalette.appendChild(colorBox);
        }
    }

    // Function to be called when the button is clicked
    window.generatePalette = function () {
        createColorBoxes(3); // You can adjust the number of color boxes as needed
    };
});
