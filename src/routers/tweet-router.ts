import { Router } from 'express'
import tweetController from '../controllers/tweet-controller'
import { createTweetController } from '../useCases/Tweets/createTweet/index'
import { getAllTweetsController } from '../useCases/Tweets/getAllTweets/index'
import { getAllUserTweetsController } from '../useCases/Tweets/getAllUserTweets/index'
 
const tweetRouter = Router()

tweetRouter
    .post("", (req, res) => createTweetController.handle(req, res))
    .get("", (req, res) => getAllTweetsController.handle(req, res))
    .get("/:username", (req, res) => getAllUserTweetsController.handle(req, res))

export { tweetRouter }