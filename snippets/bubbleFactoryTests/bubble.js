function printAndGetHighestScore(scores) {
    var highestScore = 0;
    for (var i = 0; i < scores.length; ++i) {
        var output = "Bubble solution #" + i + " score: " + scores[i];
        console.log(output); 
        if (scores[i] > highestScore) {
            highestScore = scores[i];
        }
    }
    return highestScore;
}

function getBestSolutions(scores, highestScore) {
    var bestSolutions = [];
    for (var i = 0; i < scores.length; ++i) {
        if (scores[i] == highestScore) {
            bestSolutions.push(i);
        }
    }
    return bestSolutions;
}

function main() {
    var scores = [71, 50, 60, 58, 54, 54,
                58, 50, 52, 54, 48, 69,
                34, 55, 51, 52, 44, 71,
                41, 53, 55, 61, 51, 44];

    var highestScore = printAndGetHighestScore(scores);
    console.log("Bubble tests count: " + scores.length);
    console.log("Highest bubble score: " + highestScore);

    // We could do it in const * O(n) manner, where const = 1, but it will take O(n) more space (memory allocation for an array).
    var bestSolutions = getBestSolutions(scores, highestScore);
    console.log("Solutions with the highest score: " + bestSolutions);
}

main();