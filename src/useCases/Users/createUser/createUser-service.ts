import { Usuario } from "../../../models/Usuario";
import { UserRepository } from "../../../repository/userRepository"

export class CreateUserService{

    constructor( private userRepository: UserRepository){}

    execute({ username, avatar }: Usuario): void {

        if (!username || !avatar) {
            throw new Error("Todo os campos são obrigatórios!")
        }

        this.userRepository.insertUser({ username, avatar})

    }
}