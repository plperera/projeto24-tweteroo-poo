import authController from "./auth-controller.js";

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
    constructor() {
        this.tweets = []
        this.newTweet = this.newTweet.bind(this)
        this.getTweets = this.getTweets.bind(this)
        this.getTweetsByUsername = this.getTweetsByUsername.bind(this)
    }

    newTweet(req, res) {

        const { tweet, username } = req.body;

        if (!username || !tweet) {
            return res.status(400).send('Todos os campos são obrigatórios!');
        }

        const { avatar } = authController.getAvatarByUsername(username)

        this.tweets.push({username, avatar, tweet})

        res.status(201).send('OK, seu tweet foi criado');

    }

    getTweets(req, res) {

        const { page } = req.query;

        if (page && page < 1) {
            res.status(400).send('Informe uma página válida!');
            return;
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

        res.status(200).send([...tweets].reverse().slice(start, end));

    }

    getTweetsByUsername(req, res) {

        const { username } = req.params;

        const tweets = this.tweets

        const tweetsDoUsuario = tweets.filter(t => t.username === username);

        res.status(200).send(tweetsDoUsuario);

    }

    reverseTweets() {
        return [...tweets].reverse();
    }

}
export default new TweetController