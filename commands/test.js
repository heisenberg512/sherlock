const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
  
  let embed = new Discord.RichEmbed()
  .setTitle("Page 1")
  .setColor(botconfig.orange)
  .setDescription("test");
  
  let embed2 = new Discord.RichEmbed()
  .setTitle("Page 2")
  .setColor(botconfig.purple)
  .setDescription("Test test");
  
  let msg = await message.channel.send(embed);
  await msg.react("➡");
  await msg.react("⬅");
}

module.exports.help = {
 name: "test"
}
