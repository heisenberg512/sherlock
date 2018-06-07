const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
 let kUser = message.mentions.members.first();
 let reason = args.slice(1).join(" ");
 if(!message.member.hasPermission("ADMINISTRATOR")) return;
 if(!args[0] || args[0] === "help") return message.channel.send("kick <user> <reason>");
 
 let embed = new Discord.RichEmbed()
 .setTitle("Kick Report")
 .setDescription(`${kUser.user.username} has  been kicked by ${message.author}`)
 .addField("Reason", `${reason ? reason: "None"}`)
 .setColor(botconfig.voilet)
 .setTimestamp();

message.delete().catch(O_o=>{});
kUser.kick(reason);
kUser.send(`**You have been kicked from the server ${message.guild.name} for Reason: ${reason}**`);
}


module.exports.help = {
name: "kick"
}
