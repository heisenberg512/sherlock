const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
  let text = args.join(" ");
  if(!message.author.hasPermission("ADMINISTRATOR")) return message.delete().catch(O_o=>{});
  if(!args[0]) return message.channel.send("Usage: poll <question>", {code:'py'});
  
  let embed = new Discord.RichEmbed()
  .setTitle(`**Poll created by ${message.author.username}**)
  .setDescription(text)
  .setColor(botconfig.yellow);
  
  message.channel.send(embed);
  message.delete().catch(O_o=>{});
}

module.exports.help = {
name: "poll"
}
