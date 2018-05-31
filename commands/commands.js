const Discord = require("discord.js");
const botconfig = require("botconfig.json");

module.exports.run = async (bot, message, args) => {
  let commandEmbed = new Discord.RichEmbed()
  .addField("roll", " t.roll (Rolls a dice)")
  .addField("doggy", "sends random picture of doggy everytime user enters the command")
  .addField("avatar", "sends the avatar of author or the user tagged infront of it")
  .addField("info", "displays information about the bot.")
  .setColor(botconfig.purple);

  message.delete().catch(O_o => {});
  message.channel.send(commandEmbed);
}

module.exports.help = {
  name: "commands"
}
