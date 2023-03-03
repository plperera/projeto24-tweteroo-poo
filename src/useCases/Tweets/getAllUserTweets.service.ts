import { Tweet } from "../../models/Tweet";
import { TweetRepository } from "../../repository/tweetRepository";

export class GetAllUserTweetsService{

    constructor( private tweetRepository: TweetRepository){}

    execute(username: string): Tweet[] {

        const tweets = this.tweetRepository.getAll()

        return tweets.filter( tweet => tweet.username === username)

    }
}