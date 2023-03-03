import { Request, Response } from "express";
import { Usuario } from "../../../models/Usuario";
import { CreateUserService } from "./createUser-service"
 

export default class CreateUserController {

    constructor(private createUserService: CreateUserService){}

    handle(req: Request, res: Response): Response {

        const { username, avatar } = req.body;

        this.createUserService.execute({ username, avatar })
        
        return res.status(200).send('OK deu tudo certo');
    }
}