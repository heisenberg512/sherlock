const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //!tempmute @user 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!args[0] || args[0] === "help") return message.channel.send("Usage: $mute <user> <time in seconds>");
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
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("You didn't specify a time!");

  await(tomute.addRole(muterole.id));
  message.channel.send(`**<@${tomute.id}> has been muted for ${ms(ms(mutetime))}**`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`**<@${tomute.id}> has been unmuted!**`);
  }, ms(mutetime));


//end of module
}

module.exports.help = {
  name: "mute"
}
