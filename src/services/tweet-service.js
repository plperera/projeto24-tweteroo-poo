import authRepository from "../repository/auth-repository.js"
import tweetRepository from "../repository/tweet-repository.js";

async function newTweet({tweet, username}){

    const avatar = await tweetRepository.getAvatarByUsername({username})

    const newTweet = await tweetRepository.createNewTweet({avatar, username, tweet})

    return newTweet

}

async function getTweets(){

    const allTweets = await tweetRepository.getAllTweets()

    return allTweets
    
}

async function getAllTweetsByUsername({username}){

    const allUserTweets = await tweetRepository.getAllTweetsByUsername({username})
    
    return allUserTweets
    
}
const tweetService = {
    newTweet,
    getTweets,
    getAllTweetsByUsername,
}

export default tweetService