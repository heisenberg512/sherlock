const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
  let commandEmbed = new Discord.RichEmbed()
  .addField("roll", "roll (Rolls a dice)")
  .addField("doggy", "sends random picture of doggy everytime user enters the command")
  .addField("avatar", "sends the avatar of author or the user tagged infront of it")
  .addField("info", "displays information about the bot.")
  .addField("stats", "displays the time when you joined M.B.R server")
  .addField("tempmute", "mute members for a limited time")
  .setColor(botconfig.purple);

  message.delete().catch(O_o => {});
  message.channel.send(commandEmbed);
}

module.exports.help = {
  name: "commands"
}
