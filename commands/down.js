// at the top of your file
const Discord = require('discord.js');
const fetch = require('node-fetch');


module.exports = {
	name: 'down',
	description: 'Is Server Down?',
	async execute(message, args) {
		// get api
		const jgrp = await fetch('https://monitor.teamshrimp.com/api/fetch/all/139.99.125.54/7777/').then(response => response.json());
		if (jgrp.online == true) {
			var status = 'Tidak, status server sedang online.';
		}else {
			var status = 'Ya, status server sedang offline';
		}

		//embed
		const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#12570c')
		.setAuthor('JGRP Bot', 'https://i.ibb.co/vw2GGKS/jg-logo.png', 'https://discord.js.org')
		.addField('Apakah server down?',status, true)
		// .setImage('https://i.imgur.com/wSTFkRM.png')
		.setTimestamp()
		.setFooter('jogjagamers.org', 'https://i.ibb.co/vw2GGKS/jg-logo.png');

		//send msg
		message.channel.send(exampleEmbed);
	},
};