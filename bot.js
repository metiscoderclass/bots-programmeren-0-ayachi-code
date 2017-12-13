const TeleBot = require('telebot');
const admin = require("firebase-admin");


var serviceAccount = require("./opendag-bot-firebase-adminsdk-qpl1s-d10e6a8ade.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://opendag-bot.firebaseio.com"
});


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


bot.on(/^\/faq (.+)/,(msg,props) => {
var nummer = props.match[1];

let txt2 = `
De Coderclass is een nieuwe opleiding op het Metis Montessori Lyceum (MML) waarin informatica een belangrijk ondeimg_3860rdeel is. Bijzonder gemotiveerde leerlingen met grote interesse voor ICT horen tot de doelgroep.Vanaf het eerste jaar krijgen de leerlingen, die in deze bijzondere profielklas zitten, een intensief programma van 5 uur in de week waarin ze de fijne kneepjes van het vak leren. Iedere leerling kan op zijn eigen tempo aan het werk gaan om zich te verdiepen of te verbreden in dit inspirerende vakgebied. Ook doen de leerlingen vier keer per jaar een project waarbij er sprake is van een echte opdrachtgever (bedrijf of vervolgopleiding). Heel bijzonder is dat het MML intensief samenwerkt met bedrijven. Docenten en leerlingen kunnen er stage lopen. Bovendien leveren diverse bedrijven ons realistische opdrachten zodat leerlingen echt weten hoe het bedrijfsleven werkt.

Naast informatica volgen leerlingen het normale programma voor het voortgezet onderwijs en doen ze examen voor een diploma. De speerpunten van het MML zoals montessori-onderwijs, wereldburgerschap of ondernemerschap vormen een ondeelbaar onderdeel van dit programma.

`;



let vragen_antwoord = {
  txt2: txt2,
  txt3: "De leerlingen krijgen 5 uur in de week informatica",
  txt4: "De Coderclass begint in de brugklas en endigt tot de 5e of 6e klas",
  txt5: "Als leerlingen een module beheersen krijgen ze de geheten badge een badge laat zien wat je beheerst"
}





if (nummer == "show") {
  var txt = "0:Wat is de coderclass,1:Hoeveel uur informatica hebben ze per week,2:Tot welke klas gaat het,3:Wat zijn badges ?"
  return bot.sendMessage(msg.from.id,txt);

} else if (nummer == "0") {
  return bot.sendMessage(msg.from.id,vragen_antwoord.txt2);
} else if (nummer == "1") {
  return bot.sendMessage(msg.from.id,vragen_antwoord.txt3);
} else if (nummer == "2") {
  return bot.sendMessage(msg.from.id,vragen_antwoord.txt4);
} else if (nummer == "3") {
  return bot.sendMessage(msg.from.id,vragen_antwoord.txt5);
}




});



bot.on('/contact',(msg) => {

return bot.sendContact(msg.from.id,"email","Bilal","ayachi");



});



bot.on(/^\/verstuur (.+)/,(msg) => {
  let bericht = props.match[1];

});





bot.start();
