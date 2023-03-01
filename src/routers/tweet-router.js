import { Router } from 'express'
import tweetController from '../controllers/tweet-controller.js'

const tweetRouter = Router()

tweetRouter
    .get("", tweetController.getTweets)
    .post("", tweetController.newTweet)
    .get("/:username", tweetController.getTweetsByUsername)

export { tweetRouter }