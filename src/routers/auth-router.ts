import { Router } from 'express'
import { createUserController } from '../useCases/Users/createUser'

const authRouter = Router()

authRouter
    .post("/sign-up", (req, res) => createUserController.handle(req, res))

export { authRouter }