const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  let invite = message.channel.createInvite();
  let user = message.mentions.members.first();
  
  user.send(`${invite}`);

}

module.exports.help = {
name: "send"
}
