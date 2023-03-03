import chalk from 'chalk';
import dotenv from 'dotenv'
import cors from 'cors';
import express from 'express';
import { tweetRouter } from './routers/tweet-router';
import { authRouter } from './routers/auth-router'

const tweets = [];

const app = express();
dotenv.config()
app
  .use(cors())
  .use(express.json())
  .use("/tweets", tweetRouter)
  .use("", authRouter)

app.listen(process.env.PORT, () => {
  console.log(chalk.bold.bgBlack.blueBright(`   Servidor funfando de boas!!! De olho na porta: ${process.env.PORT}   ツ `));
});
