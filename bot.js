const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "$"

console.log("Welcome Again !");
 


          const devs = ['455653515881218048' , '476759018015162369' , '' , ''];
          const adminprefix = "$";
          client.on('message', message => {
              var argresult = message.content.split(` `).slice(1).join(' ');
                if (!devs.includes(message.author.id)) return;

            if (message.content.startsWith(adminprefix + 'Ast')) {
              client.user.setGame(argresult, "https://www.twitch.tv/ حب بلا حدود");
                message.channel.sendMessage(`**✅   ${argresult}**`)
            }
            });


    client.login(process.env.BOT_TOKEN);
