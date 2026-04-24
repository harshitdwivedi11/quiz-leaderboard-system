function getTotal(leaderboard) {
    return leaderboard.reduce((sum, p) => sum + p.totalScore, 0);
}

module.exports = getTotal;