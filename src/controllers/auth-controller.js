import authService from "../services/auth-service";

export async function newUser(req, res) {   
    try {

        const { username, avatar } = req.body;
    
        if (!username || !avatar) {
            return res.status(400).send('Todos os campos são obrigatórios!');
        }

        const newUser = await authService.createNewUser({ username, avatar })
        
        res.status(200).send('OK deu tudo certo');

    } catch (error) {

        return res.sendStatus(500);

    }
      
}