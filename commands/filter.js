const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let forbidden = ["porn", "mc", "bc", "fuck", "fck","bsdk","bhonsrike","bhonsdike", "gandu", "gand", "danda", "lund"];
const filter = message.content.includes(forbidden);
const collector = message.channel.createMessageCollector(filter, {time: 300000});
collector.on('colloect', m => message.channel.send(`Collocted ${m.content}`));
collector.on('end', collected => message.channel.send(`Collected ${collected.size} items`));

message.delete().catch(O_o=>{});

}


module.exports.help = {
name: "filter"
}
