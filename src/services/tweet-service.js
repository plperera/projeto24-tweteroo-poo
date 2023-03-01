import authRepository from "../repository/auth-repository.js"
import tweetRepository from "../repository/tweet-repository.js";

async function newTweet({tweet, username}){

    const avatar = await tweetRepository.getAvatarByUsername({username})

    const newTweet = await tweetRepository.createNewTweet({avatar, username, tweet})

    return newTweet

}

async function getTweets({username, avatar}){

    const allTweets = await tweetRepository.getAllTweets()

    return allTweets
    
}

async function getAllTweetsByUsername({username}){

    const allUserTweets = await tweetRepository.getAllTweetsByUsername({username})
    
}
const tweetService = {
    newTweet,
    getTweets,
    getAllTweetsByUsername
}

export default tweetService