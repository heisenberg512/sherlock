const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{
  let user = message.mentions.users.first() || message.author;
  // let terr = message.guild.roles.find("name", "Terrorists");
// if(!message.member.roles.has(terr.id)) return message.channel.send("You are not a terrorists member");
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
