const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async(bot, message, args) => {
let toban = message.mentions.members.first();
     let reason  = args.slice(1).join(" ");
     if(!args[0] || args[0] === "help") return message.channel.send("Usage: ban <user> <reason>");
     if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Permission Denied");
     if(toban.hasPermission("ADMINISTRATOR")) return message.reply("I can't mute him");

     
     let embed = new Discord.RichEmbed()
     .setTitle("Ban report")
     .addField("Banned user", `${toban.user.username}`)
     .addField("Reason", reason)
     .addField("Banned by", `${message.author}`)
     .setColor(botconfig.green)
     .setTimestamp();
     
     message.delete().catch(O_o=>{});
     message.guild.member(toban.id).ban(reason);
     message.channel.send(embed);
}


module.exports.help = {
 name: 'ban',
 usage: 'ban <user> <reason>'    
}
