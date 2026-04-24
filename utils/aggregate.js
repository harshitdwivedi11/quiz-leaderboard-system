function aggregate(events) {
    const scores = {};

    for (const e of events) {
        if (!scores[e.participant]) {
            scores[e.participant] = 0;
        }
        scores[e.participant] += e.score;
    }

    return scores;
}

module.exports = aggregate;