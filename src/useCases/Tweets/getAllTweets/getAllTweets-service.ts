import { Tweet } from "../../../models/Tweet";
import { Usuario } from "../../../models/Usuario";
import { TweetRepository } from "../../../repository/tweetRepository";
import { getUserService } from "../../Users/getUser/index"

export class GetAllTweetsService{

    constructor( private tweetRepository: TweetRepository){}

    execute(page: number): Tweet[] {

        const limite = 10; 
        const start = (page - 1) * limite;
        const end = page * limite;

        const tweetsArray = this.tweetRepository.getAll()

        if (tweetsArray.length <= 10) {
            return [...tweetsArray].reverse();
        }

        return [...tweetsArray].reverse().slice(start, end)

    }
}