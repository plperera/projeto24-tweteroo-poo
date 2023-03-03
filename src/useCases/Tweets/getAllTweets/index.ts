import { TweetRepository } from "../../../repository/tweetRepository"
import GetAllTweetsController from "./getAllTweets-controller"
import { GetAllTweetsService } from "./getAllTweets-service"

const tweetRepository = TweetRepository.getInstance()
const getAllTweetsService = new GetAllTweetsService(tweetRepository)
export const getAllTweetsController = new GetAllTweetsController(getAllTweetsService)