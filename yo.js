var config = {
  channels: ["#yosay"],
  server: "irc.gamesurge.net",
  botName: "YeomanDude",
  debug: true
};

var irc = require("irc");
var yosay = require("yosay");

function say(msg){
  return yosay(msg);
}

// Create the bot
var bot = new irc.Client(config.server, config.botName, config);

bot.addListener('message', function(from, to, message) {
  if(message.indexOf('yosay') == 0){
    bot.say(to, say(message.substring(6)));
  }
});
