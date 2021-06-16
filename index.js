const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const fetch = require('node-fetch');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

client.once('ready', async () => {
	// refresh every menute
	setInterval(async function(){ 
		const jgrp = await fetch('https://monitor.teamshrimp.com/api/fetch/all/139.99.125.54/7777/').then(response => response.json());
	    const servername = jgrp.servername;
	    const mode = jgrp.gametype;
	    const players = jgrp.num_players+'/'+jgrp.max_players;

	    client.user.setPresence({
	        status: 'available',
	        activity: {
	            name: servername + ' | ' + players + ' | '+ mode +' | '+ 'Type $help',
	            type: 'PLAYING',
	            url: 'https://jogjagamers.org'
	        }
	    });
	}, 10000);
    console.log('Bot is ready!');
});

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