const translate = require("google-translate-api");
const Discord = require("discord.js");
const botconfig = require("../botconfig.json")

module.exports.run = async(bot, message, args) => {
  if(!args[0] || args[0] === "help") return message.channel.send("Usage: translate <language to translate it into> <text to translate>")
  translate(args.slice(1).join(" "), {to:args[0]}).then(res => {
   let embed = new Discord.RichEmbed()
   .setTitle("Google Translator")
   .addField("Real text", args.slice(1).join(" "))
   .addField("Translated Text", res.text)
   .setColot(botconfig.voilet)
   .setTimestamp();
   
   message.delete().catch(O_o=>{});
   message.channel.send(embed);
  })

}


module.exports.help = {
 name: "translate"
}
