const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{
  let user = message.mentions.users.first() || message.author;
if(!message.author.hasPermission("MANAGE_SERVER")) return message.channel.send(message.author.avatarURL);
  if(!args[0] === "help") return message.channel.send("Usage: $avatar <user>"); 
   //avatar avatar embed
    let avatarembed = new Discord.RichEmbed()
    .setAuthor(`${user.username}'s avatar'`)
    .setFooter("Nice Avatar")
    //footer description
    .setImage(user.displayAvatarURL)
    //user's avtar
   .setColor("#ffe43d")
   .setTimestamp();
   //sends avatar
  message.channel.send(avatarembed);
}

module.exports.help = {
  name: "avatar"
}
