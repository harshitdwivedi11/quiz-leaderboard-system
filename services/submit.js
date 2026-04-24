const axios = require("axios");

const BASE_URL = "https://devapigw.vidalhealthtpa.com/srm-quiz-task";
const REG_NO = "RA2311003010097"; 

async function submitLeaderboard(leaderboard) {
    const res = await axios.post(`${BASE_URL}/quiz/submit`, {
        regNo: REG_NO,
        leaderboard
    });

    return res.data;
}

module.exports = submitLeaderboard;