// If You Need Help https://discord.gg/28axwsFX9q (This Project Made By Shadow)
const { Client, GatewayIntentBits, Partials, ActivityType, EmbedBuilder } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
    partials: [Partials.Message, Partials.Channel, Partials.Reaction],
});


const token = "your bot token here";
const probot = "282859044593598464";

client.once('ready', () => {
    client.user.setPresence({
        status: 'dnd',
    });
    client.user.setActivity({
        type: ActivityType.Custom,
        name: 'Probot Premium',
        state: 'Probot Premium',
    });

    console.log(`MY , NAME ${client.user.tag}`);
    console.log(`MY , ID ${client.user.id}`);
    console.log(`MY , GUILDS COUNT ${client.guilds.cache.size}`);
    console.log(`MY , PING ${client.ws.ping}`);
    console.log(`MY , DEVELOPER Shadow4dev`);

});

client.on('messageCreate', async (message) => {
    if (message.author.id === probot) {
        const newMessage = {
            content: message.content || '\u200B',
            embeds: message.embeds.map((embed) => EmbedBuilder.from(embed.data)),
            files: message.attachments.map((attachment) => attachment),
        };

        try {
            await Promise.all([
                message.delete(),
                message.channel.send(newMessage),
            ]);
        } catch {}
    }

    if (message.author.id === client.user.id && message.content.includes("type these numbers to confirm")) {
        setTimeout(() => {
            message.delete().catch(() => {});
        }, 10000);
    } else if (message.author.id === client.user.id && message.content.includes("Cool down")) {
        setTimeout(() => {
            message.delete().catch(() => {});
        }, 2000);
    }
});

client.login(token);
// If You Need Help https://discord.gg/28axwsFX9q (This Project Made By Shadow)