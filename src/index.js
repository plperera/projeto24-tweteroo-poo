import chalk from 'chalk';
import dotenv from 'dotenv'
import cors from 'cors';
import express, { json } from 'express';
import { authRouter } from './routers/auth-router.js';
import { tweetRouter } from './routers/tweet-router.js';
import { connection } from './database/db.js';


const tweets = [];

const app = express();
dotenv.config()
app
  .use(cors())
  .use(express.json())
  .use("/tweets", tweetRouter)
  .use("", authRouter)


app.get('/status', async (req, res) => {
  const teste = await connection.query(`SELECT * FROM users;`)
  res.status(201).send(teste.rows);
  
});

app.listen(process.env.PORT, () => {
  console.log(chalk.bold.blue(`Servidor funfando de boas!!! OUVINDO A PORTA ${process.env.PORT}`));
});
