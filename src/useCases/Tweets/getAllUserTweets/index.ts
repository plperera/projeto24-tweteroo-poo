import { TweetRepository } from "../../../repository/tweetRepository"
import GetAllUserTweetsController from "../getAllUserTweets-controller"
import { GetAllUserTweetsService } from "../getAllUserTweets.service"

const tweetRepository = TweetRepository.getInstance()
const getAllUserTweetsService = new GetAllUserTweetsService(tweetRepository)
export const getAllUserTweetsController = new GetAllUserTweetsController(getAllUserTweetsService)