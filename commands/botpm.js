const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
  let puser = message.mentions.users.first();
  let pm = args.join(" ").slice(22);
 if(message.author.id === "332134348725813248") return message.delete().then(message.channel.send("You don't have permission to use this command").then(msg => msg.delete(5000)));


  puser.send(pm);
  puser.send("-----------Don't reply to this message------------");
  message.channel.send("Your message has been sent").then(msg => msg.delete(5000));
  message.delete();

}

module.exports.help = {
  name: "pm"
}
