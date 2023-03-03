import { Router } from 'express'
import tweetController from '../controllers/tweet-controller'
import { createTweetController } from '../useCases/Tweets/createTweet/index'
 
const tweetRouter = Router()

tweetRouter
    .get("", tweetController.getTweets)
    .post("", (req, res) => createTweetController.handle(req, res))
    .get("/:username", tweetController.getTweetsByUsername)

export { tweetRouter }