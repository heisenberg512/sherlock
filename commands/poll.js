
const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
   let text = args.join(" ");
  if(!args[0]) return message.channel.send("Usage: poll <question>", {code:'py'});
  if(!message.author.has("ADMINISTRATOR")) return message.channel.send("Permission Denied").then(msg => msg.delete(1000));
   
   let embed = new Discord.RichEmbed()
   .setTitle(`**poll created by ${message.author.username}`**)
   .setFooter(" Vote either yes or no ")
   .setDescription(text)
   .setColor(botconfig.orange);
   
   message.channel.send(embed);
   await message.react('white_check_mark');
   await message.react('negative_squared_cross_mark');
   
   message.delete().catch(O_o=>{});

}

module.exports.help = {
  name:"poll"
}
