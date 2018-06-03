const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  let user = message.mentions.members.first();
  
  message.channel.createInvite().then( invite => user.send(`https://discord.gg/${invite.code}`));
  

}

module.exports.help = {
name: "send"
}
