const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
if(!args[0]) return message.channel.send("Usage: mynick <desired nick>");
let nick = args.join(" ");

message.guild.member(message.author).setNickname(nick);
message.reply(`Your nickname has been changed to ${nick}`);

}


module.exports.help = {
 name: "mynick"
}
