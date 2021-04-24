//easy HackerRank problem; "Breaking the Records"

function breakingRecords(scores) {
    let highRecord = scores[0];
    let lowRecord = scores[0];
    let lowRecNum = 0;
    let highRecNum = 0;
    for (let x = 1; x < scores.length; x++) {
        if (scores[x] > highRecord) {
            highRecNum++;
            highRecord = scores[x]
        }
        if (scores[x] < lowRecord) {
            lowRecNum++;
            lowRecord = scores[x]
        }
    }
    return console.log([highRecNum, lowRecNum])

}

breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])