const limit = prompt("Enter last number: ");
const nums = [];
const numHere = document.getElementById('numHere');
const numArray = document.getElementById('numArray');

for (let i = 0; i < limit; i++) {
    nums.push(i + 1);
}

// Function to create HTML with strikethrough
function createNumberHTML(number) {
    return `<span id="number-${number}" class="number">${number}</span>`;
}

// Render the numbers array
numArray.innerHTML = nums.map(createNumberHTML).join('');

function randomNum() {
    if (nums.length == 0) {
        numHere.innerHTML = "All numbers done!!";
        return;
    }

    let randomIndex = Math.floor(Math.random() * nums.length);
    let random = nums[randomIndex];

    // Apply strikethrough
    document.getElementById(`number-${random}`).classList.add('strikethrough');

    numHere.innerHTML = random;
    nums.splice(randomIndex, 1);
}

randomNum();