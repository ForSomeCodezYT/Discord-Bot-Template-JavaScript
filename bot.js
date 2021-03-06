// Dependencies and Variables

const { token } = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();
const glob = require('glob');

// Event Handler

const eventFiles = glob.sync('./events/**/*.js');
for (const file of eventFiles) {
  const event = require(file);
  const eventName = /\/events.(.*).js/.exec(file)[1];
  client.on(eventName, event.bind(null, client));
};

// Command Handler

client.cooldowns = new Discord.Collection();
client.commands = new Discord.Collection();
const commandFiles = glob.sync('./commands/**/*.js');
for (const file of commandFiles) {
  const command = require(file);
  client.commands.set(command.name, command);
};

// Here the bot logs in

client.login(token);