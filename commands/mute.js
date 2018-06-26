const Discord = require("discord.js");
const ms = require("ms");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

  //!tempmute @user 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let reason = args.slice(1).join(" ");
  let text = args.join(" ");
  if(!args[0] || args[0] === "help") return message.channel.send("Usage: $mute <user> <reason>");
  if(tomute.hasPermission("ADMINISTRATOR")) return message.reply("Can't mute them!");
  if(tomute.id === "332134348725813248") return;
  if(!message.member.hasPermission("MUTE_MEMBERS")) return;
  let muterole = message.guild.roles.find(`name`, "muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }

  await(tomute.addRole(muterole.id));
  let embed = new Discord.RichEmbed()
  .setTitle(`Mute report`)
  .addField("Person Muted", `<@${tomute.id}> has been muted`)
  .addField("Muted by", `${message.author}`)
  .setColor(botconfig.puke)
  .addField("Reason", `${reason ? reason: "none"}`)
  .setTimestamp();
  
  message.delete().catch(O_o=>{});
  message.channel.send(embed);
  //end of module
  
  if(message.content === `${text}`){
    if(message.author.roles.has(muterole.id)){
     message.delete().catch(O_o=>{});  
    message.author.send("You are muted from the server. Please wait for someone to unmute you.");
   }
 }
}
  module.exports.help = {
  name: "mute"
}
