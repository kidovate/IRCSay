var config = {
  channels: ["#dota2mods"],
  server: "irc.gamesurge.net",
  botName: "HolyCow",
  floodProtection:false,
  debug: true
};

var irc = require("irc");
var cowsay = require("cowsay");

function say(msg){
  return cowsay.say({
    text: msg
  });
}

// Create the bot
var bot = new irc.Client(config.server, config.botName, {
  channels: config.channels,
  floodProtection: config.floodProtection,
  debug: config.debug
});

bot.addListener('message', function(from, to, message) {
  if(message.indexOf('cowsay') == 0){
    bot.say(to, say(message.substring(6)));
  }
});
