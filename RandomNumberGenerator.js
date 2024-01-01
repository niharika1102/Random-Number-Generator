const limit = prompt("Enter last number: ");
const nums = [];
const numHere = document.getElementById('numHere');

for (let i = 0; i < limit; i++) {
    nums.push(i + 1);
}

function randomNum() {
    if (nums.length == 0) {
        // console.log("All nums done!!");
        numHere.innerHTML = "All numbers done!!";
        return;
    }

    let randomIndex = Math.floor(Math.random() * nums.length);
    let random = nums[randomIndex];

    numHere.innerHTML = random;

    // console.log(random);
    nums.splice(randomIndex, 1);
    // console.log(nums);
}

randomNum();
// console.log(nums);