const Discord = require("discord.js");
const got = require("got");
const api = "dc6zaTOxFJmzC";

module.exports.run = async(bot, message, args) => {
 if(!args[0] || args[0] === "help") return message.channel.send("Usage: giphy <text>", {code: "java"});
 const res = await got(`https://api.giphy.com/v1/gifs/random?api_key=${api}&tag=${encodeURIComponent(args.join(" "))}, {json: true}`);
 if(!res || !res.body || !res.body.data) return message.channel.send("Failed to find a gif that matched to your query", {code: "java"});
 
 const embed = new Discord.RichEmbed()
 .setImage(res.body.data.image_url)
 .setAuthor(message.author.tag, message.author.displayAvatarURL);
 
 message.channel.send(embed);
 
 }
 
 module.exports.help = {
  name: "giphy"
 }
