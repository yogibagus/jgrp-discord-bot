// at the top of your file
const Discord = require('discord.js');
const fetch = require('node-fetch');
const samp = require("samp-query");
const { serverip, port } = require('../config.json');
function cleanURL(url) {
	return /^https?:\/\//i.test(url) ? url : `http://${url}`;
};

module.exports = {
	name: 'details',
	description: 'Server Details',
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
			  const embed = new Discord.MessageEmbed()
				.setColor("#12570c")
				.setThumbnail("https://i.ibb.co/vw2GGKS/jg-logo.png")
				.setAuthor("Server Details", "https://i.ibb.co/vw2GGKS/jg-logo.png")
				.addField("Gamemode", `${response["gamemode"]}`)
				.addField("Ip Server", `${settings.host}:${settings.port}`)
				.addField("Mapname", `${response["mapname"]}`)
				.addField("Version", `${response["rules"].version}`)
				.addField("Players", `${response["online"]}/${response["maxplayers"]}`)
				.addField("Website", `[JGRP WEBSITE](${cleanURL(response["rules"].weburl)})`)
				.addField("Time", `${response["rules"].worldtime}`)
				.addField("Map", `${response["rules"].mapname}`)
				.setTimestamp()
				.setFooter(`This command requested by ${message.author.username}#${message.author.discriminator}`);
			  message.channel.send(embed);
			}
		});
	}
}