import { Request, Response } from "express";
import { Tweet } from "../models/Tweet.js";
import { getUserService } from "../useCases/Users/getUser"
import authController from "../useCases/Users/createUser/createUser-controller.js";

/*
import tweetService from "../services/tweet-service.js";

export async function newTweet(req, res) {   
    try {

        const { tweet, username } = req.body;

        if (!username || !tweet) {
            return res.status(400).send('Todos os campos são obrigatórios!');
        }

        const newTweet = await tweetService.newTweet({ tweet, username })

        res.status(201).send('OK, seu tweet foi criado');


    } catch (error) {

        return res.sendStatus(500);

    }   
}

export async function getTweets(req, res) {   
    try {

        const { page } = req.query;

        if (page && page < 1) {
            res.status(400).send('Informe uma página válida!');
            return;
        }

        const limite = 10;
        const start = (page - 1) * limite;
        const end = page * limite;

        const tweets = await tweetService.getTweets()

        function reverseTweets() {
            return [...tweets].reverse();
        }

        if (tweets.length <= 10) {
            return res.send(reverseTweets());
        }

        res.status(200).send([...tweets].reverse().slice(start, end));

    } catch (error) {

        return res.sendStatus(500);

    }   
}

export async function getAllTweetsByUsername(req, res) {   
    try {

        const { username } = req.params;

        const tweetsDoUsuario = tweets.filter(t => t.username === username);

        res.status(200).send(tweetsDoUsuario);

    } catch (error) {

        return res.sendStatus(500);

    }   
}
*/
class TweetController {

    private tweets: Tweet[]

    constructor() {
        this.tweets = []
        this.newTweet = this.newTweet.bind(this)
        this.getTweets = this.getTweets.bind(this)
        this.getTweetsByUsername = this.getTweetsByUsername.bind(this)
    }

    newTweet(req: Request, res: Response): Response {

        const { tweet, username } = req.body;

        if (!username || !tweet) {
            return res.status(400).send('Todos os campos são obrigatórios!');
        }

        const { avatar } = getUserService.execute(username)

        this.tweets.push({username, avatar, tweet})

        return res.status(201).send('OK, seu tweet foi criado');

    }

    getTweets(req: Request, res: Response): Response  {

        const page = Number(req.query.page);

        if (page && page < 1) {
            return res.status(400).send('Informe uma página válida!');
        }

        const limite = 10;
        const start = (page - 1) * limite;
        const end = page * limite;

        const tweets = this.tweets

        function reverseTweets() {
            return [...tweets].reverse();
        }

        if (tweets.length <= 10) {
            return res.send(reverseTweets());
        }

        return res.status(200).send(this.reverseTweets().slice(start, end));

    }

    getTweetsByUsername(req: Request, res: Response): Response  {

        const { username } = req.params;

        const tweets = this.tweets

        const tweetsDoUsuario = tweets.filter(t => t.username === username);

        return res.status(200).send(tweetsDoUsuario);

    }

    private reverseTweets(): Tweet[] {
        return [...this.tweets].reverse();
    }

}
export default new TweetController