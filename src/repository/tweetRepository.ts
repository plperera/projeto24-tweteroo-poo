import { Tweet } from "../models/Tweet";

export class TweetRepository{
    private tweets: Tweet[]
    private static INSTANCE: TweetRepository

    constructor(){
        this.tweets = []
    }

    public static getInstance(): TweetRepository {
        if(!this.INSTANCE){
            this.INSTANCE = new TweetRepository()
        }
        return this.INSTANCE
    }

    insertTweet({ username, avatar, tweet }: Tweet ): void {
        const newTweet: Tweet = new Tweet( username, tweet, avatar )
        this.tweets.push(newTweet)
    }
    getAll(): Tweet[] {
        return this.tweets
    }
}