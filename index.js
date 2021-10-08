const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token, serverip, port } = require('./config.json');
const fetch = require('node-fetch');
const samp = require("samp-query");
const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}
//function
function Status()
{
	var settings = {
		host: serverip,
		port: port,
	};
    samp(settings, function(error, response){
        if(error)
        {
			console.log("Server Offline")
			console.log(error)
        }
        else
        {
            status = `${response["online"]}/${response["maxplayers"]} Players`;
            client.user.setActivity(status, {type: `PLAYING`});
        }
    })
}

client.once('ready', async () => {
	//Interval
	Status();setInterval(Status, 10000)
    console.log('Bot is ready!');
})

client.login(token);

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	// cmd get from /commands dinamicly
	if (!client.commands.has(commandName)) return;

	const command = client.commands.get(commandName);

	try {
		client.commands.get(commandName).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});