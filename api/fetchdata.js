const axios = require("axios");

const BASE_URL = "https://devapigw.vidalhealthtpa.com/srm-quiz-task";
const REG_NO ="RA2311003010097";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

async function fetchWithRetry(url, params, retries = 3, delayMs = 3000) {
    try {
        return await axios.get(url, { params });
    } catch (err) {
        const status = err.response ? err.response.status : null;

        if ((status === 502 || status === 503 || !status) && retries > 0) {
            console.log(` Error ${status || "NETWORK"} → retrying in ${delayMs / 1000}s...`);
            await delay(delayMs);
            return fetchWithRetry(url, params, retries - 1, delayMs * 2);
        }

        throw err;
    }
}

async function fetchAllData() {
    let allEvents = [];

    for (let i = 0; i < 10; i++) {
        console.log(`Fetching poll ${i}...`);

        const res = await fetchWithRetry(
            `${BASE_URL}/quiz/messages`,
            { regNo: REG_NO, poll: i }
        );

        const events = res.data.events || [];
        console.log(`Poll ${i} → events count:`, events.length);

        allEvents.push(...events);

        if (i < 9) await delay(5000);
    }

    return allEvents;
}

module.exports = fetchAllData;