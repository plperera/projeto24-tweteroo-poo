import chalk from 'chalk';
import cors from 'cors';
import express, { json } from 'express';
import { authRouter } from './routers/auth-router.js';
import { tweetRouter } from './routers/tweet-router.js';

const usuarios = [];
const tweets = [];

const app = express();
app
  .use(cors())
  .use(express.json())
  .use("/tweets", tweetRouter)
  .use("", authRouter)



app.post('/sign-up', (req, res) => {
  const { username, avatar } = req.body;

  if (!username || !avatar) {
    res.status(400).send('Todos os campos são obrigatórios!');
    return;
  }

  usuarios.push({ username, avatar });

  res.status(200).send('OK deu tudo certo');
});

app.post('/tweets', (req, res) => {
  const { tweet, username } = req.body;

  if (!username || !tweet) {
    return res.status(400).send('Todos os campos são obrigatórios!');
  }

  const { avatar } = usuarios.find(user => user.username === username);

  tweets.push({ username, tweet, avatar });

  res.status(201).send('OK, seu tweet foi criado');
});

app.get('/tweets/:username', (req, res) => {
  const { username } = req.params;

  const tweetsDoUsuario = tweets.filter(t => t.username === username);

  res.status(200).send(tweetsDoUsuario);
});

app.get('/tweets', (req, res) => {
  const { page } = req.query;

  if (page && page < 1) {
    res.status(400).send('Informe uma página válida!');
    return;
  }
  const limite = 10;
  const start = (page - 1) * limite;
  const end = page * limite;

  if (tweets.length <= 10) {
    return res.send(reverseTweets());
  }

  res.status(200).send([...tweets].reverse().slice(start, end));
});

function reverseTweets() {
  return [...tweets].reverse();
}

app.listen(5001, () => {
  console.log(chalk.bold.blue('Servidor funfando de boas!!!'));
});
