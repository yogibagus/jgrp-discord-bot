// at the top of your file
const Discord = require('discord.js');

module.exports = {
	name: 'help',
	description: 'Help - Available Command List',
	execute(message, args) {
		const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#12570c')
		.setTitle('Available Command List')
		.setURL('https://jogjagamers.org/')
		.setAuthor('JGRP Bot', 'https://i.ibb.co/vw2GGKS/jg-logo.png', 'https://discord.js.org')
		.setDescription('Berikut merupakan list command yang tersedia. \n Jangan lupa gunakan prefix $.')
		.setThumbnail('https://i.ibb.co/vw2GGKS/jg-logo.png')
		.addFields(
			{ name: '\u200B', value: '\u200B' },
			{ name: '$cmd', value: 'Command List', inline: true },
			{ name: '$ip', value: 'Server IP', inline: true },
			{ name: '$down', value: 'Check server down', inline: true },
			{ name: '$pon', value: 'Jumlah player online', inline: true },
			{ name: '$details', value: 'Server details', inline: true },
			{ name: '$about', value: 'About this bot', inline: true },
			{ name: '\u200B', value: '\u200B' },
		)
		//.addField('Inline field title', 'Some value here', true)
		// .setImage('https://i.imgur.com/wSTFkRM.png')
		.setTimestamp()
		.setFooter('jogjagamers.org', 'https://i.ibb.co/vw2GGKS/jg-logo.png');

		//send msg
		message.channel.send(exampleEmbed);
	},
};