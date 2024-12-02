const flavorData = [
    { text: '10/7 - 10/20 Coffee Toffee', start: '2024-10-07', end: '2024-10-20', imageSrc: 'images/coffee-toffee.jpg' },
    { text: '10/21 - 11/3 Orange Dreamsicle', start: '2024-10-21', end: '2024-11-03', imageSrc: 'images/orange-dreamsicle.jpg' },
    { text: '11/4 - 11/17 Blueberry Pie', start: '2024-11-04', end: '2024-11-17', imageSrc: 'https://www.dropbox.com/scl/fi/23vzy5krdt7rtm1agp35q/FoW-Blueberry-Pie.jpg?raw=1' },
    { text: '11/18 - 12/1 Heath Bar®', start: '2024-11-18', end: '2024-12-01', imageSrc: 'https://www.dropbox.com/scl/fi/je4c4kgfofb13yt59qwkk/FoW-Heath-Bar.jpg?raw=1' },
    // Add more flavor data as needed
];

function setHighlightedFlavor() {
    const today = new Date().toISOString().split('T')[0];
    const flavorBox = document.getElementById('flavorBox');
    const flavorImage = document.getElementById('flavorImage');

    const currentFlavor = flavorData.find(flavor => today >= flavor.start && today <= flavor.end);

    if (currentFlavor) {
        flavorBox.innerHTML = `<p>${currentFlavor.text}</p>`;
        flavorImage.src = currentFlavor.imageSrc;
        flavorImage.alt = currentFlavor.text;
    } else {
        flavorBox.innerHTML = '<p>No flavor available today</p>';
        flavorImage.src = '';
        flavorImage.alt = 'No flavor available';
    }
}

document.addEventListener('DOMContentLoaded', setHighlightedFlavor);
