const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

     
     if(!message.member.hasPermisson("ADMINISTRATOR")) return message.channel.send("Permission Denied");
     if(!args[0] || args[0] === "help") return message.channel.send("**Usage: ban <user> <reason>**");    
     let toban = message.mentions.members.first();
     let reason = args.slice(1).join(" ");
     if(toban.hasPermisson("ADMINISTRATOR")) return;
     
     let bembed = new Discord.RichEmbed()
     .setAuthor(`${toban} has been banned by ${message.auhtor.id}`)
     .setDescription(`**${reason}**`)
     .setColor(botconfig.green)
     .setFooter(tomute.avatarURL)
     .setTimestamp();

     message.delete().catch(O_o=>{});
     message.guild.member(toban).ban(reason);
     toban.send(`**You have been banned reason ${reason}**`);
}

module.exports.help =  {
    name: "ban"
}
