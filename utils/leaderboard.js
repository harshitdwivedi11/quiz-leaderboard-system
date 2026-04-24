function createLeaderboard(scores) {
    return Object.entries(scores)
        .map(([participant, totalScore]) => ({
            participant,
            totalScore
        }))
        .sort((a, b) => b.totalScore - a.totalScore);
}

module.exports = createLeaderboard;