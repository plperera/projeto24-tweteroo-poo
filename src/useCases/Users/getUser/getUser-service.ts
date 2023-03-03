import { Usuario } from "../../../models/Usuario";
import { UserRepository } from "../../../repository/userRepository"

export class GetUserService{

    constructor( private userRepository: UserRepository){}

    execute( username: string ): Usuario {

        if (!username){
            throw new Error("Erro no campo de Username")
        }
        
        const user = this.userRepository.findByUsername({ username })
                
        return user 

    }
}