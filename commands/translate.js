const Discord = require("discord.js");
const Translate = require('@google-cloud/translate');
const projectId = 'translate-206521';


module.exports.run = async(bot, message, args) => {
    if(!args[0] || args[0] === "help") return message.channel.send("Usage: translate <to> <text to translate>");
    const translate = new Translate({
        projectId: projectId,
      });

      let text = args.slice(1).join(" ");
      let target = args[1];

      translate.translate(text, target)
      .then(results => {
          let translation = results[0];

          message.channel.send(`Text: ${text}`);
          message.channel.send(`Translation: ${translation}`);
      })
      .catch(err => {
         console.log('ERROR:', err);
      })
      

}

module.exports.help = {
    name: "translate"
}
