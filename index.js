const { Client, Events, GatewayIntentBits, Partials } = require('discord.js');
const config = require('./settings/config');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ],
    partials: [
        Partials.Channel,
        Partials.GuildMember,
        Partials.Message,
        Partials.User
    ],
    allowedMentions: {
        parse: []
    }
});

client.login(config.bot.token);

client.once(Events.ClientReady, () => {
    console.log('Hello World!');
});

client.on(Events.MessageCreate, async (message) => {
    if (message.content.startsWith('السلام عليكم')) {
        await message.reply({
            content: 'وعليكم السلام ورحمه الله وبركاته',
            allowedMentions: {
                parse: ['everyone', 'roles'],
                repliedUser: false
            }
        });
    }
});