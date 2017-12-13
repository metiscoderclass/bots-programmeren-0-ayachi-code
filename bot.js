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
  }else if (vak == "duits") {
    return bot.sendMessage(msg.from.id,"André IJssel,Saskia Laval,Michel Heemskerk,")
  } else if (vak == "geschiedenis") {
    return bot.sendMessage(msg.from.id,"Arne van Steenis,Jasper Dankaart,Tynke Mulder,Arda van Eikeren,Leo Boon")
  }  else if (vak == "nederlands") {
    return bot.sendMessage(msg.from.id,"mevrouw Den Boer, mevrouw Bosman, meneer  Demirözcan, mevrouw Graat, meneer Mertens, mevrouw Scot, mevrouw Hoebens, mevrouw Ikking of mevrouw Meijjer")
  } else if (vak == "engels") {
    return bot.sendMessage(msg.from.id,"Mirjam Wagener, Lotte Peters, Jamila Schalken, Jasmijn van Huis, Steven Mei, Louwrens ter Veen en Ömer Okur. ")
  } else if (vak == "frans") {
    return bot.sendMessage(msg.from.id,"Jamila el Haddad en Marjanne de Cuyper,Hassan Harrando, Stephanie Feracci,  Michel Heemskerk, Mattia Leoni, Dafina Marinova,Ilse Zigtema")
  } else if (vak == "aarderijkskunde") {
    return bot.sendMessage(msg.from.id,"Jos Hummelen, Marit van der Tuin ,Serap Kabakci,Wouter Luttekes, Martin Vlaming")
  } else if (vak == "biologie") {
    return bot.sendMessage(msg.from.id,"Johan bondt")//
  } else if (vak == "wiskunde") {
    return bot.sendMessage(msg.from.id,"Johana de jager,  Jurjen Hickmann, Chaga roucian")//
  } else if (vak == "natuurkunde") {
    return bot.sendMessage(msg.from.id,"")
  } else if (vak == "onderzoek en ontwerp" || vak == "O&O") {
    return bot.sendMessage(msg.from.id,"Frank Rouke,Tessa Tilroe,Astrid Krijger")
  } else if (vak == "Kunst beeldende vorming" || vak == "kubv") {
    return bot.sendMessage(msg.from.id," Iwona Metz (mavo), Tessa Tilroe (havo/vwo onderbouw), Gert-Jan Meijer (havo/vwo middenbouw) en Astrid Krijger (havo/vwo bovenbouw)")//doen
  } else if (vak == "gym" || vak == "LO") {
    return bot.sendMessage(msg.from.id,"Wil de Vries, Emin Durmus, Linda Westera en Esther Snip")
  } else if (vak == "scheikunde") {
    return bot.sendMessage(msg.from.id,"binnenkort....")
  } else if (vak == "economie") {
    return bot.sendMessage(msg.from.id,"Halit Solmaz, Hakan Bakar en Mesut Senkal")
  }else if (vak == "klassieke talen") {
    return bot.sendMessage(msg.from.id,"Simon Mulder")
  }else if (vak == "maatschappijleer") {
    return bot.sendMessage(msg.from.id,"Leo Boon en Marijke Laverman.")
  }else if (vak == "maatschappijwetenschappen") {
    return bot.sendMessage(msg.from.id,"Marijke Laverman.")
  }else {
    return bot.sendMessage(msg.from.id,"Het vak bestaat niet of er zijn er geen docenten voor... ")
  }





});




bot.start();
