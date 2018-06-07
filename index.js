const Discord = require("discord.js");
const botconfig = require("./botconfig.json");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if (err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands");
    return;
  }

  jsfile.forEach((f, i) =>{
  let props = require(`./commands/${f}`);
  console.log(`${f} loaded!`);
  bot.commands.set(props.help.name, props);
    });

});


bot.on("ready", async () => {
  console.log(`${bot.user.username} is now online`);
  bot.user.setActivity(".", {type: "Playing"});
});

bot.on("guildMemberAdd", async (member) => {
  const guild = member.guild;
let notify = guild.channels.find("name", "notifications");
  notify.send(`**Welcome to ${guild.name} Discord server**, <@${member.id}> `);
});

bot.on("guildMemberRemove", async (member) => {
  const guild = member.guild;
let notify = guild.channels.find("name", "notifications");
  notify.send(`${member.user.username}#${member.user.discriminator} **has left ${guild.name} Discord server** `);
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let forbidden = ["lesbo, porn, dick, sex, vagene, bobs, vagina, pussy, cum, creampie, bc, mc, bsdk, bhsondrike, bhonsrike"];
  
  if(message.content.includes(forbidden)){
  message.delete().catch(O_o=>{});
    message.reply("Mind your language");
  }
  
     
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

if(!prefixes[message.guild.id]){
  prefixes[message.guild.id] = {
    prefixes: botconfig.prefix
  };
}

  let prefix = prefixes[message.guild.id].prefixes;
  
//   let prefix = botconfig.prefix;
  if(!message.content.startsWith(prefix)) return;
  let messageArray = message.content.split(' ');
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
if(commandfile) commandfile.run(bot, message, args);



});

bot.login(process.env.BOT_TOKEN);
