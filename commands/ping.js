const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message, args) {
		message.channel.send('Pinging...').then((msg) => {
		 ping = msg.createdTimestamp - message.createdTimestamp;
		 const embed = new Discord.MessageEmbed()
		  .setColor(`RANDOM`)
		  .setTitle(`Ping`)
		  .setDescription(
		   "Pong! bot's ping is `" + ping + 'ms`.'
		  );
		 message.channel.send(embed);
		 msg.delete();
		});
	},
};