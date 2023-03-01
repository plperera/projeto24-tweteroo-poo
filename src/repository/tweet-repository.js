import { connection } from "../database/db.js";

async function createNewTweet({ avatar, username, tweet }) {
    const allTweets = await connection.query(`INSERT INTO tweets (avatar, username, tweet) VALUES ($1, $2, $3)`, [avatar, username, tweet])

    return allTweets.rows
}

async function getAvatarByUsername({ username }) {
    const allTweets = await connection.query(`SELECT * FROM users WHERE username=$1`, [username])

    return allTweets.rows
}

async function getAllTweets() {
    const allTweets = await connection.query(`SELECT * FROM tweets`)

    return allTweets.rows
}

async function getAllTweetsByUsername({username}) {
    const allTweets = await connection.query(`SELECT * FROM tweets WHERE username=$1`, [username])

    return allTweets.rows
}

const tweetRepository = {
    createNewTweet,
    getAvatarByUsername,
    getAllTweets,
    getAllTweetsByUsername
}

export default tweetRepository