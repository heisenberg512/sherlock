const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async(bot, message, args) => {
let toban = message.members.mentions.first();
     let reason  = args.slice(1).join(" ");
     if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Permission Denied");
     if(toban.hasPermission("ADMINISTRATOR")) return message.reply("I can't mute him");
     if(!args[0] || args[0] === "help") return message.channel.send("Usage: ban <user> <reason>");
     
     let embed = new Discord.RichEmbed()
     .setAuthor(`${toban.username} has been banned`)
     .setDescription(reason)
     .addField("Banned by", `${message.author.id}`)
     .setColor(botconfig.green)
     .setTimestamp();
     
     message.delete().catch(O_o=>{});
     message.guild.member(toban.id).ban(reason);
     message.channel.send(embed);
}


module.exports.help = {
 name: "ban"
}
