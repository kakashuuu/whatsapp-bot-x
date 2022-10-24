const Message = require('../../Structures/Message')

module.exports = class command extends Command {
    constructor() {
        super('neko', {
            description: 'Sends random neko image',
            category: 'weeb',
            usage: 'neko',
            exp: 20,
            cooldown: 5
        })
    }

    /**
     * @param {Message} M
     * @returns {Promise<void>}
     */

    execute = async (M: Message): Promise<void> => {
       const prefix = this.client.config.prefix
       const buttons = [
        { buttonId: `${prefix}blowjob`, buttonText: {displayText: 'NEXT ➡️'}, type: 1},
     ]
       const buttonMessage = {
       image: { url: 'https://api-reysekha.herokuapp.com/api/nsfw/blowjob?apikey=APIKEY'},
       caption: '*Here, you go!*',
       footer: `${this.client.config.name}`,
       buttons: buttons,
       headerType: 1
     }
       return void (await this.client.sendMessage(M.from, buttonMessage))
    }
}
