
import { Request, Response } from "express";
import { GetAllUserTweetsService } from "./getAllUserTweets.service";
 

export default class GetAllUserTweetsController {

    constructor(private getAllUserTweetsService: GetAllUserTweetsService){}

    handle(req: Request, res: Response): Response {

        const { username } = req.params;

        const tweets = this.getAllUserTweetsService.execute(username)

        return res.status(200).send(tweets);
    }
}