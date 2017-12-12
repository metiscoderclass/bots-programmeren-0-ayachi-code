const TeleBot = require('telebot');

const bot = new TeleBot({
    token: '456998554:AAF7MBe8K0urL08vefgnZWiXAGWEl1CtiTA'
});


bot.on('/start',(msg) => {
  var txt = "Welkom " + msg.from.first_name + " bij de opendag bot";
  return bot.sendMessage(msg.from.id,txt);
});



bot.on(/^\/docenten (.+)/,(msg,props) => {
  const vak = props.match[1];
  if (vak == "informatica") {
    return bot.sendMessage(msg.from.id,"Hakan Akkas, Adem Ozturk, Jurjen Hickmann")

  }





});




bot.start();
