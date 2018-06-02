const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let tounmute = message.mentions.members.first();
  let mute = message.guild.roles.find("name", "muted");
  if(!args[0] || args[0] === "help") return message.channel.send("Usage: $unmute <user>");
  if(!tounmute.roles.has(mute.id)) return message.channel.send(`${tounmute} is not muted`);
  if(!message.member.hasPermission("MUTE_MEMBERS")) return;

  tounmute.removeRole(mute.id);
  message.channel.send(`**${tounmute} has been unmuted**`);
  message.delete().catch(O_o=>{});
}

module.exports.help = {
  name: "unmute"
}
