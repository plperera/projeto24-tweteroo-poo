import { Request, Response } from "express";
import { Usuario } from "../../../models/Usuario";
import { CreateTweetService } from "./createTweet-service"
 

export default class CreateTweetController {

    constructor(private createTweetService: CreateTweetService){}

    handle(req: Request, res: Response): Response {

        const { tweet, username } = req.body;

        if (!username || !tweet) {
            return res.status(400).send('Todos os campos são obrigatórios!');
        }

        this.createTweetService.execute({ tweet, username })

        return res.status(201).send('OK, seu tweet foi criado');
    }
}