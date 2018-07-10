const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args, tools) => {
  let text = args.join(" ");
  if(!args[0]) return message.channel.send("Usage: poll <question>", {code:'py'});
  if(!message.author.has("ADMINISTRATOR")) return message.delete().catch(O_o=>{});
  
  let embed = new Discord.RichEmbed()
  .setTitle(`**Poll created by ${message.author.username}**`)
  .setDescription(text)
  .setFooter("Vote either ✅ for YES or ❌ for NO")
  .setColor(botconfig.yellow);
  
  let msg = await message.channel.send(embed);
  await msg.react('✅');
  await msg.react('❌');
  message.delete().catch(O_o=>{});
}

module.exports.help = {
name: "poll"
}
