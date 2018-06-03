const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  if(message.author.id !== "332134348725813248") return;
  let msg = args.join(" ");
  message.delete().catch(O_o => {});
  message.channel.send(msg);

}

module.exports.help = {
  name: "say"
}
