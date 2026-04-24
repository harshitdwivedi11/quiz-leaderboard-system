function deduplicate(events) {
    const seen = new Set();
    const result = [];

    for (const e of events) {
        const key = `${e.roundId}-${e.participant}`;

        if (!seen.has(key)) {
            seen.add(key);
            result.push(e);
        }
    }

    return result;
}

module.exports = deduplicate;