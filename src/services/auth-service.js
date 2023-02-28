import authRepository from "../repository/auth-repository.js"

async function createNewUser({username, avatar}){

    authRepository.createNewUser({ username, avatar })
}
const authService = {
    createNewUser
}

export default authService