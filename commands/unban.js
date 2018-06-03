  const Discord = require("discord.js");
  
  module.exports.run = async (bot, message, args) => {
    let tounban = message.mentions.members.first();
    if(!args[0] || args[0] === "help") return message.channel.send("Usage: unban <user>");
  
  let invite = message.channel.createInvite();
  let embed = new Discord.RichEmbed()
  .setTitle(Unban Report)
  .addField("Unbanned user", `${tounban.user.username}`)
  .addField("Unbanned by", message.author)
  .setTimestamp();
  
  message.delete().catch(O_o=>{});
  tounban.unban;
  tounban.send(`**You have been unbanned from ${message.guild.name}**`);
  tounban.send(invite);
  }
  
  
  module.exports.help = {
  name: "unban"
  }
