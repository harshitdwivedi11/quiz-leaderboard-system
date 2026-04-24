console.log("Script started...");

const fetchAllData = require("./api/fetchdata");
const deduplicate = require("./utils/deduplicate");
const aggregate = require("./utils/aggregate");
const createLeaderboard = require("./utils/leaderboard");
const getTotal = require("./utils/total");
const submitLeaderboard = require("./services/submit");

async function main() {
    try {
        const allEvents = await fetchAllData();

        console.log("Total events fetched:", allEvents.length);

        const uniqueEvents = deduplicate(allEvents);
        console.log("After dedup:", uniqueEvents.length);

        const scores = aggregate(uniqueEvents);

        const leaderboard = createLeaderboard(scores);
        console.log("Leaderboard:", leaderboard);

        const total = getTotal(leaderboard);
        console.log("Total Score:", total);

        const response = await submitLeaderboard(leaderboard);
        console.log("Submission Response:", response);

    } catch (err) {
        console.error("Error:", err.message);
    }
}

main();