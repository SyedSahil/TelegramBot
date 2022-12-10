require('dotenv').config();
const axios = require('axios');

const TelegramBot = require('node-telegram-bot-api');


const bot = new TelegramBot(process.env.TELEGRAM_API_TOKEN, {
    polling: true
});

let id;


bot.on('message',message => {
    id  = message.from.id;
    const text = message.text;

    if(text == '/start'){
        bot.sendMessage(id,'Welcome to my Kingdom.I am a bot designed to provide you random quotes.Type /quote to get started!');
    }

    if(text == '/quote'){

      axios.get('https://api.quotable.io/random?').then(response => {

        bot.sendMessage(id,response.data.content);
      })

    }
});