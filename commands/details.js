// at the top of your file
const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	name: 'details',
	description: 'Server Details',
	async execute(message, args) {
		//get api
		const jgrp = await fetch('https://monitor.teamshrimp.com/api/fetch/all/139.99.125.54/7777/').then(response => response.json());
		if (jgrp.online == true) {
			var status = 'Online';
		}else {
			var status = 'Offline';
		}

		const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#12570c')
		.setTitle('Server Details')
		.setURL('https://jogjagamers.org/')
		.setAuthor('JGRP Bot', 'https://i.ibb.co/vw2GGKS/jg-logo.png', 'https://discord.js.org')
		.setDescription('Load Status: ' + jgrp.error_info)
		.setThumbnail('https://i.ibb.co/vw2GGKS/jg-logo.png')
		.addFields(
			{ name: 'Server Name:', value: jgrp.servername, inline: false },
			{ name: 'Game Type:', value: jgrp.gametype, inline: false },
			{ name: 'Version:', value: jgrp.version, inline: false },
			{ name: 'Server:', value: status, inline: false },
			{ name: 'Web Url:', value: jgrp.weburl, inline: false },
			{ name: 'IP Address:', value: jgrp.ip +":"+ jgrp.port, inline: false },
			{ name: '\u200B', value: '\u200B' },
			{ name: 'Online Player:', value: jgrp.num_players +"/"+ jgrp.max_players, inline: true },
			{ name: 'Map Name:', value: jgrp.mapname , inline: true },
			{ name: 'World Time:', value: jgrp.worldtime , inline: true },
			{ name: 'Weather Code:', value: jgrp.weather , inline: true },
		)
		//.addField('Inline field title', 'Some value here', true)
		// .setImage('https://i.imgur.com/wSTFkRM.png')
		.setTimestamp()
		.setFooter('jogjagamers.org', 'https://i.ibb.co/vw2GGKS/jg-logo.png');

		//send msg
		message.channel.send(exampleEmbed);
	},
};