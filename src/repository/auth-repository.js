import { connection } from "../database/db.js";

async function createNewUser({ username, avatar }) {

    const newUser = await connection.query(`INSERT INTO users (avatar, username) VALUES ($1, $2);`, [avatar, username])

    return newUser

}

const authRepository = {
    createNewUser
}

export default authRepository