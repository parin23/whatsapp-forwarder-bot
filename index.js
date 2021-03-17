const wa = require('@open-wa/wa-automate');

wa.create().then(client => start(client));

function start(client) {
  client.onMessage(async message => { // This function will be called when any message is detected
    console.log(message.from);//Use this for finding the sender or reciever id

   console.log(message.sender.pushname); // will output sender name in console
   console.log(message);
    if (message.from == 'xxx82@g.us') {//enter the sender ID in this if condition for example '919328286140-1564742282@g.us'
      await client.sendText('xx701@g.us', message.sender.pushname+' said:-');//will send name of the message sender
        await client.forwardMessages('xx701@g.us',message.id,true);// This line will forward message , Sender -> reciever xx701@g.us is reciever
   
    }
  });
}
