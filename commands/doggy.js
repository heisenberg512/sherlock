const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
  
  let {body} = await superagent
  .get(`https://random.dog/woof.json`);

  let dogEmbed = new Discord.RichEmbed()
  .setColor(`#ff3212`)
  .setTitle(`Woah you look nice here bud :dog:`)
  .setImage(body.url);

  message.channel.send(dogEmbed);
}

module.exports.help = {
  name: "doggy"
}
