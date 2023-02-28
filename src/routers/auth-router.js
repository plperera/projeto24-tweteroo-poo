import { Router } from 'express'
import { newUser } from '../controllers/auth-controller.js'

const authRouter = Router()

authRouter
    .post("/sign-up", newUser)

export { authRouter }