const Discord = require('discord.js'); 

module.exports = {
	name: 'ping',
	description: 'Display info about yourself.',
    execute(message, args, client)  {
 
    var pm = Date.now() - message.createdTimestamp;
    var api = client.ws.ping;
    message.channel.send("pong")
     .then((msg)=>{
        
        msg.edit(`\`\`\`Time taken: ${pm} ms\nDiscord API: ${api} ms\`\`\``)
        
      })
    
  },
};

