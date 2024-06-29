let apcVotes = 0;
let pdpVotes = 0;
let lpVotes = 0;

function updateVotes() {
    apcVotes += Math.floor(Math.random() * 5) + 1;
    pdpVotes += Math.floor(Math.random() * 10) + 5;
    lpVotes += Math.floor(Math.random() * 15) + 10;

    // Ensuring LP has the highest votes, followed by PDP and APC
    if (lpVotes <= pdpVotes) {
        lpVotes = pdpVotes + Math.floor(Math.random() * 10) + 10;
    }
    if (pdpVotes <= apcVotes) {
        pdpVotes = apcVotes + Math.floor(Math.random() * 5) + 5;
    }

    document.getElementById('apc-votes').innerText = apcVotes;
    document.getElementById('pdp-votes').innerText = pdpVotes;
    document.getElementById('lp-votes').innerText = lpVotes;
}

setInterval(updateVotes, 1000);
