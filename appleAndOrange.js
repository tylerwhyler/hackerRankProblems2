//easy hackerrank problem; "Apple and Orange"

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleCount = 0;
    let orangeCount = 0;
    for (let x = 0; x <= apples.length; x++) {
        if ((a + apples[x]) >= s && (a + apples[x]) <= t) {
            appleCount++;
        }
    }
    for (let x = 0; x <= oranges.length; x++) {
        if ((b + oranges[x]) <= t && (b + oranges[x]) >= s) {
            orangeCount++;
        }
    }
    console.log(String(`${appleCount}\n${orangeCount}`))
}