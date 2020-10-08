const { Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'test',
    description: 'Example Test Command',
    aliases: ['testing'],
    guildOnly: false,
    cooldown: 5,
    usage: '<command>',
    category: 'Util',
    execute(message, args) {
        const embed = new MessageEmbed()
        .setColor("GREEN")
        .setTitle(args)
    }
}