const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
  let commandEmbed = new Discord.RichEmbed()
  .setTitle("Commands")
  .addField("roll", "roll (Rolls a dice)")
  .addField("doggy", "sends random picture of doggy everytime user enters the command")
  .addField("avatar", "sends the avatar of author or the user tagged infront of it")
  .addField("info", "displays information about the bot.")
  .addField("stats", "displays the time when you joined M.B.R Discord server")
  .addField("purge", "deletes msgs in channels")
  .addField("mute/unmute", "mute/unmute members")
  .addField("slap", "slaps the player mentioned")
  .addField("ban/unban", "ban/unban users")
  .addField("kick", "kicks a member")
  .addField("Translate", "translates text into the language user inputs")
  .addField("weather", "shows the weather forcast of location entered")
  .setColor(botconfig.purple);

  message.delete().catch(O_o => {});
  message.channel.send(commandEmbed);
}

module.exports.help = {
  name: "commands"
}
