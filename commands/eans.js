const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) =>{
  let answer = args.join(" ");
  // let terr = message.guild.roles.find("name", "Terrorists");
// if(!message.member.roles.has(terr.id)) return message.channel.send("You are not a terrorists member");

  let ansEmbed = new Discord.RichEmbed()
  .setDescription("Event answer")
  .setColor(botconfig.yellow)
  .addField("Answered By", `${message.author} with ID : ${message.author.id}`)
  .addField("Time", message.createdAt)
  .addField("Answer", answer);

  let answerchannel = message.guild.channels.find(`name`, "event-channel");
  if(!answerchannel) return message.channel.send("Couldn't find event channel.");

  message.delete().catch(O_o=>{});
  message.channel.send(`${message.author} Your vote has been submited`);
  answerchannel.send(ansEmbed);
}

module.exports.help = {
  name: "eans"
}
