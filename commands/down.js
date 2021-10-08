// at the top of your file
const Discord = require('discord.js');
const samp = require("samp-query");
const { serverip, port } = require('../config.json');

module.exports = {
    name: 'down',
    description: 'Is Server Down?',
    async execute(message, args) {
        var status;
        var settings = {
            host: serverip,
            port: port,
        };

        samp(settings, function(error, response) {
            if (error) {
                status = 'Ya, status server sedang offline.';
            } else {
                status = 'Tidak, status server sedang online.';
            }
            //embed
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#12570c')
                .setAuthor('JGRP Bot', 'https://i.ibb.co/vw2GGKS/jg-logo.png', 'https://discord.js.org')
                .addField('Apakah server down?', status, true)
                .setTimestamp()
                .setFooter('jogjagamers.org', 'https://i.ibb.co/vw2GGKS/jg-logo.png');

            message.channel.send(exampleEmbed);
        })
    },
};