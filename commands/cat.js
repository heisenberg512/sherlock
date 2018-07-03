const Discord = require("discord.js");
const app = this.app = express();
app.use('/cat-api', catApi('/cat-api'));
 
module.exports.run = async(bot, message, args) => {  
fetch('/cat-api').then((res) => res.json()).then(json => message.channel.send(json))
}
  module.exports.help = {
  name: "cat"
}
