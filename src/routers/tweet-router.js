import { Router } from 'express'
import { getTweets, getAllTweetsByUsername, newTweet } from '../controllers/tweet-controller.js'

const tweetRouter = Router()

tweetRouter
    .get("", getTweets)
    .post("", newTweet)
    .get("/:username", getAllTweetsByUsername)

export { tweetRouter }