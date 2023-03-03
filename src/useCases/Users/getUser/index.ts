import { UserRepository } from "../../../repository/userRepository"
import { GetUserService } from "./getUser-service"

const userRepository = UserRepository.getInstance()
export const getUserService = new GetUserService(userRepository)
