const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!"

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
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

client.login('NzE5NDMwNTUwOTMwMzI1NTY0.Xt3ZBw.boKfq_xjZMCmGbc5NmY_H6f2asY');