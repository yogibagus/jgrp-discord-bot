// at the top of your file
const Discord = require('discord.js');
const samp = require("samp-query");
const { serverip, port } = require('../config.json');

module.exports = {
	name: 'pon',
	description: 'Total Online Player',
	async execute(message, args) {
		var settings = {
			host: serverip,
			port: port,
		};

		samp(settings, function (error, response) {
			if (error) {
			  message.channel.send(`Server Offline try again`);
			  console.log(error);
			} else {
				const exampleEmbed = new Discord.MessageEmbed()
				.setColor('#12570c')
				.setAuthor('JGRP Bot', 'https://i.ibb.co/vw2GGKS/jg-logo.png', 'https://discord.js.org')
				.addField('Online Player:', `${response["online"]}/${response["maxplayers"]}`, true)
				.setTimestamp()
				.setFooter('jogjagamers.org', 'https://i.ibb.co/vw2GGKS/jg-logo.png');
				message.channel.send(exampleEmbed)
			}
		})
	},
};