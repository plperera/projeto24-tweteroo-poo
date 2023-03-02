import chalk from 'chalk';
import dotenv from 'dotenv'
import cors from 'cors';
import express, { json } from 'express';
import { authRouter } from './routers/auth-router';
import { tweetRouter } from './routers/tweet-router';
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
  console.log(chalk.bold.bgBlack.blueBright(`   Servidor funfando de boas!!! De olho na porta: ${process.env.PORT}   ツ `));
});
