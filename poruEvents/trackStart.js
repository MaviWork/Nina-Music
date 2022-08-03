const discord = require("discord.js")
const ms = require("ms")
module.exports.run = async (client,player,track) => {

  const embed = new discord.MessageEmbed()
  .setAuthor({name:`ئێستا ئەمە پێکراوە`,iconURL: track.info.requester.displayAvatarURL()})
  .setColor("WHITE")
  .setDescription(`
**لینکی گۆرانی**
[${track.info.title}](${track.info.uri})

**ناوی چەناڵ**
${track.info.author}

**SOURCE**
${track.info.sourceName}

**چەند دەقەیە**
${ms(track.info.length)}

`)
  .setImage(track.info.image)
return player.textChannel.send({ embeds: [embed]});

}
