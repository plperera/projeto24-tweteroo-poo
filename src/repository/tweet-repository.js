const usuarios = [];

async function createNewTweet({ username, avatar }) {
    return usuarios.push({ username, avatar });
}

async function getAvatarByUsername({ username, avatar }) {
    return usuarios.push({ username, avatar });
}

async function getAllTweets() {
    return usuarios.push({ username, avatar });
}

async function getAllTweetsByUsername() {
    return usuarios.push({ username, avatar });
}

const tweetRepository = {
    createNewTweet,
    getAvatarByUsername,
    getAllTweets,
    getAllTweetsByUsername
}

export default tweetRepository