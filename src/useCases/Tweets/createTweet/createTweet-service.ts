import { Tweet } from "../../../models/Tweet";
import { Usuario } from "../../../models/Usuario";
import { TweetRepository } from "../../../repository/tweetRepository";
import { UserRepository } from "../../../repository/userRepository"
import { getUserService } from "../../Users/getUser/index"

export class CreateTweetService{

    constructor( private tweetRepository: TweetRepository){}

    execute({ username, tweet }: {username: string, tweet: string}): void {

        const { avatar } = getUserService.execute( username )

        if ( avatar === ""){
            throw new Error("Usuario não encontrado")
        }

        this.tweetRepository.insertTweet({ username, avatar, tweet })

    }
}