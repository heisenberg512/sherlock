const Discord = require("discord.js");
const fs = require("fs");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
  // let organizer = message.guild.roles.find("name", "Event Organizer");
// if(!message.member.roles.has(organizer.id)) return message.channel.send("Permission denied");
   if(!args[0] || args[0 == "help"]) return message.reply("Usage: t.gcoin <user> <amount> ");
  let guser = message.mentions.users.first();
  let number = args.slice(1).join(" ");

 // let gCoins = coins[guser.id].coins;

  let coins = JSON.parse(fs.readFileSync("./coins.json", "utf8"));
  coins[guser.id] = {
   coins: args[1]
  };

 fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
   if (err) console.log (err);
 });

   let cEmbed = new Discord.RichEmbed()
   .addField("💰💰 Prize Alert 💰💰", `${guser} has been awarded ${number} coins for winning the event`)
   .setFooter(`EO: Congratulations bud`, "https://image.ibb.co/bFFFon/bot.png")
   .setTimestamp()
   .setColor(botconfig.purple);

   message.delete();
   message.channel.send(cEmbed).then(msg => msg.delete(1000000));
   guser.send(`You have been awarded ${number} coins for winning the event. Congratulations`);
   guser.send("------------Don't reply to this message----------");
}

module.exports.help = {
  name: "gcoin"
}
