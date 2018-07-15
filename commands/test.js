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

  function (result) {
    bot.on("messageReactionAdd", (reaction, user) => {
     if(reaction.message.id === "467948199173292032"){
      if(reaction.emoji.name === "➡"){
        msg.edit(embed2);
      }
      }
     }
    }

}

module.exports.help = {
 name: "test"
}
