let count = 0; 

// increment count by 1
function increaseCount() {
    count++;
    displayCount();
    checkCountValue();
}

// display count in HTML
function displayCount() {
    document.getElementById('countDisplay').innerHTML = count;
}

// checks specific follower milestones
function checkCountValue() {
    if (count === 10) {
        alert("Your IG post gained 10 followers! Congrats!");
    } else if (count === 20) {
        alert("Your IG post gained 20 followers! Keep it up!");
    }
}



