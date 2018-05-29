const Discord = require("discord.js");
const coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {

  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  let uCoins = coins[message.author.id].coins;

  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#00FF00")
  .addField("💰", uCoins)
  .setTimestamp();

message.delete();
message.author.send(coinEmbed);

}

module.exports.help = {
  name: "coins"
}
