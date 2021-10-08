// at the top of your file
const Discord = require('discord.js');
const { serverip, port } = require('../config.json');

module.exports = {
	name: 'ip',
	description: 'Server IP',
	async execute(message, args) {
		const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#12570c')
		.setAuthor('JGRP Bot', 'https://i.ibb.co/vw2GGKS/jg-logo.png', 'https://discord.js.org')
		.addField('IP Addres', serverip + ":" + port, true)
		// .setImage('https://i.imgur.com/wSTFkRM.png')
		.setTimestamp()
		.setFooter('Forum jogjagamers.org', 'https://i.ibb.co/vw2GGKS/jg-logo.png');

		//send msg
		message.channel.send(exampleEmbed);
	},
};