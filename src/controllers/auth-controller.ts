/*
import authService from "../services/auth-service.js";

export async function newUser(req, res) {   
    try {

        const { username, avatar } = req.body;
    
        if (!username || !avatar) {
            return res.status(400).send('Todos os campos são obrigatórios!');
        }

        const newUser = await authService.createNewUser({ username, avatar })
        
        res.status(200).send('OK deu tudo certo');

    } catch (error) {

        return res.sendStatus(500);

    }   
}
*/
import { Request, Response } from "express";
import { Usuario } from "../models/Usuario";

 

export class AuthController {

    usuarios: Usuario[]

    constructor(){
        this.usuarios = []
        this.signup = this.signup.bind(this)
        this.getAvatarByUsername = this.getAvatarByUsername.bind(this)
    }

    signup(req: Request, res: Response){

        const { username, avatar } = req.body;
    
        if (!username || !avatar) {
            return res.status(400).send('Todos os campos são obrigatórios!');
        }

        this.usuarios.push({ username, avatar })
        
        res.status(200).send('OK deu tudo certo');
    }

    getAvatarByUsername(username: string) {
        return this.usuarios.find( user => user.username === username)
    }
}

export default new AuthController