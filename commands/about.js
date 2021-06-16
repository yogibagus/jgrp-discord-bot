// at the top of your file
const Discord = require('discord.js');

module.exports = {
	name: 'about',
	description: 'Max Players',
	async execute(message, args) {
		// url
		let jgprofile = new URL('https://jogjagamers.org/profile/42404-stranger123');
		let site = new URL('https://yogibagus.github.io');
		//embed
		const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#12570c')
		.setAuthor('JGRP Bot', 'https://i.ibb.co/vw2GGKS/jg-logo.png', 'https://discord.js.org')
		.setDescription('Tentang JGRP Bot \n Jika ada kritik saran langsung hubungi saya atau balas di thread forum.')
		.addFields(
			{ name: 'Bot Version:', value: 'v1.0' , inline: true },
			{ name: 'Deplyoment:', value: 'Heroku' , inline: true },
			{ name: 'Bot Status:', value: 'Online' , inline: true },
			{ name: '\u200B', value: '\u200B' },
			{ name: 'Author:', value: '[stranger123]('+jgprofile+'/)' , inline: true },
			{ name: 'Site:', value: '[Github Page]('+site+'/)' , inline: true },
		)
		.setTimestamp()
		.setFooter('jogjagamers.org', 'https://i.ibb.co/vw2GGKS/jg-logo.png');

		//send msg
		message.channel.send(exampleEmbed);
	},
};