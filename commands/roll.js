const Discord = require("discord.js");


module.exports.run = async (bot, message, args) =>{
  let terr = message.guild.roles.find("name", "Member");
if(!message.member.roles.has(terr.id)) return;
  var roll = Math.floor(Math.random() * 6) + 1;
  message.reply("You rolled a " + roll);
  message.delete().catch(O_o=>{});
}

module.exports.help = {
  name: "roll"
}
