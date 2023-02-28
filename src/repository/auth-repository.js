async function createNewUser({ username, avatar }) {
    return usuarios.push({ username, avatar });
}

const authRepository = {
    createNewUser
}

export default authRepository