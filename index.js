// import { create, Client } from '@open-wa/wa-automate';
const wa = require('@open-wa/wa-automate');

wa.create().then(client => start(client));

function start(client) {
  client.onMessage(async message => {
//    console.log(message.from);//passion id = 919328286140-1564742282@g.us

    console.log(message.sender.pushname);
   // console.log(message);
    if (message.from == '919328286140-1564742282@g.us') {
      await client.sendText('917984057894-1615965701@g.us', message.sender.pushname+' said:-');
        await client.forwardMessages('917984057894-1615965701@g.us',message.id,true);

    
    }
  });
}
