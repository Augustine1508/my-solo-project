let votesA = 0;
let votesB = 0;

function vote(option) {
  if (option === 'A') {
    votesA++;
    document.getElementById('countA').textContent = votesA;
  } else if (option === 'B') {
    votesB++;
    document.getElementById('countB').textContent = votesB;
  }
}




// tryout

// Function to show the pop-up
function showPopup(party) {
    document.getElementById('popup-message').innerText = `Are you sure you want to vote for ${party}?`;
    document.getElementById('confirm-btn').onclick = function() { confirmAction(party); };
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

// Function to close the pop-up
function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

// Function to handle the confirmation action
function confirmAction(party) {
    alert(`You voted for ${party}!`);
    closePopup();
}

