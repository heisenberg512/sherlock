const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  let user = message.mentions.members.first();
  
  message.channel.createInvite().then(user.send(`${invite.code}`));
  

}

module.exports.help = {
name: "send"
}
