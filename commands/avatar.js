const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{
  let user = message.mentions.users.first() || message.author;
  let mbr = message.guild.roles.find("name", "Leader");
if(!message.member.roles.has(mbr.id)) return message.channel.send(message.author.avatarURL);
  //avatar avatar embed
    let avatarembed = new Discord.RichEmbed()
    .setAuthor(`${user.username}'s avatar'`)
    .setFooter("Bugs Bunny:Nice Avatar")
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
