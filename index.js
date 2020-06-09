const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (!message.content.startsWith(config.prefix) || message.author.bot) return;

	const args = message.content.slice(config.prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'embed') {
    const embed = new Discord.MessageEmbed()
      .setDescription(args.join(" "))
    message.channel.send(embed);
	} else if (command === 'sendimage') {
		message.channel.send({files: ["https://cdn.discordapp.com/attachments/719783216491528207/719787890678431814/friendscat.jpg"]});
	} else if (command === 'ss') {
		message.channel.send("**We all know what *ss* stands for!**\nIt obviously stands for Shot Siobhan!\n\n*xd*")
	}
	// other commands...
});

client.login(config.token);
