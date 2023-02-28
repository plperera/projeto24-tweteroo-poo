async function createNewUser({username, avatar}){

    usuarios.push({ username, avatar });

}
const authService = {
    createNewUser
}

export default authService