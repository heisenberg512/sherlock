const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

    let botembed = new Discord.RichEmbed()
    .setColor("#ce0c5a")
    .addField("Name", bot.user.username)
    .addField("Prefix", "t." )
    .setThumbnail("https://image.ibb.co/bFFFon/bot.png")
    .addField("Commands", "t.[$Commands] to use a command")
    .addField("Credits", "created by HeisenBERG#6584")
    .addField("Created on", bot.user.createdAt);

    message.delete();
    message.channel.send(botembed);
 }

module.exports.help = {
  name: "info"
}
