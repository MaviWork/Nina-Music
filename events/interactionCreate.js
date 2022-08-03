module.exports.run = async (client, interaction) => {


    if (interaction.isCommand()) {
  
        const command = client.slash.get(interaction.commandName);
        if (!command) return interaction.reply({ content: 'an Erorr' });
if (!command) return

  const player = client.poru.players.get(interaction.guild.id);
  const memberChannel = interaction.member.voice.channelId;
  const botChannel = interaction.guild.me.voice.channelId;


    //Voice Only
    if (command.inVc && !memberChannel) {
      return interaction.reply('تکایە برۆ ڤۆیسەک ئنجا کۆماند لێدە')
    }
  //same vc
  if (command.sameVc && player && botChannel !== memberChannel) {

    return interaction.reply('ژورەکە  فولە')


  }
  //player
  if (command.player && !player) {
    return  interaction.followUp(`No Player exists for this Guild!`)
  }
    if (command.current && !player.currentTrack){
interaction.followUp("There is nothing playing right now!")
    }



//error aayga sayad



      
       
        try {

            command.run(client, interaction)

        } catch (e) {

            interaction.reply({ content: e.message });


        }

    }


}
