const TeleBot = require('telebot');

const bot = new TeleBot({
    token: '474803331:AAGrjNROmheFMnp9SzvaCpmRHaeXXG6xErQ'
});


bot.on('/start',(msg) => {
  let txt = "Welkom " + msg.from.first_name + " bij deze opendag bot";
});



bot.start();
