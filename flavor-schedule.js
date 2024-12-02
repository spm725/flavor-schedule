const flavorData = [
  { id: 'flavor5', text: '12/2 - 12/15 Strawberry Cheesecake', start: '2024-12-02', end: '2024-12-15', imageSrc: 'https://www.dropbox.com/scl/fi/84qi6d4bxvefx2k63is86/FoW-Strawberry-Cheesecake.jpg?rlkey=t566tbzkm8d3pzuqe8gohyxfz&st=1airezf6&raw=1' },
  { id: 'flavor6', text: '12/16 - 12/29 Mint Oreo®', start: '2024-12-16', end: '2024-12-29', imageSrc: 'https://www.dropbox.com/scl/fi/7c08vzdssay0jwu98q8hj/FoW-Mint-Oreo.jpg?rlkey=oe8mwqnzwesg91wwyubyk71tg&st=nb9xo8d4&dl=0' },
  { id: 'flavor7', text: '12/30/24 - 1/5/25 Reese\'s® Cheesecake', start: '2024-12-30', end: '2025-01-05', imageSrc: 'images/reeses-cheesecake.jpg' },
  { id: 'flavor8', text: '1/6/25 - 1/12/25 Coffee Toffee', start: '2025-01-06', end: '2025-01-12', imageSrc: 'images/coffee-toffee.jpg' },
  { id: 'flavor9', text: '1/13/25 - 1/19/25 Butterfinger®', start: '2025-01-13', end: '2025-01-19', imageSrc: 'images/butterfinger.jpg' },
  { id: 'flavor10', text: '1/20/25 - 1/26/25 Toasted Coconut', start: '2025-01-20', end: '2025-01-26', imageSrc: 'images/toasted-coconut.jpg' },
  { id: 'flavor11', text: '1/27/25 - 2/2/25 Peaches n\' Cream', start: '2025-01-27', end: '2025-02-02', imageSrc: 'images/peaches-n-cream.jpg' },
  { id: 'flavor12', text: '2/3/25 - 2/9/25 Nutter Butter®', start: '2025-02-03', end: '2025-02-09', imageSrc: 'images/nutter-butter.jpg' },
  { id: 'flavor13', text: '2/10/25 - 2/16/25 Strawberry Swirl', start: '2025-02-10', end: '2025-02-16', imageSrc: 'images/strawberry-swirl.jpg' },
  { id: 'flavor14', text: '2/17/25 - 2/23/25 Cookies n\' Cream', start: '2025-02-17', end: '2025-02-23', imageSrc: 'images/cookies-n-cream.jpg' },
  { id: 'flavor15', text: '2/24/25 - 3/2/25 Blueberry Pie', start: '2025-02-24', end: '2025-03-02', imageSrc: 'images/blueberry-pie.jpg' },
  { id: 'flavor16', text: '3/3/25 - 3/9/25 Reese\'s Peanut Butter Cup®', start: '2025-03-03', end: '2025-03-09', imageSrc: 'images/reeses-peanut-butter-cup.jpg' },
  { id: 'flavor17', text: '3/10/25 - 3/16/25 Black Raspberry', start: '2025-03-10', end: '2025-03-16', imageSrc: 'images/black-raspberry.jpg' },
  { id: 'flavor18', text: '3/17/25 - 3/23/25 Mint Oreo®', start: '2025-03-17', end: '2025-03-23', imageSrc: 'images/mint-oreo.jpg' },
  { id: 'flavor19', text: '3/24/25 - 3/30/25 Toasted Coconut', start: '2025-03-24', end: '2025-03-30', imageSrc: 'images/toasted-coconut.jpg' },
  { id: 'flavor20', text: '3/31/25 - 4/6/25 Orange Dreamsicle', start: '2025-03-31', end: '2025-04-06', imageSrc: 'images/orange-dreamsicle.jpg' },
  { id: 'flavor21', text: '4/7/25 - 4/13/25 Strawberry Cheesecake', start: '2025-04-07', end: '2025-04-13', imageSrc: 'images/strawberry-cheesecake.jpg' },
  { id: 'flavor22', text: '4/14/25 - 4/20/25 Butterfinger®', start: '2025-04-14', end: '2025-04-20', imageSrc: 'images/butterfinger.jpg' },
  { id: 'flavor23', text: '4/21/25 - 4/27/25 Peaches n\' Cream', start: '2025-04-21', end: '2025-04-27', imageSrc: 'images/peaches-n-cream.jpg' },
  { id: 'flavor24', text: '4/28/25 - 5/4/25 Reese\'s Peanut Butter Cup®', start: '2025-04-28', end: '2025-05-04', imageSrc: 'images/reeses-peanut-butter-cup.jpg' },
  { id: 'flavor25', text: '5/5/25 - 5/11/25 Oreo® Cheesecake', start: '2025-05-05', end: '2025-05-11', imageSrc: 'images/oreo-cheesecake.jpg' },
  { id: 'flavor26', text: '5/12/25 - 5/18/25 Blueberry Pie', start: '2025-05-12', end: '2025-05-18', imageSrc: 'images/blueberry-pie.jpg' },
  { id: 'flavor27', text: '5/19/25 - 5/25/25 Nutter Butter®', start: '2025-05-19', end: '2025-05-25', imageSrc: 'images/nutter-butter.jpg' },
  { id: 'flavor28', text: '5/26/25 - 6/1/25 Mint Oreo®', start: '2025-05-26', end: '2025-06-01', imageSrc: 'images/mint-oreo.jpg' },
  { id: 'flavor29', text: '6/2/25 - 6/8/25 Key Lime Pie', start: '2025-06-02', end: '2025-06-08', imageSrc: 'images/key-lime-pie.jpg' },
  { id: 'flavor30', text: '6/9/25 - 6/15/25 Toasted Coconut', start: '2025-06-09', end: '2025-06-15', imageSrc: 'images/toasted-coconut.jpg' },
  { id: 'flavor31', text: '6/16/25 - 6/22/25 Black Raspberry', start: '2025-06-16', end: '2025-06-22', imageSrc: 'images/black-raspberry.jpg' },
  { id: 'flavor32', text: '6/23/25 - 6/29/25 Coffee Toffee', start: '2025-06-23', end: '2025-06-29', imageSrc: 'images/coffee-toffee.jpg' },
  { id: 'flavor33', text: '6/30/25 - 7/6/25 Strawberry Cheesecake', start: '2025-06-30', end: '2025-07-06', imageSrc: 'images/strawberry-cheesecake.jpg' },
  { id: 'flavor34', text: '7/7/25 - 7/13/25 Reese\'s Peanut Butter Cup®', start: '2025-07-07', end: '2025-07-13', imageSrc: 'images/reeses-peanut-butter-cup.jpg' },
  { id: 'flavor35', text: '7/14/25 - 7/20/25 Butterfinger®', start: '2025-07-14', end: '2025-07-20', imageSrc: 'images/butterfinger.jpg' }
];

const today = new Date().toISOString().split('T')[0];
const flavorSection = document.getElementById('flavor-section');

// Helper function to format dates (MM/DD)
const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Add leading zero for single-digit months
    const day = String(date.getDate()).padStart(2, '0'); // Add leading zero for single-digit days
    return `${month}/${day}`;
};


if (flavorSection) {
    const currentFlavor = flavorData.find(
        (flavor) => today >= flavor.start && today <= flavor.end
    );
    const upcomingFlavors = flavorData
        .filter((flavor) => new Date(flavor.start) > new Date(today))
        .slice(0, 3);

    flavorSection.innerHTML = ''; // Clear section before adding flavors

    const flavorBox = document.createElement('div');
    flavorBox.className = 'flavor-box'; // Single box for all flavors

    // Add current flavor
    if (currentFlavor) {
        const currentFlavorText = `
            <div class="flavor-text current-highlight">
                <p>${formatDate(currentFlavor.start)} - ${formatDate(currentFlavor.end)}: ${currentFlavor.text}</p>
            </div>
        `;
        flavorBox.innerHTML += currentFlavorText;
    } else {
        console.warn('No current flavor found for today:', today);
    }

    // Add upcoming flavors
    upcomingFlavors.forEach((flavor) => {
        const upcomingFlavorText = `
            <div class="flavor-text">
                <p>${formatDate(flavor.start)} - ${formatDate(flavor.end)}: ${flavor.text}</p>
            </div>
        `;
        flavorBox.innerHTML += upcomingFlavorText;
    });

    flavorSection.appendChild(flavorBox);

    // Add the current flavor image separately and align it
    if (currentFlavor) {
        const currentFlavorImage = document.createElement('img');
        currentFlavorImage.src = currentFlavor.imageSrc;
        currentFlavorImage.alt = currentFlavor.text;
        currentFlavorImage.className = 'current-flavor-image';
        flavorSection.appendChild(currentFlavorImage);
    }
} else {
    console.error('Flavor section is missing!');
}
