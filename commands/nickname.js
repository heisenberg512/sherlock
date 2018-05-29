const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
  let nuser = message.mentions.users.first();
  let nick = args.slice(1).join(" ");
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Permission denied");
 if(!args[0] || args[0] === "help") return message.reply(`Usage: t.nickname <user> <nick>`);
  // let organizer = message.guild.roles.find("name", "Head Event Organizer");
  // if(!message.member.roles.has(organizer.id)) return message.channel.send("fck u fckin fcker bitch");

   message.delete();
   message.guild.member(nuser).setNickname(nick);

   let nEmbed = new Discord.RichEmbed()
   .setTitle("Nickname")
   .setTimestamp()
   .setColor(botconfig.yellow)
   .setDescription(`${nuser}'s nick has been changed to ${nick}`)
   .setFooter("Bunny: Get rekt", nuser.avatarURL);

 message.channel.send(nEmbed).then(msg => msg.delete(10000));

}

module.exports.help = {
  name: "nickname"
}
