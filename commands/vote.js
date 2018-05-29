const Discord = require("discord.js");
const botconfig = ("../botconfig.json");

module.exports.run = async (bot, message, args) => {
   // let organizer = message.guild.roles.find("name", "Event Organizer");
   //  if(!message.member.roles.has(organizer.id)) return message.channel.send("Permission Denied").then(msg => msg.delete(2500));

   let eEmbed = new Discord.RichEmbed()
   .setTitle("Vote for you favourite event")
   .setColor("#fcf301")
   .setTimestamp()
   .addField("Event 1", "Rape 3 swat members & 3 army members")
   .addField("Event 2", "Chainsaw 3 swat members and pee on them")
   .addField("Event 3", "Go on a robstreak of 40")
   .addField("Event 4", "Drive by kill 6 leos using Monster truck")
   .addField("To vote", "Type t.eans[vote here eg: event 1 or event 2 etc]");
  message.delete();
  message.channel.send(eEmbed);

}

module.exports.help = {
  name: "startvote"
}
