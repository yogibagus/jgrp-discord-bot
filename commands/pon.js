// at the top of your file
const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	name: 'pon',
	description: 'Total Online Player',
	async execute(message, args) {
		// get api
		const jgrp = await fetch('https://monitor.teamshrimp.com/api/fetch/all/139.99.125.54/7777/').then(response => response.json());
		//embed
		const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#12570c')
		.setAuthor('JGRP Bot', 'https://i.ibb.co/vw2GGKS/jg-logo.png', 'https://discord.js.org')
		.addField('Online Player:', jgrp.num_players +"/"+ jgrp.max_players, true)
		// .setImage('https://i.imgur.com/wSTFkRM.png')
		.setTimestamp()
		.setFooter('jogjagamers.org', 'https://i.ibb.co/vw2GGKS/jg-logo.png');

		//send msg
		message.channel.send(exampleEmbed);
	},
};