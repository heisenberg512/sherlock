const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  let user = message.mentions.members.first();
  if(!args[0] || args[0] === "help") return message.channel.send("Usage: slap <user>");
  if(user.id === "332134348725813248") return message.delete().catch(O_o=>{}).then(message.reply("**has slapped himself**"));

message.delete().catch(O_o=>{});
message.channel.send(`${message.author} **has slapped** ${user}`);
}


module.exports.help = {
name: "slap"
}
