import { UserRepository } from "../../../repository/userRepository"
import { CreateUserService } from "./createUser-service"
import CreateUserController from "./createUser-controller"

const userRepository = UserRepository.getInstance()
const createUserService = new CreateUserService(userRepository)
export const createUserController = new CreateUserController(createUserService)
