import { Usuario } from "../models/Usuario";

export class UserRepository{
    private users: Usuario[]
    private static INSTANCE: UserRepository

    constructor(){
        this.users = []
    }
    public static getInstance(): UserRepository {
        if(!this.INSTANCE){
            this.INSTANCE = new UserRepository()
        }
        return this.INSTANCE
    }

    insertUser({ username, avatar }: Usuario ): void {
        const newUser: Usuario = new Usuario(username, avatar)
        this.users.push(newUser)
    }

    findByUsername({username}: {username: string}): Usuario{
        const user: Usuario | undefined = this.users.find( user => user.username === username)

        if (!user){
            return { username: '', avatar: ''}
        }
        
        return user
    }
}